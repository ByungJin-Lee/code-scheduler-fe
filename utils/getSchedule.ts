import client from "./client";

export default async function getMySchedule(id: number) {
  const res = await client.get("/schedule/" + id);

  return res.data;
}
