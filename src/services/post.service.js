import axios from "axios";

const API_URL = "https://blogger-gmkumaran87.netlify.app/api/v1/posts";

const getAllPosts = async(search) => {
    const result = await axios.get(`${API_URL}${search}`);
    return result;
};

const createPost = async(post) => {
    return await axios.post(`${API_URL}`, post);
};

const getPost = async(id) => await axios.get(`${API_URL}/${id}`);

const deletePost = async(id) => {
    console.log("deleteuser", id, API_URL);
    const result = await axios.delete(`${API_URL}/${id}`);
    return result;
};
const updatePost = async(id, obj) =>
    await axios.patch(`${API_URL}/${id}`, obj);

const getCategories = async() =>
    await axios.get("https://blogger-gmkumaran87.netlify.app/api/v1/category");

const uploadImage = async(obj, config) =>
    await axios.post(`${API_URL}/image-upload`, obj, config);
export {
    getAllPosts,
    createPost,
    deletePost,
    updatePost,
    getPost,
    getCategories,
    uploadImage,
};