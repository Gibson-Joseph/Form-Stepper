import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const Child1 = ({ err }: any) => {
  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();
  useEffect(()=>{
  })
  return (
    <div>
      <h1>Child 1</h1>
      <div className="flex">
        <label htmlFor="fname">First Name</label>
        <input
          {...register("firstName", {
            required: {
              value: true,
              message: "Required",
            },
          })}
          className="border mx-2"
          type="text"
          placeholder="First Name"
        />
        <p className="text-red-600 text-sm">{err.firstName?.message}</p>
      </div>
    </div>
  );
};
export default Child1;
