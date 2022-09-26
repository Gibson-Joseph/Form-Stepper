import React, { useEffect } from "react";

import { useFormContext } from "react-hook-form";

export const FormChild1 = ({ err }: any) => {
  const {
    control,
    register,
    // formState,
    // formState: { errors },
  } = useFormContext();

  // console.log("errors", errors);
  console.log("err", err);

  useEffect(() => {
    console.log("FormChild -- 1");
  }, []);

  return (
    <div>
      <h2 className="text-center">Child 1</h2>
      <div className="flex flex-col px-10">
        <label htmlFor="fname" className="flex">
          First Name
        </label>

        <input
          {...register("firstname", {
            required: {
              value: true,
              message: "This is Importent",
            },
          })}
          className="border m-2 py-1"
          type="text"
          id="lname"
          placeholder="First Name"
        />
        <p className="text-sm text-red-500 flex">{err.firstname?.message}</p>
        <label htmlFor="lname" className="flex">
          Last Name
        </label>

        <input
          {...register("lastName", {
            required: {
              value: true,
              message: "this is importent",
            },
          })}
          className="border m-2 py-1"
          type="text"
          id="lname"
          placeholder="Last Name"
        />
        <p className="text-red-500 text-sm flex">{err.lastName?.message}</p>
      </div>
      {/* <button type="button">Next</button> */}
    </div>
  );
};
