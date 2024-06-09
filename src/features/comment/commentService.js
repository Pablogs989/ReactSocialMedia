import axios from "axios";

const API_URL = "http://localhost:8080/comments/id/";

const createComment = async (commentData) => {
    const body = commentData.text;
    const token = localStorage.getItem("token");
    const res = await axios.post(
        API_URL + commentData.id,
        { text: body },
        {
            headers: {
                Authorization: token,
            },
        },
    );
    return res.data;
};

const commentService = {
    createComment,
};

export default commentService;
