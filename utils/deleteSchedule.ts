import client from "./client";

export default async function deleteSchedule(id: number) {
  const res = await client.delete("/schedule/" + id);

  return res.data;
}
