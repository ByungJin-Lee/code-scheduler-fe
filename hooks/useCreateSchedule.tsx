import { useMutation } from "react-query";
import createSchedule, {
  CreateScheduleVariablesType,
} from "../utils/createSchedule";

export default function useCreateSchedule(onData: (data: any) => void) {
  return useMutation<
    { ok: boolean; data: any },
    any,
    CreateScheduleVariablesType
  >(createSchedule, {
    onSuccess: ({ ok, data }) => {
      if (ok) {
        onData(data);
      }
    },
  });
}
