import client from "./client";

export default async function getMySchedule() {
  const res = await client.get("/schedule");

  return res.data;
}
