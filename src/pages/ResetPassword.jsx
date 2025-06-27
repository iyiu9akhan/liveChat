import { ClassNames } from "@emotion/react";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import { Await, Link, Navigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import {
  fetchSignInMethodsForEmail,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

function ResetPassword() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [shakeEmail, setShakeEmail] = useState(false);
  const triggerShakeEmail = () => {
    setShakeEmail(false);
    setTimeout(() => {
      setShakeEmail(true);
    }, 10);
  };

  const handleAnimationEnd = () => {
    setShakeEmail(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

const resetPassword = () => {
  if (!email) {
    setEmailErr("Please enter a valid email address");
    triggerShakeEmail();
    return;
  }

  console.log("Checking email:", email);

  fetchSignInMethodsForEmail(auth, email)
    .then((methods) => {
      console.log("Sign-in methods for email:", methods);

      if (!methods || !methods.includes("password")) {
        setEmailErr("No account found with this email");
        triggerShakeEmail();
        return;
      }

      return sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Password reset email sent to " + email);
          setEmail("");
        })
        .catch((error) => {
          console.error("Error sending reset email:", error);
          setEmailErr("Failed to send reset email");
          triggerShakeEmail();
        });
    })
    .catch((error) => {
      console.error("Error fetching sign-in methods:", error);
      if (error.code === "auth/invalid-email") {
        setEmailErr("Please enter a valid email address");
      } else {
        setEmailErr("Error: " + (error.message || "Unexpected error"));
      }
      triggerShakeEmail();
    });
};



  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <MdOutlinePublishedWithChanges className="text-orange text-[150px] mb-6" />
          <p className="capitalize font-regular text-[35px] font-medium text-heading mb-10">
            forget your password?
          </p>
        </div>
        <div className="w-[500px] flex flex-col justify-center">
          <TextField
            value={email}
            className={shakeEmail ? "shake" : ""}
            onAnimationEnd={handleAnimationEnd}
            onChange={handleEmail}
            label="Email Address"
            variant="outlined"
            type="text"
            error={!!emailErr}
            helperText={emailErr}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "81px",
                borderRadius: "8.6px",
                "& fieldset": {
                  // borderColor: emailErr ? "#FF0000" : "#11175D4D",
                  borderWidth: "2px",
                  opacity: 0.8,
                },
                "&:hover fieldset": {
                  borderColor: emailErr ? "#FF0000" : "#11175D4D",
                },
                "&.Mui-focused fieldset": {
                  borderColor: emailErr ? "#FF0000" : "#11175D4D",
                },
                "& input::placeholder": {
                  color: emailErr ? "#FF0000" : "#999",
                },
                "& input": {
                  paddingLeft: "20px",
                  paddingTop: "12px",
                  fontSize: "20px",
                  color: "#11175D",
                },
              },
              "& label": {
                fontSize: "20px",
                top: "10px",
                left: "10px",
                color: emailErr ? "#FF0000" : "#11175D",
              },
              "& label.MuiInputLabel-shrink": {
                top: "1px",
                left: "1px",
                fontSize: "16px",
                color: emailErr ? "#FF0000" : "#11175D",
                backgroundColor: "#fff",
                padding: "0 12px",
                letterSpacing: "3px",
              },
            }}
          />
          <button
            className="capitalize text-[25px] font-medium w-full bg-orange rounded-[8.6px] mt-5 h-[44px] text-white cursor-pointer"
            onClick={resetPassword}
          >
            reset passowrd
          </button>
          <div className="flex justify-center items-center mt-6 gap-3">
            <Link
              to="/login"
              className="flex items-center gap-3 cursor-pointer"
            >
              <FaChevronLeft />
              <span className="font-regular">Back to Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
