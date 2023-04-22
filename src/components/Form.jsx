import React from "react";
import BtnSave from "./BtnSave";

import postUser from "../lib/postUser";
import patchUser from "../lib/patchUser";
import Swal from "sweetalert2";

const Form = ({ setshowModal, useForm2, setEdit, edit }) => {
  const { register, handleSubmit, reset } = useForm2;

  const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: "",
  };

  const submit = (data) => {
    if (edit) {
      patchUser(edit, data)
      .then(res => {
        Swal.fire(
          'Buen Trabajo!',
          'Usuario Actualizado con exito!',
          'success'
        )
          setEdit(null)
          setshowModal((showModal) => !showModal);
      })
    } else {
      postUser(data).then((res) => {
        Swal.fire(
          'Buen Trabajo!',
          'Usuario Agregado con exito!',
          'success'
        )
        reset(defaultValues);
        setshowModal((showModal) => !showModal);
      });
    }
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-slate-500/60 flex justify-center items-center lg:items-end py-10">
      <form
        className=" text-white flex flex-col gap-4 bg-fondo rounded-lg px-8 py-5 pb-8 w-[90%] md:w-[70%] lg:px-16 lg:py-10"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className=" text-2xl font-bold"> {edit ? 'Edit User' : 'Create New User'}</h2>
        <div className=" flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col lg:w-1/3">
            <label htmlFor="">Name</label>
            <input
              className="h-[42px] md:h-[42px] bg-transparent border border-[#E5E5E5] rounded-md pl-4 text-[16px]  placeholder:text-white"
              type="text"
              placeholder="Enter name"
              {...register("first_name")}
            />
          </div>
          <div className="flex flex-col lg:w-1/3">
            <label htmlFor="">Last Name</label>
            <input
              className="h-[42px] md:h-[42px] bg-transparent border border-[#E5E5E5] rounded-md pl-4 text-[16px] placeholder:text-white"
              type="text"
              placeholder="Enter last name"
              {...register("last_name")}
            />
          </div>
          <div className="flex flex-col lg:w-1/3">
            <label htmlFor="">Birthday</label>
            <input
              className="h-[42px] md:h-[42px] bg-transparent border border-[#E5E5E5] rounded-md pl-4 pr-2 text-[16px] placeholder:text-white"
              type="date"
              {...register("birthday")}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-3">
          <div className="flex flex-col lg:w-[60%]">
            <label htmlFor="">Email Address</label>
            <input
              className="h-[42px] md:h-[42px] bg-transparent border border-[#E5E5E5] rounded-md pl-4 text-[16px] placeholder:text-white"
              type="text"
              placeholder="Enter email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col lg:w-[40%]">
            <label htmlFor="">Password</label>
            <input
              className="h-[42px] md:h-[42px] bg-transparent border border-[#E5E5E5] rounded-md pl-4 text-[16px] placeholder:text-white"
              type="password"
              placeholder="Password"
              autoComplete=""
              {...register("password")}
            />
          </div>
        </div>
        <BtnSave />
      </form>
    </div>
  );
};

export default Form;
