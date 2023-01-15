import axios from "axios";

const client = axios.create({
  baseURL: "https://lj-cnc-worker.kro.kr/api",
  withCredentials: true,
});

client.interceptors.request.use((v) => {
  return v;
});

client.interceptors.response.use((v) => {
  return v;
});

export default client;

export const isLogin = () => {};
