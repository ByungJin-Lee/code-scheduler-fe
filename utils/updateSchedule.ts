import client from "./client";

export type UpdateScheduleVariablesType = {
  id: number;
  name?: string;
  description?: string;
  period?: number;
  active?: boolean;
  next?: number;
  code?: string;
};

export default async function updateSchedule({
  id,
  ...value
}: UpdateScheduleVariablesType) {
  const res = await client.put("/schedule/" + id, value);

  return res.data;
}
