import axios from "axios";

const API_URL = "http://localhost:8080/comments/";

const createComment = async (commentData) => {
    const body = commentData.text;
    const token = localStorage.getItem("token");
    const res = await axios.post(
        API_URL + "id/" + commentData.id,
        { text: body },
        {
            headers: {
                Authorization: token,
            },
        },
    );
    return res.data.comment;
};
const likeComment = async (id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(
        API_URL + "like/" + id,
        {},
        {
            headers: {
                Authorization: token,
            },
        },
    );
    return res.data.comment;
};
const dislikeComment = async (id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(
        API_URL + "dislike/" + id,
        {},
        {
            headers: {
                Authorization: token,
            },
        },
    );
    return res.data.comment;
};

const commentService = {
    createComment,
    likeComment,
    dislikeComment,
};

export default commentService;
