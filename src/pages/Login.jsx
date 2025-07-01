import React, { useState } from "react";
import logImg from "../assets/login/login.jpg";
import Container from "../components/Layout/Container";
import TextField from "@mui/material/TextField";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { getAuth } from "firebase/auth";
import { HashLoader } from "react-spinners";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState(false);
  const [disableErr, setDisbleErr] = useState(false);
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
    setLoginErr(false);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
    setPassErr("");
    setLoginErr(false);
  };

  const handleSignIn = () => {
    let hasError = false;
    if (!email) {
      setEmailErr("Email is required");
      triggerShakeEmail();
      hasError = true;
    }

    if (!pass) {
      triggerShakePass();
      setPassErr("Password is required");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);

    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log(auth.currentUser);
        toast.success("Login Successfully");
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }, 2000);
        setEmail("");
        setPass("");
        setPassErr(false);
        setEmailErr(false);
        setDisbleErr(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.code === "auth/invalid-credential") {
          setLoginErr(true);
          setEmailErr(true);
          setPassErr(true);
        } else if (error.code === "auth/user-disabled") {
          setDisbleErr(true);
          setEmailErr(true);
          setPassErr(true);
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
          <div className="md:ml-[190px] mx-auto md:ms-0">
            <h2 className="font-primary font-bold mt-[50px] text-center md:text-left md:mt-0 text-[33px] md:text-[35px] text-heading mb-[29px]">
              Login to your account !
            </h2>
            <div className="flex items-center gap-[10px] border-2 border-secondary/30 rounded-[8px] w-[220px] h-[62px] justify-center mb-[32px] cursor-pointer mx-auto md:ms-0">
              <FcGoogle size={20} />
              <h6 className="font-secondary font-semibold text-[13px] text-secondary">
                Login with Google
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
                helperText={emailErr}
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
                        emailErr ? "#FF0000" : "#11175D4D"
                      }`,
                    },
                    "&:hover:before": {
                      borderBottomColor: emailErr ? "#FF0000" : "#11175D4D",
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
                  helperText={passErr}
                  type={visible ? "password" : "text"}
                  error={!!passErr}
                  sx={{
                    width: "368px",
                    "& .MuiInput-root": {
                      height: "81px",
                      borderRadius: "8.6px",
                      "& fieldset": {
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
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
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: passErr ? "#FF0000" : "#11175D4D",
                      },
                      "& input::placeholder": {
                        color: passErr ? "#FF0000" : "#999",
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
                      color: passErr ? "#FF0000" : "#11175D",
                    },
                    "& label.MuiInputLabel-shrink": {
                      top: "35px",
                      fontSize: "16px",
                      color: passErr ? "#FF0000" : "#11175D",
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
            {loginErr && (
              <p className="text-[#FF0000] font-medium text-base font-secondary w-[368px] mb-5 text-justify">
                Authentication failed. Please verify your email and password,
                then try again.
              </p>
            )}
            {disableErr && (
              <p className="text-[#FF0000] font-medium text-base font-secondary w-[368px] mb-5 text-justify">
                Your account has been disabled. Please contact support.
              </p>
            )}
            <div className="w-[368px] h-[67px] mb-[35px] mx-auto md:mx-0">
              {!loading ? (
                <div
                  onClick={handleSignIn}
                  className="bg-primary rounded-full flex justify-center items-center h-full w-full cursor-pointer"
                >
                  <span className="text-white font-primary capitalize text-[20px]">
                    Login to Continue
                  </span>
                </div>
              ) : (
                <div className="flex justify-center items-center h-full w-full">
                  <HashLoader color="#EA6C00" size={40} speedMultiplier={1.3} />
                </div>
              )}
            </div>
            <div className="flex justify-between md:w-[368px]">
              <p className="font-regular text-[13px] text-secondary ">
                Don’t have an account ?{" "}
                <span className="font-bold text-[#EA6C00]">
                  <Link to="/registration">Sign up</Link>
                </span>
              </p>
              <p className="font-regular text-[13px] text-secondary cursor-pointer">
                <Link to="/resetPassword"> Forgotten password?</Link>
              </p>
            </div>
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

export default Login;
