import client from "./client";

export default async function getEvaluation(id: number) {
  const res = await client.get("/evaluate/" + id);

  return res.data;
}
