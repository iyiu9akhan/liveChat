import React from "react";
import regImg from "../../assets/registration/registration.png";
import Container from "../Layout/Container";
import { useFormControl } from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

function Registration() {
  return (
    <>
      <Container>
        <div className="h-screen mx-auto flex justify-center  items-center gap-[69px]">
          <div>
            <h2 className="font-primary font-bold text-[35px] text-heading mb-13px">
              Get started with easily register
            </h2>
            <p className="font-primary text-[20px] text-black/50 mb-[40px]">
              Free register and you can enjoy it
            </p>
            <div className="flex flex-col gap-[56px] mb-[51px]">
              <TextField
                label="Email Address"
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
                label="Password"
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
              />
            </div>
            <div className="w-[368px] bg-primary rounded-full flex justify-center items-center h-[67px] cursor-pointer mb-[35px]">
              <div className="bg-[#5B36F5]/25 rounded-[86px] blur-[13px] h-[28px] w-[71px] relative"></div>
              <button className=" text-white font-primary capitalize text-[20px] absolute">
                sign up
              </button>
            </div>
            <p className="text-center w-[368px] font-regular text-[13px] text-secondary">
              Already have an account ? <span className="font-bold text-[#EA6C00]"><a href="#">Sign In</a></span>
            </p>
          </div>
          <div>
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
