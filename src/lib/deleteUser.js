import axios from "axios";

const deteleUser = async (id) => {
    const users = await axios.delete(`https://users-crud.academlo.tech/users/${id}/`);
    return users;
};

export default deteleUser;