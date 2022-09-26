import React, { useEffect, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { FormChild1 } from "../formComponenet/FormChild1";
import { FormChile2 } from "../formComponenet/FormChild2";

type FormValue = {
  firstName: string;
  lastName: string;
  phoneNo: number;
  hobbie: string;
};

export const Form = () => {
  const method = useForm<FormValue>({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNo: 0,
      hobbie: "",
    },
  });

  const {
    formState: { errors, isValid, isSubmitSuccessful },
  } = method;
  console.log("isSubmitSuccessful", isSubmitSuccessful);

  const err = errors;

  const [next, setNext] = useState(false);

  const nextClick = () => {
    if (isValid) {
      setNext(!next);
      console.log("next", next);
    }
  };

  const backClick = () => {
    setNext(!next);
  };

  const onSubmit = (data: any) => {
    console.log("data -->", data);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-slate-400 m-auto w-1/2">
        <FormProvider {...method}>
          <form
            action=""
            onSubmit={method.handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <div className={`${!isSubmitSuccessful ? "visible" : "hidden"}`}>
              <FormChild1 err={err} />
            </div>
            {isSubmitSuccessful && <FormChile2 method={setNext} err={err} />}
            {/* <div className="w-1/3 float-right py-2">
              {!next && (
                <button
                  className="border lg:px-8 bg-red-600"
                  type={`${!isValid ? "submit" : "button"}`}
                  onClick={() => nextClick()}
                >
                  Next
                </button>
              )}

              {next && (
                <button
                  className="border lg:px-8 bg-red-600 m-auto"
                  onClick={() => backClick()}
                >
                  back
                </button>
              )}
            </div> */}
            <button
              className="border lg:px-8 bg-red-600"
              type={`${!isSubmitSuccessful ? "submit" : "button"}`}
              onClick={() => nextClick()}
            >
              Next
            </button>
            <button
              className="border lg:px-8 bg-red-600"
              type={`${isSubmitSuccessful ? "submit" : "button"}`}
              onClick={() => backClick()}
            >
              Back
            </button>

            {/* <button type="submit">Submit</button> */}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
