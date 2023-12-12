const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config({ path: "config/config.env" });
const mongoose = require("mongoose");
const cors = require("cors");
const userController = require("./controller/user");
const paymentController = require("./controller/paymentController");
const PORT=process.env.PORT;

const app = express();
app.use(cors(
    {
        origin: ["https://course-selling-app-six.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true,
        optionsSuccessStatus: 204,
    }
));
app.use(express.json());
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Specify the views directory
app.set('views','./views');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error in connecting to MongoDB:", err));


// const connectDB =  async ()=>{

//   try{
//       const conn = await mongoose.connect(process.env.MONGO_URI,{
//           //must add in order to not get any error masseges:
//           useUnifiedTopology:true,
//           useNewUrlParser: true,
//           useCreateIndex: true
//       })
//       console.log(`mongo database is connected!!! ${conn.connection.host} `)
//   }catch(error){
//       console.error(`Error: ${error} `)
//       process.exit(1) //passing 1 - will exit the proccess with error
//   }

// }
// connectDB();

app.get('/',(req,res)=>{
  res.json("hello from SERVER");
})


app.post("/signup", userController.signup);
app.post("/signin", userController.signin);
app.get("/signupverify",userController.verifyMail)
app.post("/submit-otp", userController.submitotp);
app.post("/send-otp", userController.sendotp);
app.post("/profileupdate",userController.profileupdate);


app.post("/orders", paymentController.orders);
app.post("/verify", paymentController.verify);
app.get("/getkey", (req, res) =>
  res.status(200).json({ key: process.env.KEY })
);


app.listen(PORT, () => {
  console.log(`Backend Running At Port `+PORT);
});
