import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const clichHandler = () => {
    navigate("/register");
  };
  return (
    <div className="flex justify-center items-center sm:m-1 sm:flex sm:flex-col w-full h-screen">
      <div className="border lg:w-1/2  md:m-8 sm:m-2 sm:w-full flex flex-col justify-center items-center h-1/2 bg-white shadow-lg">
        <h1 className="font-bold text-rose-500 p-6">
          Visite More Please Register
        </h1>
        <button
          onClick={() => clichHandler()}
          className="border px-6 py-1 text-white bg-slate-700 font-sans font-bold"
        >
          Click <span className="ml-2 text-white">&gt;&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
