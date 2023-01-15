import client from "./client";

export type SignupVariablesType = {
  email: string;
  password: string;
};

export default async function signup({ email, password }: SignupVariablesType) {
  const res = await client.post("/auth/signup", { email, password });

  return res.data;
  // return new Promise((resolve, reject) => {
  //   client.post("/auth/login", { email, password }).then((v) => {
  //     resolve(v.data.ok);
  //   });
  // });
}
