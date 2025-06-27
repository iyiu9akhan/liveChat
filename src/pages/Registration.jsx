import React, { useState } from "react";
import regImg from "../assets/registration/registration.png";
import Container from "../components/Layout/Container";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { HashLoader } from "react-spinners";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

function Registration() {
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
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
    let hasError = false;
    if (!email) {
      setEmailErr("Email is required");
      triggerShakeEmail();
      hasError = true;
    } else {
      console.log(email);
    }
    if (!name) {
      triggerShakeName();
      setNameErr("Name is required");
      hasError = true;
    } else {
      console.log(name);
    }
    if (!pass) {
      triggerShakePass();
      setPassErr("Password is required");
      hasError = true;
    } else {
      if (!/(?=.*[0-9])/.test(pass)) {
        setPassErr("Password must contain a single digit from 1 to 9.");
        hasError = true;
      } else if (!/(?=.*[a-z])/.test(pass)) {
        setPassErr("Password must contain one lowercase letter.");
        hasError = true;
      } else if (!/(?=.*[A-Z])/.test(pass)) {
        setPassErr("Password must contain one uppercase letter.");
        hasError = true;
      } else if (!/(?=.*\W)/.test(pass)) {
        setPassErr("Password must contain one special character.");
        hasError = true;
      } else if (!/^.{8,16}$/.test(pass)) {
        setPassErr("Password must be between 8 and 16 characters.");
        hasError = true;
      } else {
        console.log(pass);
      }
    }

    if (hasError) return;
    
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        sendEmailVerification(auth.currentUser);
        toast.success("registration done");
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }, 2000);
        setEmail("");
        setName("");
        setPass("");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Registration error:", error.message);
        if (error.message.includes("email-already-in-use")) {
          setEmailErr("This email is already registered");
        } else if (error.message.includes("invalid-email")) {
          setEmailErr("Please enter a valid email address");
        } else if (error.message.includes("weak-password")) {
          setPassErr("Password should be at least 6 characters");
        }
      });
  };
  return (
    <>
      <Container>
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
        <div className="h-screen mx-auto flex justify-between md:items-center md:gap-[69px]">
          <div className="md:ml-[190px]">
            <h2 className="font-primary font-bold mt-[50px] text-center md:text-left md:mt-0 text-[33px] md:text-[35px] text-heading">
              Get started with easily register
            </h2>
            <p className="font-primary text-[20px] text-black/50 mb-[25px] md:mb-[40px] text-center md:text-left">
              Free register and you can enjoy it
            </p>
            <div className="flex flex-col gap-[20px] md:gap-[56px] mb-[33px]  md:mb-[51px] items-center md:items-start">
              <TextField
                value={email}
                className={shakeEmail ? "shake" : ""}
                onAnimationEnd={handleAnimationEnd}
                onChange={handleEmail}
                label="Email Address"
                variant="outlined"
                type="email"
                helperText={emailErr}
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
              <TextField
                value={name}
                className={shakeName ? "shake" : ""}
                onAnimationEnd={handleAnimationEnd}
                onChange={handleName}
                label="Full Name"
                variant="outlined"
                type="text"
                error={!!nameErr}
                helperText={nameErr}
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
              <div className={`relative ${shakePass ? "shake" : ""}`}>
                <TextField
                  value={pass}
                  onAnimationEnd={handleAnimationEnd}
                  onChange={handlePass}
                  label="Password"
                  variant="outlined"
                  type={visible ? "password" : "text"}
                  error={!!passErr}
                  helperText={passErr}
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
                        paddingTop: "18px",
                        fontSize: "20px",
                        color: "#11175D",
                        paddingRight: "50px",
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
                    className="absolute right-[5%] top-[45px] -translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <IoEye
                    onClick={() => setVisible(!visible)}
                    size={20}
                    className="absolute right-[5%] top-[45px] -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="w-[368px] h-[67px] mb-[35px] mx-auto md:mx-0">
              {!loading ? (
                <div
                  onClick={handleSignUp}
                  className="bg-primary rounded-full flex justify-center items-center h-full w-full cursor-pointer"
                >
                  <span className="text-white font-primary capitalize text-[20px]">
                    Sign Up
                  </span>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full w-full">
                  <HashLoader color="#EA6C00" size={40} speedMultiplier={1.3} />
                </div>
              )}
            </div>

            <p className="text-center md:w-[368px] font-regular text-[13px] text-secondary ">
              Already have an account ?{" "}
              <span className="font-bold text-[#EA6C00]">
                <Link to="/login">Sign In</Link>
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
