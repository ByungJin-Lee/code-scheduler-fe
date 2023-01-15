import client from "./client";

export type LoginVariablesType = {
  email: string;
  password: string;
};

export default async function login({ email, password }: LoginVariablesType) {
  const res = await client.post("/auth/login", { email, password });

  return res.data;
  // return new Promise((resolve, reject) => {
  //   client.post("/auth/login", { email, password }).then((v) => {
  //     resolve(v.data.ok);
  //   });
  // });
}
