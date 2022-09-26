import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const FormChile2 = ({ method, err }: any) => {
  const {
    register,
    formState,
    formState: { errors, isDirty },
  } = useFormContext();

  const backClick = () => {
    method(false);
  };

  useEffect(() => {
    console.log("FormChild -- 2");
  }, []);

  return (
    <div className="">
      <h2 className="text-center">Child 2</h2>
      <div className="flex flex-col px-10">
        <label htmlFor="phno" className="flex">
          Phone No
        </label>

        <input
          {...register("phoneNo", {
            required: {
              value: true,
              message: "required",
            },
          })}
          className="border m-2"
          type="number"
          id="phno"
          placeholder="Phone Number"
        />
        <p className="text-sm text-red-500 flex">{err.phoneNo?.message}</p>
        <label htmlFor="date" className="flex">
          text
        </label>

        <input
          {...register("hobbie", {
            required: {
              value: true,
              message: "Require",
            },
          })}
          className="border m-2"
          type="text"
        />
        <p className="text-sm text-red-500 flex">{err.hobbie?.message}</p>
      </div>
      {/* <button type="button" onClick={() => backClick()}>
        back
      </button> */}
      {/* <input type="submit" /> */}
    </div>
  );
};
