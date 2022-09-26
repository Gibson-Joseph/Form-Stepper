import { useEffect, useState } from "react";
import { useFormContext, FormProvider, useForm } from "react-hook-form";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

type FormValue = {
  firstName: string;
  lastName: string;
  age: string;
};

const Form = () => {
  const method = useForm<FormValue>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
    },
    shouldFocusError: true,
  });
  const {
    trigger,
    formState: { errors },
  } = method;

  const [active, setActive] = useState(0);
  const [isValid, setIsValid] = useState();

  const onSubmit = (data: any) => {
    console.log("data ---> ", data);
  };

  const handleNext = async () => {
    const res = await trigger();

    console.log(res);

    if (res) {
      setActive(active + 1);
    }
    // method.trigger("firstName");
  };

  const handleBack = () => {
    setActive(active - 1);
  };

  const renderSwitch = () => {
    switch (active) {
      case 0:
        return <Child1 err={errors} />;
      case 1:
        return <Child2 err={errors}/>;
      case 2:
        return <Child3 />;
    }
  };

  console.log("render");

  useEffect(() => {}, []);

  return (
    <div>
      <FormProvider {...method}>
        <form action="" className="" onSubmit={method.handleSubmit(onSubmit)}>
          {/* <Child1 /> */}
          {/* <Child2 err={errors} />
          <Child3 err={errors} /> */}
          {renderSwitch()}
          <div>
            {active > 0 && (
              <button
                onClick={() => handleBack()}
                type="button"
                className="bg-blue-500 px-2 mx-1"
              >
                Back
              </button>
            )}
            {active < 2 && (
              <button
                onClick={() => handleNext()}
                type="button"
                className="bg-pink-500 px-2 mx-1"
              >
                Next
              </button>
            )}
            {active === 2 && (
              <input className="bg-rose-500  px-2 mx-1" type={`submit`} />
            )}
          </div>
          <div className=" flex">
            <span
              className={` w-5 h-5 mx-1 rounded-full ${
                active === 0 ? "bg-green-500" : "bg-gray-500"
              } `}
            ></span>
            <span
              className={` w-5 h-5 mx-1 rounded-full ${
                active === 1 ? "bg-green-500" : "bg-gray-500"
              } `}
            ></span>
            {/* <span className={`bg-gray-500 rounded-full w-5 h-5`}></span> */}
            <span
              className={` w-5 h-5 mx-1 rounded-full ${
                active === 2 ? "bg-green-500" : "bg-gray-500"
              } `}
            ></span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
