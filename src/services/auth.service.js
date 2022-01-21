import axios from "axios";

const API_URL =
    "https://crudcrud.com/api/edac6a3cd186420483ed4d7c10fdd233/auth";

const register = async(obj) => {
    const result = await axios.post(`${API_URL}/register`, obj);

    return result;
};

const login = async(obj) => {
    const result = await axios.post(`${API_URL}/login`, obj);

    if (result.status === 201) {
        localStorage.setItem("user", JSON.stringify(result.data));
    }
    return result;
};

const logout = () => localStorage.removeItem("user");

export { register, login, logout };