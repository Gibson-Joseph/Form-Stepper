const Stepper = ({ stepper, setActive }: any) => {
  const clickHandler = (num: any) => {
    setActive();
  };

  return (
    <div className="flex flex-row lg:flex-col m-3 lg:h-screen items-center justify-center ">
      <button
        className={`w-8 h-8 rounded-full ${
          stepper >= 0 ? "bg-green-500" : "bg-gray-400 text-center"
        } `}
        onClick={() => clickHandler(0)}
      >
        {stepper > 0 ? (
          <svg
            className="inline"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height="25"
            width="25"
          >
            <path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z" />
          </svg>
        ) : (
          1
        )}
      </button>
      <hr
        className={`lg:w-0 w-16 lg:h-16 outline ${
          stepper >= 1 ? "outline-green-500" : "outline-gray-400"
        } `}
      />
      <button
        className={`w-8 h-8 rounded-full ${
          stepper >= 1 ? "bg-green-500" : "bg-gray-400 text-center"
        } `}
        onClick={() => clickHandler(1)}
      >
        {stepper > 1 ? (
          <svg
            className="inline"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height="25"
            width="25"
          >
            <path d="m2.67 7.63 2.79 2.78 7.87-7.87 1.52 1.52-9.39 9.4-4.31-4.31 1.52-1.52z" />
          </svg>
        ) : (
          2
        )}
      </button>
      <hr
        className={`lg:w-0 w-16 lg:h-16 outline ${
          stepper === 2 ? "outline-green-500" : "outline-gray-400"
        } `}
      />
      <button
        className={`w-8 h-8 rounded-full ${
          stepper === 2 ? "bg-green-500" : "bg-gray-400 text-center"
        } `}
        onClick={() => clickHandler(2)}
      >
        3
      </button>
    </div>
  );
};

export default Stepper;
