import axios from "axios";

const API_URL =
    "https://crudcrud.com/api/8992fb52cd724b2bb8935d8c030a3ca0/users";
const getAllUsers = async() => {
    const result = await axios.get(`${API_URL}`);
    return result;
};

const createUser = async() => {
    return await axios.post("/users");
};

const deleteUser = async(id) => {
    console.log("deleteuser", id, API_URL);
    const result = await axios.delete(`${API_URL}/${id}`);
    return result;
};
const addUser = async(obj) => await axios.post(`${API_URL}`, obj);
export { getAllUsers, createUser, deleteUser, addUser };