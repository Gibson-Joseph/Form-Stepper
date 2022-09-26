import { useFormContext } from "react-hook-form";
import { CheckboxValidation } from "./constent/ConstValidation";

const Step3 = ({ err }: any) => {
  const { register, formState } = useFormContext();

  return (
    <div className="lg:p-8 w-full">
      <h1 className="text-center p-2 font-sans font-extrabold">
        Educational Details
      </h1>
      <div>
        <div className="lg:flex justify-between">
          <div className="">
            <label htmlFor="course">Course</label>
            <select
              {...register("course")}
              id="course"
              className="ml-3 py-1 float-right"
            >
              <option value="">Select Course</option>
              <option value="Bsc">Bsc</option>
              <option value="B.Com">B.Com</option>
              <option value="12th">12th</option>
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="course">College</label>
            <select
              {...register("college")}
              id="course"
              className=" ml-3 py-1 float-right"
            >
              <option value="">Select College</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        <div className="lg:flex mt-8 justify-between">
          <div className="lg:flex">
            <div className="flex flex-col">
              <label htmlFor="">Languages Known</label>
              <p className="text-sm text-red-500">{err.language?.message}</p>
            </div>
            <div className="m-auto w-1/2 lg:w-full flex flex-col lg:ml-3 ">
              <label htmlFor="tamil">
                <input
                  type="checkbox"
                  {...register("language", CheckboxValidation)}
                  id="tamil"
                  value="tamil"
                />
                <span className="ml-3">Tamil</span>
              </label>
              <label htmlFor="english">
                <input
                  type="checkbox"
                  {...register("language", CheckboxValidation)}
                  id="english"
                  value="english"
                />
                <span className="ml-3">English</span>
              </label>
              <label htmlFor="hindi">
                <input
                  type="checkbox"
                  {...register("language", CheckboxValidation)}
                  id="hindi"
                  value="hindi"
                />
                <span className="ml-3">Hindi</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="more">
              <input {...register("checked")} type="checkbox" id="more" /> Add
              More
            </label>
            <textarea className="border my-3" id="more"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step3;
