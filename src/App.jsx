import React, { useEffect, useState } from "react";
import AddUserBtn from "./components/AddUserBtn";
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import getAllUsers from "./lib/getAllUsers";
import { useForm } from "react-hook-form";

const App = () => {
  const [showModal, setshowModal] = useState(false);
  const [edit, setEdit] = useState(null)
  const [users, setUsers ] = useState([])

  const useForm2 = useForm();

useEffect(()=> {
  getAllUsers()
  .then(res => setUsers(res.data))
  .catch(err => console.log(err))
 
}, [users])




  return (
    <div className="flex flex-col items-center h-screen justify-between pt-5 pb-3 pr-5 md:p-10  ">
      <h1 className="text-[25px] md:text-[32px] font-bold text-[#084851]">
        List User
      </h1>
      <ListUsers users={users} setshowModal={setshowModal} useForm2={useForm2} setEdit={setEdit} />
      <AddUserBtn setshowModal={setshowModal} showModal={showModal} />
      {showModal && <Form setshowModal={setshowModal} useForm2={useForm2} setEdit={setEdit} edit={edit}  />}
    </div>
  );
};

export default App;
