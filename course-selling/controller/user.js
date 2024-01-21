require("dotenv").config({ path: "config/config.env" });
const fs = require('fs');
const path = require('path');
const htmlTemplatePath = path.join(__dirname, 'email-template.html');
const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');
const htmlVerifiedPath = path.join(__dirname, 'email-verified.html');
const htmlVerified = fs.readFileSync(htmlVerifiedPath, 'utf8');


const UserModel = require("../models/user");
const nodemailer = require("nodemailer");
const notifier = require("node-notifier");
const user = require("../models/user");
const BACKEND_URL=process.env.BACKEND_URL;

module.exports.signup = async (req, res) => {
  const newUser = new UserModel({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    mobile: req.body.mobile,
    isVerify: "NO",
  });

  // email should not exist alreday
  try {
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      notifier.notify({ title: "Alert!", message: "Email already exists" });
      res.send({ code: 500, message: "Email already exists" });
    } else {

             //save data to create and track user_id for sending mail
      await newUser
        .save()
        .then()
        .catch((err) => {
          console.log("error in saving data" + err);
        });

      try {
        let user = await UserModel.findOne({ email: req.body.email });
        const user_id = user._id;
        await sendVerifyMail(req.body.name, req.body.email, user_id);

      } catch (error) {
        console.log("error in sending mail  " + error);
      }

      res.send({ code: 200, message: "Signup success" });
    }
  } catch {
    res.send({ code: 500, message: "signup server fail" });
  }
};

//sending account verification mail
const sendVerifyMail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SEVICE,
        pass: process.env.EMAIL_PASS,
      },
    });

    const processedHtmlTemplate = htmlTemplate
  .replace('{name}', name)
  .replace('{verificationLink}', `${BACKEND_URL}/signupverify?id=${encodeURIComponent(user_id)}`);

    const mailOptions = {
      from: process.env.EMAIL_SEVICE,
      to: email,
      subject: "for verification mail",
      html: processedHtmlTemplate,
    };
console.log("this part is done");
    await transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("eroor in sending verification mail" + err);
      } else {
        console.log("verification Email has been sent : ");
      }
    });
    
  } catch (error) {
    console.log("error in sending mail" + error.message);
  }
};
module.exports.verifyMail = async (req, res) => {
  try {
    await user.updateOne({ _id: req.query.id }, { $set: { isVerify: "YES" } });
    console.log("email-verifyed");
    res.end(htmlVerified);
  } catch (error) {
    console.log("err in verfyMail " + error.message);
  }
};

module.exports.signin =async (req, res) => {
  // email and password match

  await UserModel.findOne({ email: req.body.email })
    .then((result) => {
      // match password with req.body.password
      if (result.isVerify === "YES") {
        if (result.password !== req.body.password) {
          notifier.notify({ title: "Alert!", message: "YOUR password wrong" });
          res.send({ code: 404, message: "password wrong" });
        } else {
           res.send({
            email: result.email,
            name: result.name,
            code: 200,
            message: "user Found",
            token: "hfgdhg",
          });
        }
      } else {
        notifier.notify({
          title: "Alert!",
          message: "Please verify your mail and then login...",
        });
        res.send({ code: 500, message: "mail verification not completed" });
      }
    })
    .catch((err) => {
      notifier.notify({ title: "Alert!", message: "user not found" });
      res.send({ code: 500, message: "user not found" });
    });
};

module.exports.sendotp = async (req, res) => {
  const _otp = Math.floor(100000 + Math.random() * 900000);
  let user = await UserModel.findOne({ email: req.body.email });
  // send to user mail
  if (!user) {
    notifier.notify({ title: "Alert!", message: "YOU are NOT registerd" });
    res.send({ code: 404, message: "user not found" });
  } else {
    //sending OTP mail to registered user only
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SEVICE,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "rishavrajverma44job1@gmail.com",
      to: req.body.email, // list of receivers
      subject: "OTP", // Subject line
      text: String(_otp),
      html:
        `<html>
            < body >
            Hello and welcome <h1>YOUR OTP IS : ` +
        _otp +
        `</h1><h3>with Regards,</h3><h3>online course selling app</h3>
        </body>
        </ >
       </html > `,
    });

    if (info.messageId) {
      UserModel.updateOne({ email: req.body.email }, { otp: _otp })
        .then((result) => {
          console.log("otp sent");
          res.send({ code: 200, message: "otp send" });
        })
        .catch((err) => {
          res.send({ code: 500, message: "Server err" });
        });
    } else {
      res.send({ code: 500, message: "Server err" });
    }
  }
};

module.exports.submitotp = (req, res) => {
  UserModel.findOne({ otp: req.body.otp })
    .then((result) => {
      //  update the password

      UserModel.updateOne(
        { email: result.email },
        { password: req.body.password }
      )
        .then((result) => {
          notifier.notify({
            title: "Alert!",
            message: "YOUR password is reset",
          });
          res.send({ code: 200, message: "Password updated" });
        })
        .catch((err) => {
          res.send({ code: 500, message: "Server err" });
        });
    })
    .catch((err) => {
      notifier.notify({ title: "Alert!", message: "WRONG password" });
      res.send({ code: 500, message: "otp is wrong" });
    });
};









module.exports.profileupdate = async (req, res) => {
  try {
    const result = await UserModel.findOne({ email: req.body.email });

    if (!result) {
      notifier.notify({
        title: "Alert!",
        message: "Email not found",
      });
      console.log("Email not found");
      return res.status(404).send({ code: 404, message: "Email not found" });
    }

    if (result.isVerify !== "YES") {
      notifier.notify({
        title: "Alert!",
        message: "Please verify your email and then login...",
      });
      console.log("Email not verified");
      return res.status(401).send({
        code: 401,
        message: "Please verify your email and then login...",
      });
    }

    if (result.password !== req.body.password) {
      notifier.notify({
        title: "Alert!",
        message: "Wrong password",
      });
      console.log("Wrong password");
      return res.status(401).send({ code: 401, message: "Wrong password" });
    }

    await UserModel.updateMany(
      {},
      {
        $set: {
          password: req.body.password,
          mobile: req.body.mobile,
          name: req.body.name,
        },
      }
    );

    console.log("Profile updated");
    await res.send({
      email: result.email,
      name: result.name,
      mobile:result.mobile,
      code: 200,
      message: "Profile-Updated",
      token: "hfgdhg",
    });

    notifier.notify({
      title: "Alert!",
      message: "Profile Updated",
    });


  } catch (error) {
    console.error("Error updating profile:", error);
    notifier.notify({
      title: "Alert!",
      message: "Server error",
    });
    res.status(500).send({ code: 500, message: "Server error" });
  }
};
