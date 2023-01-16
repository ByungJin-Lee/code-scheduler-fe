import client from "./client";

export type CreateScheduleVariablesType = {
  name: string;
  description: string;
  period?: number;
  active: boolean;
  next: number;
  code: string;
};

export default async function createSchedule({
  name,
  description,
  period,
  active,
  next,
  code,
}: CreateScheduleVariablesType) {
  const res = await client.post("/schedule", {
    name,
    period,
    description,
    active,
    next,
    code,
  });

  return res.data;
}
