import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data;
};

const getById = async (id) => {
    const res = await axios.get(API_URL + "/posts/id/" + id);
    return res.data;
};
const post = async (data) => {
    const res = await axios.post(API_URL + "/posts", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    
    return res.data;
};

const postsService = {
    getAll,
    getById,
    post
};

export default postsService;

