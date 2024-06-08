import axios from "axios";

const API_URL = "http://localhost:8080/users";

const register = async (userData) => {
    const res = await axios.post(API_URL + "/", userData);

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

    return res.data;
};
const getUsers = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(API_URL + "/", {
        headers: {
            Authorization: token,
        },
    });

    return res.data;
};
const getUserById = async (id) => {
    const token = localStorage.getItem("token");

    const res = await axios.get(API_URL + "/id/" + id, {
        headers: {
            Authorization: token,
        },
    });

    return res.data;
};
const follow = async (id) => {
    const token = localStorage.getItem("token");

    const res = await axios.put(
        API_URL + "/follow/" + id,
        {},
        {
            headers: {
                Authorization: token,
            },
        },
    );

    return res.data;
};
const unfollow = async (id) => {
    const token = localStorage.getItem("token");

    const res = await axios.put(
        API_URL + "/unfollow/" + id,
        {},
        {
            headers: {
                Authorization: token,
            },
        },
    );

    return res.data;
};
const updatePic = async (formData) => {
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
        },
    };
    const res = await axios.put(API_URL + "/profilePic", formData, config);

    return res.data;
};

const authService = {
    register,
    login,
    logout,
    getUserInfo,
    getUsers,
    getUserById,
    follow,
    unfollow,
    updatePic,
};

export default authService;
