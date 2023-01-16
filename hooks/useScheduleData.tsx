import { Dispatch, SetStateAction, useState } from "react";
import { CreateScheduleVariablesType } from "../utils/createSchedule";

function handle(
  setData: Dispatch<SetStateAction<CreateScheduleVariablesType>>
) {
  return {
    setName(name: string) {
      setData((prev) => ({ ...prev, name }));
    },
    setPeriod(period: number) {
      setData((prev) => ({ ...prev, period }));
    },
    setActive(active: boolean) {
      setData((prev) => ({ ...prev, active }));
    },
    setDescription(description: string) {
      setData((prev) => ({ ...prev, description }));
    },
    setNext(next: number) {
      setData((prev) => ({ ...prev, next: Math.trunc(next / 1000) }));
    },
    setCode(code: string) {
      setData((prev) => ({ ...prev, code }));
    },
  };
}

export default function useScheduleData(
  initial: CreateScheduleVariablesType = {
    name: "",
    period: undefined,
    next: Math.trunc(Date.now() / 1000) + 60,
    description: "",
    active: true,
    code: "",
  }
) {
  const [data, setData] = useState<CreateScheduleVariablesType>(initial);

  return {
    data,
    hlr: handle(setData),
  };
}
