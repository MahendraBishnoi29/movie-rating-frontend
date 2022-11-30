import axios from "axios";

const client = axios.create({
  baseURL: "https://mrp-backend.onrender.com/api",
});

export default client;
