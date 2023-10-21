import axios from "axios";

export const apiHandle = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: `Bearer`,
  },
});

export const Get = (endpoint, id) => {
  return apiHandle.get(`${endpoint}/${id ? id : ""}`);
};

export const Post = (endpoint, id) => {
  return apiHandle.post(`${endpoint}/${id ? id : ""}`);
};

export const Put = (endpoint, id) => {
  return apiHandle.put(`${endpoint}/${id ? id : ""}`);
};

export const Delete = (endpoint, id) => {
  return apiHandle.delete(`${endpoint}/${id ? id : ""}`);
};
