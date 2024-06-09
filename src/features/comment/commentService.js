import axios from "axios";
const API_URL = "http://localhost:5000/comments";

const createComment = async () => {

    const res = await axios.get(API_URL, {
        headers: {
            Authorization: token,
        },
    });

    return res.data;
}