import axios from "axios";

const deteleUser = async (id) => {
    const users = await axios.delete(`http://users-crud.academlo.tech/users/${id}/`);
    return users;
};

export default deteleUser;