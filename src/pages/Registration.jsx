import React, { useState } from "react";
import regImg from "../assets/registration/registration.png"
import Container from "../components/Layout/Container"
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function Registration() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [shakeEmail, setShakeEmail] = useState(false);
  const triggerShakeEmail = () => {
    setShakeEmail(false);
    setTimeout(() => {
      setShakeEmail(true);
    }, 10);
  };

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [shakeName, setShakeName] = useState(false);
  const triggerShakeName = () => {
    setShakeName(false);
    setTimeout(() => {
      setShakeName(true);
    }, 10);
  };

  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [shakePass, setShakePass] = useState(false);
  const triggerShakePass = () => {
    setShakePass(false);
    setTimeout(() => {
      setShakePass(true);
    }, 10);
  };
  const [visible, setVisible] = useState(true);

  const handleAnimationEnd = () => {
    setShakeEmail(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    setPassErr("");
  };

  const handleSignUp = () => {
    if (!email) {
      setEmailErr(true);
      triggerShakeEmail();
    } else {
      console.log(email);
    }
    if (!name) {
      setNameErr(true);
      triggerShakeName();
    } else {
      console.log(name);
    }
    if (!pass) {
      setPassErr(true);
      triggerShakePass();
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
            <div className="flex flex-col gap-[20px] md:gap-[56px] mb-[33px]  md:mb-[51px] items-center md:items-start">
              <TextField
                className={shakeEmail ? "shake" : ""}
                onAnimationEnd={handleAnimationEnd}
                onChange={handleEmail}
                label="Email Address"
                variant="outlined"
                type="email"
                error={!!emailErr}
                sx={{
                  width: "368px",
                  "& .MuiOutlinedInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: emailErr ? "#FF0000" : "#11175D4D",
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
              {/* {emailErr && <p>{emailErr}</p>} */}
              <TextField
                className={shakeName ? "shake" : ""}
                onAnimationEnd={handleAnimationEnd}
                onChange={handleName}
                label="Full Name"
                variant="outlined"
                type="text"
                error={!!nameErr}
                sx={{
                  width: "368px",
                  "& .MuiOutlinedInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: nameErr ? "#FF0000" : "#11175D4D",
                      borderWidth: "2px",
                      opacity: 0.8,
                    },
                    "&:hover fieldset": {
                      borderColor: nameErr ? "#FF0000" : "#11175D4D",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: nameErr ? "#FF0000" : "#11175D4D",
                    },
                    "& input::placeholder": {
                      color: nameErr ? "#FF0000" : "#999",
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
                    color: nameErr ? "#FF0000" : "#11175D",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "1px",
                    left: "1px",
                    fontSize: "16px",
                    color: nameErr ? "#FF0000" : "#11175D",
                    backgroundColor: "#fff",
                    padding: "0 12px",
                    letterSpacing: "3px",
                  },
                }}
              />
              {/* {nameErr && <p>{nameErr}</p>} */}
              <div className={`relative ${shakePass ? "shake" : ""}`}>
                <TextField
                  onAnimationEnd={handleAnimationEnd}
                  onChange={handlePass}
                  label="Password"
                  variant="outlined"
                  type={visible ? "password" : "text"}
                  error={!!passErr}
                  sx={{
                    width: "368px",
                    "& .MuiOutlinedInput-root": {
                      height: "81px",
                      borderRadius: "8.6px",
                      "& fieldset": {
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
                        borderWidth: "2px",
                        opacity: 0.8,
                      },
                      "&:hover fieldset": {
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
                      },
                      "& input::placeholder": {
                        color: passErr ? "#FF0000" : "#999",
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
                      color: passErr ? "#FF0000" : "#11175D",
                    },
                    "& label.MuiInputLabel-shrink": {
                      top: "1px",
                      left: "1px",
                      fontSize: "16px",
                      color: passErr ? "#FF0000" : "#11175D",
                      backgroundColor: "#fff",
                      padding: "0 12px",
                      letterSpacing: "3px",
                    },
                  }}
                />
                {visible ? (
                  <IoEyeOff
                    onClick={() => setVisible(!visible)}
                    size={20}
                    className="absolute right-[5%] top-[50%] -translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <IoEye
                    onClick={() => setVisible(!visible)}
                    size={20}
                    className="absolute right-[5%] top-[50%] -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
              {/* {passErr && <p>{passErr}</p>} */}
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
                <a href="#">Sign up</a>
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
