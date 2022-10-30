import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const createComment = (comment) => {
  return axios.post(`${baseUrl}/comments`, comment);
};

export const getPosts = () => {
  return axios.get(`${baseUrl}/posts`);
};

export const getPhotos = () => {
  return axios.get(`${baseUrl}/photos`);
};

export const getPhoto = (id) => {
  return axios.get(`${baseUrl}/photos/${id}`);
};
