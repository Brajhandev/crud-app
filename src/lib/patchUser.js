import axios from "axios";

const patchUser = async (id, body) => {
    const users = await axios.patch(`https://users-crud.academlo.tech/users/${id}/`, body);
    return users;
};

export default patchUser;