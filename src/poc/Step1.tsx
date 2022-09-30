import { checkPrime } from "crypto";
import React, { useEffect, useState } from "react";
import { useFormContext, ValidateResult } from "react-hook-form";
import { useSelector } from "react-redux";

const Step1 = ({ err, valid, isDirty, setError }: any) => {
  const {
    register,
    formState: { isValid },
  } = useFormContext();
  console.log(err);

  const state = useSelector((state: any) => state.form);
  // const [passErr, setPassErr] = useState({
  //   min: false,
  //   max: false,
  //   upper: false,
  //   lower: false,
  //   special: false,
  // });

  const [min, setMin] = useState(false);
  const [max, setMax] = useState(false);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [special, setSpecial] = useState(false);
  const [num, setNum] = useState(false);

  const [visible, setVisible] = useState(false);

  const clickEyeBtn = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (!isDirty) {
      setLower(false);
      setUpper(false);
      setMin(false);
      setMax(false);
      setSpecial(false);
    }
  }, [isDirty]);
  useEffect(() => {}, []);

  // console.log("passErr", passErr);

  return (
    <div>
      <h1 className="text-center p-2 font-sans font-extrabold">Sigin In</h1>
      <div className="flex flex-col">
        <div className="px-4 flex flex-col my-2">
          <label htmlFor="fname">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="text"
            placeholder="Email"
            className={`border-b p-1 ${
              err.email?.type === "required" && "border-b-red-500"
            }`}
          />
          <span className="text-sm text-red-500 h-5">
            {err.email?.type === "required" && "required "}
            {!valid && err.email?.message}
          </span>
        </div>
        <div className="px-4 flex flex-col my-2  relative">
          <label htmlFor="lname">Password</label>
          <input
            {...register("password", {
              required: true,
              // pattern: {
              //   value:
              //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              //   // value: /^(0|[1-9]\d*)(\.\d+)?$/,
              //   message: "Create a strong password",
              // },
              // maxLength: {
              //   value: 12,
              //   message: "maximum 12 char",
              // },
              // minLength: {
              //   value: 8,
              //   message: "minimum 8 char",
              // },

              validate: {
                minCharValidate: (v: any): any => {
                  let flag = 0;
                  if (v.length > 7) {
                    ++flag;
                    setMin(true);
                  } else {
                    setMin(false);
                  }
                  if (v.length > 7 && v.length < 11) {
                    ++flag;
                    setMax(true);
                  } else {
                    setMax(false);
                  }
                  if (v.match(/[A-Z]/)) {
                    ++flag;
                    setUpper(true);
                  } else {
                    setUpper(false);
                  }
                  if (v.match(/[a-z]/)) {
                    ++flag;
                    setLower(true);
                  } else {
                    setLower(false);
                  }
                  if (v.match(/[!@#$%^&*_=+-]/)) {
                    ++flag;
                    setSpecial(true);
                  } else {
                    setSpecial(false);
                  }
                  if (v.match(/[0-9]/)) {
                    ++flag;
                    setNum(true);
                  } else {
                    setNum(false);
                  }
                  if (flag !== 6) {
                    return "strong your password";
                  }
                },
              },
            })}
            type={`${visible ? "text" : "password"}`}
            placeholder="Password"
            className={`border-b p-1 focus:outline-none ${
              err.password?.type === "required" && "border-b-red-500"
            }`}
          />
          <span className="absolute right-9 top-6">
            <button type="button" onClick={() => clickEyeBtn()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M21.83 11.442A19.711 19.711 0 0 0 18.018 7.4l3.689-3.689-1.414-1.418-3.966 3.966A8.774 8.774 0 0 0 12 5c-5.441 0-9.653 6.179-9.83 6.442L1.8 12l.374.558A19.711 19.711 0 0 0 5.982 16.6l-3.689 3.693 1.414 1.414 3.966-3.966A8.774 8.774 0 0 0 12 19c5.441 0 9.653-6.179 9.83-6.442L22.2 12zM4.242 12C5.336 10.59 8.469 7 12 7a6.47 6.47 0 0 1 2.853.733l-.834.834A3.947 3.947 0 0 0 12 8a4 4 0 0 0-4 4 3.947 3.947 0 0 0 .567 2.019l-1.16 1.16A17.993 17.993 0 0 1 4.242 12zM14 12a2 2 0 0 1-2 2 1.96 1.96 0 0 1-.511-.075l2.436-2.436A1.96 1.96 0 0 1 14 12zm-4 0a2 2 0 0 1 2-2 1.96 1.96 0 0 1 .511.075l-2.436 2.436A1.96 1.96 0 0 1 10 12zm2 5a6.47 6.47 0 0 1-2.853-.733l.834-.834A3.947 3.947 0 0 0 12 16a4 4 0 0 0 4-4 3.947 3.947 0 0 0-.567-2.019l1.16-1.16A17.993 17.993 0 0 1 19.758 12c-1.094 1.41-4.227 5-7.758 5z" />
              </svg>
            </button>
          </span>
          <span className="text-sm text-red-500 h-5">
            {err.password?.type === "required" && "required "}
            {!valid && err.password?.message}
          </span>
        </div>
        {isDirty && (
          <div className="px-4">
            <h5 className=" mb-1">Password Requirment</h5>

            <div className="flex flex-col">
              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (min ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path
                      // fill="green"
                      d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z"
                    />
                    {min && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !min ? "underline decoration-red-500" : ""
                  }`}
                >
                  Minimum 8 charcter
                </span>
              </div>
              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (max ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z" />
                    {max && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !max ? "underline decoration-red-500" : ""
                  }`}
                >
                  Maximum 12 charcter
                </span>
              </div>
              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (upper ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path
                      // fill="green"
                      d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z"
                    />
                    {upper && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !upper ? "underline decoration-red-500" : ""
                  }`}
                >
                  should be present one Uppercase
                </span>
              </div>
              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (lower ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path
                      // fill="green"
                      d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z"
                    />
                    {lower && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !lower ? "underline decoration-red-500" : ""
                  }`}
                >
                  Should be present one Laowercase
                </span>
              </div>
              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (special ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path
                      // fill="green"
                      d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z"
                    />
                    {special && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !special ? "underline decoration-red-500" : ""
                  }`}
                >
                  Should be present one special Character
                </span>
              </div>

              <div className="flex my-1">
                <svg
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill={`${isDirty ? (num ? "green" : "red") : ""}`}
                >
                  <g data-name="45-Check">
                    <path
                      // fill="green"
                      d="M30 15v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15z"
                    />
                    {num && (
                      <path
                        className={`${!isDirty && "hidden"}`}
                        d="m7.71 13.29-1.42 1.42 7 7a1 1 0 0 0 1.41 0l16-16-1.41-1.42L14 19.59z"
                      />
                    )}
                  </g>
                </svg>
                <span
                  className={`text-sm ml-2 ${
                    isDirty && !num ? "underline decoration-red-500" : ""
                  }`}
                >
                  Should be present one number
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Step1;
