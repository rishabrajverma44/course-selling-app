import React from "react";
import axios from "axios";
import Frontend from "./Frontend";
import { useState } from "react";
import { url } from "../../Backend-url";

const Payment = ({ amount }) => {
  const email = localStorage.getItem("EMAIL");
  const [err, setErr]=useState("")

  const handleOpenRazorpay = async (data) => {
    const {data: { key }} = await axios.get(url+"/getkey")
    const options = {
      key: key,
      amount: data.amount,
      currency: data.currency,
      name: "COURSE_SELLING_APP",
      description: "payment",
      image: "https://classroomclipart.com/image/static7/preview2/one-open-book-with-plant-design-elements-55799.jpg",
      order_id: data.id,
      handler: function (response) {
        axios
          .post(url+"/verify", { response: response })
          .then((res) => {
            if(res.data.code===200)
            {
              setErr("Congrats We received Your Payment")
              console.log("payment done")
            }  
          })
          .catch((err) => {
            console.log("error :" + err);
          });
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const handlePayment = (amount) => {
    const _data = { amount: amount, email: email};
    axios
      .post(url+"/orders", _data)
      .then((res) => {
        if (res.data.code === 404) {
          setErr("Your Payment Already Done !")
          alert("YOUR PAYMENT alredy done");
        }else{
        handleOpenRazorpay(res.data);}
      })
      .catch((err) => {
        console.log("error in frontend while order creation" + err);
      });
  };

  return <Frontend event={() => handlePayment(amount)} error={{err}} />;
};

export default Payment;
