import axios from "axios";
import Router from "next/router";

const client = axios.create({
  baseURL: "https://lj-cnc-worker.kro.kr/api",
  withCredentials: true,
});

client.interceptors.request.use((v) => {
  return v;
});

client.interceptors.response.use(
  (v) => {
    return v;
  },
  (err) => {
    if (err.response.status === 401) {
      Router.push("/login");
    }
  }
);

export default client;

export const isLogin = () => {};
