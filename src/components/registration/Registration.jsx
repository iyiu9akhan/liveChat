import React, { useState } from "react";
import regImg from "../../assets/registration/registration.png";
import Container from "../Layout/Container";
import TextField from "@mui/material/TextField";

function Registration() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("")

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("")
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSignUp = () => {
    if (!email) {
     setEmailErr("Enter Your Email");
    } else {
      console.log(email);
    }
    if (!name) {
      console.log("Enter Your Name");
    } else {
      console.log(name);
    }
     if (!pass) {
      console.log("Enter Your Password");
    } else {
      console.log(pass);
    }
  };
  return (
    <>
      <Container>
        <div className="h-screen mx-auto flex justify-between md:items-center md:gap-[69px]">
          <div className="md:ml-[190px]">
            <h2 className="font-primary font-bold mt-[50px] text-center md:text-left md:mt-0 text-[33px] md:text-[35px] text-heading mb-13px">
              Get started with easily register
            </h2>
            <p className="font-primary text-[20px] text-black/50 mb-[25px] md:mb-[40px] text-center md:text-left">
              Free register and you can enjoy it
            </p>
            <div className="flex flex-col gap-[26px] mb-[33px] md:gap-[56px] md:mb-[51px] items-center md:items-start">
              <TextField
                onChange={handleEmail}
                label="Email Address"
                variant="outlined"
                type="email"
                sx={{
                  width: "368px",
                  "& .MuiOutlinedInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: "#11175D",
                      opacity: 0.3,
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#11175D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#11175D",
                    },
                    "& input": {
                      paddingLeft: "20px",
                      paddingTop: "12px",
                      fontSize: "20px",
                    },
                  },
                  "& label": {
                    fontSize: "20px",
                    top: "10px",
                    left: "10px",
                    color: "#11175D",
                    backgroundColor: "transparent",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "1px",
                    left: "1px",
                    fontSize: "16px",
                    color: "#11175D",
                    backgroundColor: "#fff",
                    padding: "0 12px",
                    letterSpacing: "3px",
                  },
                }}
              />{" "}
              <p>{emailErr}</p>
              <TextField
                onChange={handleName}
                label="Full Name"
                variant="outlined"
                type="text"
                sx={{
                  width: "368px",
                  "& .MuiOutlinedInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: "#11175D",
                      opacity: 0.3,
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#11175D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#11175D",
                    },
                    "& input": {
                      paddingLeft: "20px",
                      paddingTop: "12px",
                      fontSize: "20px",
                    },
                  },
                  "& label": {
                    fontSize: "20px",
                    top: "10px",
                    left: "10px",
                    color: "#11175D",
                    backgroundColor: "transparent",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "1px",
                    left: "1px",
                    fontSize: "16px",
                    color: "#11175D",
                    backgroundColor: "#fff",
                    padding: "0 12px",
                    letterSpacing: "3px",
                  },
                }}
              />{" "}
              <TextField
              onChange={handlePass}
                label="Password"
                variant="outlined"
                type="password"
                sx={{
                  width: "368px",
                  "& .MuiOutlinedInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: "#11175D",
                      opacity: 0.3,
                      borderWidth: "2px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#11175D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#11175D",
                    },
                    "& input": {
                      paddingLeft: "20px",
                      paddingTop: "12px",
                      fontSize: "20px",
                    },
                  },
                  "& label": {
                    fontSize: "20px",
                    top: "10px",
                    left: "10px",
                    color: "#11175D",
                    backgroundColor: "transparent",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "1px",
                    left: "1px",
                    fontSize: "16px",
                    color: "#11175D",
                    backgroundColor: "#fff",
                    padding: "0 12px",
                    letterSpacing: "3px",
                  },
                }}
              />
            </div>
            <div
              onClick={handleSignUp}
              className="w-[368px] bg-primary rounded-full flex justify-center items-center h-[67px] cursor-pointer mb-[35px] mx-auto md:mx-0"
            >
              <div className="bg-[#5B36F5]/25 rounded-[86px] blur-[13px] h-[28px] w-[71px] relative"></div>
              <button className=" text-white font-primary capitalize text-[20px] absolute cursor-pointer">
                sign up
              </button>
            </div>
            <p className="text-center md:w-[368px] font-regular text-[13px] text-secondary ">
              Already have an account ?{" "}
              <span className="font-bold text-[#EA6C00]">
                <a href="#">Sign In</a>
              </span>
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={regImg}
              alt="#regImg"
              className="h-screen object-contain"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Registration;
