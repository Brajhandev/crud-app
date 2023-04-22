import React, { useEffect, useState } from "react";
import AddUserBtn from "./components/AddUserBtn";
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import getAllUsers from "./lib/getAllUsers";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const App = () => {
  const [showModal, setshowModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const [users, setUsers] = useState([]);

  const schema = yup.object().shape({
    first_name: yup.string().required("El nombre es requerido"),
    last_name: yup.string().required("El apellido es requerido"),
    birthday: yup.string().required("El cumpleaños es requerido"),
    email: yup.string().email("Ingrese un email valido").required("El email es requerido"),
    password: yup.string().min(6).required()
  })

  const useForm2 = useForm( {
    resolver: yupResolver(schema)
  });

  // const { formState: {errors} } = useForm2

  useEffect(() => {
    getAllUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className="flex flex-col items-center h-screen justify-between pt-5 pb-3 pr-5 md:p-10  ">
      <h1 className="text-[25px] md:text-[32px] font-bold text-[#084851]">
        List User
      </h1>
      <ListUsers
        users={users}
        setshowModal={setshowModal}
        useForm2={useForm2}
        setEdit={setEdit}
      />
      <AddUserBtn setshowModal={setshowModal} showModal={showModal} />
      {showModal && (
        <Form
          setshowModal={setshowModal}
          useForm2={useForm2}
          setEdit={setEdit}
          edit={edit}
        />
      )}
    </div>
  );
};

export default App;
