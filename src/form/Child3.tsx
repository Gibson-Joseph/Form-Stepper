import { useFormContext } from "react-hook-form";

const Child3 = ({ err }: any) => {
  const { register } = useFormContext();
  return (
    <div>
      <h1>Child 3</h1>
      <div className="flex">
        <label htmlFor="age">First Name</label>
        <input
          {...register("age", {
            required: {
              value: true,
              message: "Require",
            },
          })}
          id="age"
          className="border mx-2"
          type="number"
          placeholder="Age"
        />
      </div>
    </div>
  );
};
export default Child3;
