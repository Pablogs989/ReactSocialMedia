import axios from "axios";

const API_URL = "http://localhost:8080/users";

const register = async (userData) => {
    const res = await axios.post(API_URL + "/", userData);
    console.log(res.data);
    return res.data;
};

const login = async (user) => {
    const res = await axios.post(API_URL + "/login", user);
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
    }

    return res.data;
};
const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "/logout", {
        headers: {
            Authorization: token,
        },
    });
    if (res.data) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }
    return res.data;
};
const getUserInfo = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(API_URL + "/loged", {
        headers: {
            Authorization: token,
        },
    });
    console.log(res.data);
    return res.data;
};

const authService = {
    register,
    login,
    logout,
    getUserInfo,
};

export default authService;
