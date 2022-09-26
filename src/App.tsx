import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./form/Form";
import ContainerForm from "./poc/layout/ContainerForm";
// import { Form } from "./layout/Form";
import Select from "react-select";
import { useForm } from "react-hook-form";
import Register from "./poc/Register";

function App() {
  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      selectItem: "",
    },
  });

  const options: any[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const onSubmit = async (data: any) => {
    await console.log("data", data);
  };

  return (
    <div className="h-screen bg-indigo-50">
      {/* <ContainerForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="register" element={<ContainerForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
