import CardUser from "./CardUser";

const ListUsers = ({users, setshowModal, useForm2, setEdit}) => {



  return (
    <div className="w-full flex flex-col items-center">
      {
        users.length === 0 ?
      <p className="md:text-[20px] text-[#7B7B7B] w-[307px] text-center">
        You don't have any users on your list. Add new user
      </p>
        :
        users.map(user => (
          <CardUser  key={user.id} user={user} setshowModal={setshowModal} useForm2={useForm2} setEdit={setEdit}/>
        ))
      }

 
    </div>
  );
};

export default ListUsers;
