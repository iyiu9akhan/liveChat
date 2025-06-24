import React, { useState } from "react";
import logImg from "../assets/login/login.jpg";
import Container from "../components/Layout/Container";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

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

    if (!pass) {
      setPassErr(true);
      triggerShakePass();
    } else {
      console.log(pass);
    }
    if (email && pass) {
      console.log("login done");
      setEmail("");
      setPass("");
    }
  };
  return (
    <>
      <Container>
        <div className="h-screen mx-auto flex justify-between md:items-center md:gap-[69px]">
          <div className="md:ml-[190px] mx-auto md:ms-0">
            <h2 className="font-primary font-bold mt-[50px] text-center md:text-left md:mt-0 text-[33px] md:text-[35px] text-heading mb-[29px]">
              Login to your account !
            </h2>
            <div className="flex items-center gap-[10px] border-2 border-secondary/30 rounded-[8px] w-[220px] h-[62px] justify-center mb-[32px] cursor-pointer mx-auto md:ms-0">
              <FcGoogle size={20} />
              <h6 className="capitalize font-secondary font-semibold text-[13px] text-secondary">
                login with google
              </h6>
            </div>
            <div className="flex flex-col gap-[20px] md:gap-[56px] mb-[33px]  md:mb-[51px] items-center md:items-start">
              <TextField
                value={email}
                className={shakeEmail ? "shake" : ""}
                onAnimationEnd={handleAnimationEnd}
                onChange={handleEmail}
                label="Email Address"
                variant="standard"
                type="email"
                error={!!emailErr}
                sx={{
                  width: "368px",
                  "& .MuiInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: emailErr ? "#FF0000" : "#11175D4D",
                      borderWidth: "2px",
                      opacity: 0.8,
                    },
                      "&:after": {
                        borderBottom: `2px solid ${
                          passErr ? "#FF0000" : "#11175D4D"
                        }`,
                      },
                      "&:hover:before": {
                        borderBottomColor: passErr ? "#FF0000" : "#11175D4D",
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
                      paddingTop: "30px",
                      fontSize: "20px",
                      color: "#11175D",
                    },
                  },
                  "& label": {
                    fontSize: "20px",
                    top: "30px",
                    left: "2px",
                    color: emailErr ? "#FF0000" : "#11175D",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "35px",
                    fontSize: "16px",
                    color: emailErr ? "#FF0000" : "#11175D",
                    backgroundColor: "#fff",
                    letterSpacing: "3px",
                  },
                }}
              />
              <div className={`relative ${shakePass ? "shake" : ""} `}>
                <TextField
                  value={pass}
                  onAnimationEnd={handleAnimationEnd}
                  onChange={handlePass}
                  label="Password"
                  variant="standard"
                  type={visible ? "password" : "text"}
                  error={!!passErr}
                  sx={{
                  width: "368px",
                  "& .MuiInput-root": {
                    height: "81px",
                    borderRadius: "8.6px",
                    "& fieldset": {
                      borderColor: emailErr ? "#FF0000" : "#11175D4D",
                      borderWidth: "2px",
                      opacity: 0.8,
                    },
                      "&:after": {
                        borderBottom: `2px solid ${
                          passErr ? "#FF0000" : "#11175D4D"
                        }`,
                      },
                      "&:hover:before": {
                        borderBottomColor: passErr ? "#FF0000" : "#11175D4D",
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
                      paddingTop: "30px",
                      fontSize: "20px",
                      color: "#11175D",
                    },
                  },
                  "& label": {
                    fontSize: "20px",
                    top: "30px",
                    left: "2px",
                    color: emailErr ? "#FF0000" : "#11175D",
                  },
                  "& label.MuiInputLabel-shrink": {
                    top: "35px",
                    fontSize: "16px",
                    color: emailErr ? "#FF0000" : "#11175D",
                    backgroundColor: "#fff",
                    letterSpacing: "3px",
                  },
                }}
                />
                {visible ? (
                  <IoEyeOff
                    onClick={() => setVisible(!visible)}
                    size={20}
                    className="absolute right-[5%] top-[50%] translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <IoEye
                    onClick={() => setVisible(!visible)}
                    size={20}
                    className="absolute right-[5%] top-[50%] translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div
              onClick={handleSignUp}
              className="w-[368px] bg-primary rounded-[9px] flex justify-center items-center h-[67px] cursor-pointer mb-[35px] mx-auto md:mx-0"
            >
              <button className=" text-white font-primary capitalize text-[20px] absolute cursor-pointer">
                Login to Continue
              </button>
            </div>
            <p className="md:w-[368px] font-regular text-[13px] text-secondary ">
              Don’t have an account ?{" "}
              <span className="font-bold text-[#EA6C00]">
                <Link to="/registration">Sign up</Link>
              </span>
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src={logImg}
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
