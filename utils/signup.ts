import client from "./client";

export type SignupVariablesType = {
  email: string;
  password: string;
};

export default async function signup({ email, password }: SignupVariablesType) {
  const res = await client.post("/auth/signup", { email, password });

  return res.data;
}
