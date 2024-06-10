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

export const createPost = async (formData) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { 'Content-Type': 'multipart/form-data',
      Authorization: token,
    }
    };
    const response = await axios.post(API_URL + "/posts", formData, config);
    return response.data;
  };

  export const deletePost = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
      Authorization: token,
    }
    };
    const response = await axios.delete(API_URL + "/posts/" + id, config);
    return response.data;
  };

  export const likePost = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
      Authorization: token,
    }
    };
    const res = await axios.put(API_URL + "/posts/like/" + id,{}, config);
    return res.data.post;
  };

  export const dislikePost = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
      Authorization: token,
    }
    };
    const res = await axios.put(API_URL + "/posts/dislike/" + id,{}, config);
    return res.data.post;
  };

const postsService = {
    getAll,
    getById,
    createPost,
    deletePost,
    likePost,
    dislikePost
};

export default postsService;

