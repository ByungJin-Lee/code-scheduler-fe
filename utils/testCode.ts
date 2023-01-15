import client from "./client";

export default async function testCode(code: string) {
  const res = await client.post("/evaluate", { code: code });
  return res.data;
}
