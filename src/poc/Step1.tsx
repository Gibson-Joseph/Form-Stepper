import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

const Step1 = ({ err, valid, isDirty }: any) => {
  const {
    register,
    formState: { isValid },
  } = useFormContext();

  const state = useSelector((state: any) => state.form);

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
        <div className="px-4 flex flex-col my-2">
          <label htmlFor="lname">Password</label>
          <input
            {...register("password", {
              required: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
                message: "Number Only",
              },
            })}
            type="password"
            placeholder="Password"
            className={`border-b p-1 ${
              err.password?.type === "required" && "border-b-red-500"
            }`}
          />
          <span className="text-sm text-red-500 h-5">
            {err.password?.type === "required" && "required "}
            {!valid && err.password?.message}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Step1;
