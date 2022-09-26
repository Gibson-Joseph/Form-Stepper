import React, { useEffect, useState, useRef, createRef } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formPage } from "../../redux/actions/form/Form.action";
import {
  addFormData,
  removeFormData,
} from "../../redux/actions/form/Form.action";
import { StateType } from "../../redux/model/State.type";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Stepper from "../Stepper";

type FormValue = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  phoneNo: string;
  course: string;
  language: string[];
  college: string;
  checked: boolean;
};

const ContainerForm = () => {
  const state = useSelector((state: any) => state.form);
  const [popUp, setPopup] = useState(false);

  const [formState, setFormState] = useState<FormValue>({
    firstName: state.firstName,
    lastName: state.lastName,
    age: state.age,
    email: state.email,
    password: state.password,
    gender: state.gender,
    phoneNo: state.phoneNo,
    course: state.course,
    language: state.language,
    college: state.college,
    checked: false,
  });

  const method = useForm<FormValue>({
    defaultValues: formState,
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors, isValid, isDirty, touchedFields },
  } = method;

  const watchAllFIeld = watch();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextHandler = async () => {
    const res = await trigger();
    if (res) {
      dispatch(addFormData(watchAllFIeld));
      dispatch(formPage(state.activePage + 1));
    }
  };

  const backHandler = () => {
    dispatch(formPage(state.activePage - 1));
  };

  const renderComponent = () => {
    switch (state.activePage) {
      case 0:
        return <Step1 err={errors} valid={isValid} isDirty={isDirty} />;
      case 1:
        return <Step2 err={errors} valid={isValid} />;
      case 2:
        return <Step3 err={errors} />;
    }
  };

  const onSubmit = (data: any) => {
    console.log("data --->", data);
    dispatch(addFormData(data));
  };

  const back = () => {
    if (
      isDirty ||
      (!isDirty && state.activePage == 1) ||
      (!isDirty && state.activePage == 2)
    ) {
      return setPopup(!popUp);
    }
    navigate("/");
  };

  const Exit = () => {
    reset(formState, { keepDefaultValues: true });
    dispatch(removeFormData());
    navigate("/");
  };
  const edit = () => {
    setPopup(!popUp);
  };

  return (
    <div className="h-screen lg:flex-row flex flex-col lg:justify-center lg:items-center relative">
      {popUp && (
        <div className="absolute border bg-slate-300 opacity-100 shadow-lg">
          <h1 className="font-bold m-3">
            please confirmed don't save the details
          </h1>
          <div className="flex justify-between m-3">
            <button
              onClick={() => Exit()}
              className="border  px-6 py-1 bg-red-500"
            >
              Exit
            </button>
            <button
              onClick={() => edit()}
              className="border px-4 py-1 bg-green-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <Stepper stepper={state.activePage} setActive={nextHandler} />
      <FormProvider {...method}>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={`border lg:ml-10 lg:shadow-xl bg-white ${
            state.activePage === 1 || (2 && "lg:w-1/2")
          } ${state.activePage === 0 && "lg:w-1/2"} ${popUp && ""}`}
          autoComplete="off"
        >
          <button
            type="button"
            onClick={() => back()}
            className="border rounded-full mt-2 ml-2 inline hover:bg-red-100"
          >
            <svg
              className=""
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              height="32"
              width="32"
            >
              <path d="M11.62 3.81 7.43 8l4.19 4.19-1.53 1.52L4.38 8l5.71-5.71 1.53 1.52z" />
            </svg>
          </button>
          <div className="my-2 mx-2">
            {renderComponent()}
            <div className="w-full">
              {state.activePage > 0 && (
                <button
                  onClick={() => backHandler()}
                  type="button"
                  className="bg-gray-400 px-8 py-1 rounded float-left mb-3"
                >
                  Back
                </button>
              )}
              {state.activePage === 2 && (
                <input
                  className="bg-red-500 px-8 py-1 rounded float-right mb-3"
                  type="submit"
                />
              )}
              {state.activePage < 2 && (
                <button
                  onClick={() => nextHandler()}
                  type="button"
                  className="bg-green-500 px-8 py-1 rounded float-right mb-3"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default ContainerForm;
