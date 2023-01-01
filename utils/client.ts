import axios from "axios";

const client = axios.create({
  baseURL: "",
});

client.interceptors.request.use((v) => {
  return v;
});

client.interceptors.response.use((v) => {
  return v;
});

export default client;
