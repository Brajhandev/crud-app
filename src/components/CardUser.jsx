import React from "react";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser, FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import deteleUser from "../lib/deleteUser";
import Swal from "sweetalert2";

const CardUser = ({ user, setshowModal, useForm2, setEdit }) => {

  const { reset  } = useForm2

  const updateUser = (user) => {
    setshowModal(showModal => !showModal)
    reset({
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      birthday: user.birthday
    })
    setEdit(user.id)
  }

  const delUser = (id) => {

    Swal.fire({
      title: 'Desea eliminar este usuario?',
      text: "Si lo hace no podrá revertir el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deteleUser(id).then( res => {})
        Swal.fire(
          'Eliminado!',
          'Su usuario a sido eliminado.',
          'success'
        )
      }
    })

    
  }
  return (
    <article className="flex justify-center gap-5  mb-4 w-[90%]">
      <div className="flex flex-col gap-5">
        <div className=" h-[40px] w-[40px] bg-[#5465FF] text-white rounded-full flex justify-center items-center cursor-pointer "
        onClick={()=>updateUser(user)}>
          <BsPencil />
        </div>
        <div className="h-[40px] w-[40px] bg-[#EA2779] text-white rounded-full flex justify-center items-center cursor-pointer"
        onClick={()=> delUser(user.id)} >
          <AiOutlineClose />
        </div>
      </div>
      <div className="w-full lg:w-[80%]  flex flex-col md:flex-row gap-1 lg:gap-8">
        <div className=" text-[#5465FF] text-[20px] border border-[#E5E5E5] rounded-lg p-2 flex flex-col items-center md:justify-center md:gap-3 md:w-1/3 lg:w-1/3 lg:py-10 lg:px-5">
          <FaUser />
          <p className=" text-black text-[18px] text-center">
            {user.first_name} {user.last_name}
          </p>
        </div>
        <div className="text-[#5465FF] text-[20px] border border-[#E5E5E5] rounded-lg p-2  flex flex-col items-center md:justify-center md:gap-3 md:w-1/3 lg:w-1/3">
          <MdEmail />
          <p className=" text-black text-[18px] text-center">{user.email}</p>
        </div>
        <div className="text-[#5465FF] text-[20px] border border-[#E5E5E5] rounded-lg p-2  flex flex-col items-center md:justify-center md:gap-3 md:w-1/3 lg:w-1/3">
          <FaBirthdayCake />
          <p className=" text-black text-[18px] text-center">{user.birthday}</p>
        </div>
      </div>
    </article>
  );
};

export default CardUser;
