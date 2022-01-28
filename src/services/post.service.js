import axios from "axios";

const API_URL = "/api/v1/posts";

const getAllPosts = async() => {
    const result = await axios.get(`${API_URL}`);
    return result;
};

const createPost = async() => {
    return await axios.post(`${API_URL}`);
};

const getPost = async(id) => await axios.get(`${API_URL}/${id}`);

const deletePost = async(id) => {
    console.log("deleteuser", id, API_URL);
    const result = await axios.delete(`${API_URL}/${id}`);
    return result;
};
const updatePost = async(id, obj) =>
    await axios.patch(`${API_URL}/${id}`, obj);
export { getAllPosts, createPost, deletePost, updatePost, getPost };