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
      client
        .post("/auth/refresh")
        .then((e) => saveAuth(e.data.data.token))
        .catch(() => {
          Router.push("/login");
        });
    }
  }
);

export default client;

export const saveAuth = (token: string) => {
  client.defaults.headers.common["authorization"] = `Bearer ${token}`;
};
