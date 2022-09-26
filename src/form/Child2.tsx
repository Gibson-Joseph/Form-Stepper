import { useFormContext } from "react-hook-form";

const Child2 = ({ err }: any) => {
  const { register } = useFormContext();
  return (
    <div>
      <h1>Child 2</h1>
      <div className="flex">
        <label htmlFor="lname">First Name</label>
        <input
          {...register("lastName", {
            required: {
              value: true,
              message: "Required",
            },
          })}
          className="border mx-2"
          type="text"
          id="lname"
          placeholder="Last Name"
        />
        <p className="text-red-600 text-sm">{err.lastName?.message}</p>
      </div>
    </div>
  );
};
export default Child2;
