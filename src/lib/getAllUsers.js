import axios from "axios";

const getAllUsers = async () => {
  const users = await axios.get("http://users-crud.academlo.tech/users/");
  return users;
};

export default getAllUsers;
