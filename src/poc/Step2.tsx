import { useFormContext } from "react-hook-form";
import {
  InputnameValidaion,
  RadioBtnValidation,
} from "./constent/ConstValidation";

const Step2 = ({ err, valid }: any) => {
  const { register } = useFormContext();

  return (
    <div>
      <h1 className="text-center p-2 font-sans font-extrabold">
        Personal Details
      </h1>
      <div className="flex flex-col">
        <div className="lg:flex lg:justify-between">
          <div className="px-4 flex flex-col my-2">
            <label htmlFor="fname">First Name</label>
            <input
              {...register("firstName", InputnameValidaion)}
              type="text"
              placeholder="First Name"
              className={`border-b p-1 ${
                err.firstName?.type === "required" && "border-b-red-500"
              }`}
            />
            <span className="text-red-500 text-sm h-5">
              {err.firstName?.message}
            </span>
          </div>

          <div className="px-4 flex flex-col my-2">
            <label htmlFor="lname">Last Name</label>
            <input
              {...register("lastName", InputnameValidaion)}
              type="text"
              placeholder="Last Name"
              className={`border-b p-1 ${
                err.lastName?.type === "required" && "border-b-red-500"
              }`}
            />
            <span className="text-red-500 text-sm h-5">
              {err.lastName?.message}
            </span>
          </div>
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="px-4 flex flex-col my-2">
            <label htmlFor="fname">Phone No</label>
            <input
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Phone Number is Required",
                },
              })}
              type="number"
              placeholder="Phone Number"
              className={`border-b p-1 ${
                err.phoneNo?.type === "required" && "border-b-red-500"
              }`}
            />
            <span className="text-red-500 text-sm h-5">
              {err.phoneNo?.type === "required" && "required"}
            </span>
          </div>
          <div className="px-4 flex flex-col my-2">
            <label htmlFor="fname">Age</label>
            <input
              {...register("age", {
                required: {
                  value: true,
                  message: "Age is Required",
                },
              })}
              type="number"
              placeholder="Age"
              className={`border-b p-1 ${
                err.age?.type === "required" && "border-b-red-500"
              }`}
            />
            <span className="text-red-500 text-sm h-5">{err.age?.message}</span>
          </div>
        </div>

        <div className="px-4 my-2 lg:w-1/3">
          <label className="mr-5" htmlFor="gender">
            Gender
          </label>
          <div className="flex flex-col float-right ">
            <label className="p-0.5" htmlFor="male">
              <input
                {...register("gender", RadioBtnValidation)}
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <span className="ml-3">Male</span>
            </label>
            <label className="p-0.5" htmlFor="female">
              <input
                {...register("gender", RadioBtnValidation)}
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <span className="ml-3">Female</span>
            </label>
            <label className="p-0.5" htmlFor="other">
              <input
                {...register("gender", RadioBtnValidation)}
                type="radio"
                name="gender"
                id="other"
                value="other"
              />
              <span className="ml-3">Other</span>
            </label>
          </div>
          <p className="text-red-500 text-sm h-5">{err.gender?.message}</p>
        </div>
      </div>
    </div>
  );
};
export default Step2;
