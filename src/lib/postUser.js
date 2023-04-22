import axios from "axios";

const postUser = async (body) => {
    const users = await axios.post("http://users-crud.academlo.tech/users/", body);
    return users;
};

export default postUser;