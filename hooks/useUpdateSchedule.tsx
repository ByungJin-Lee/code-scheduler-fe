import { useMutation } from "react-query";
import updateSchedule, {
  UpdateScheduleVariablesType,
} from "../utils/updateSchedule";

export default function useUpdateSchedule(onData: (data: any) => void) {
  return useMutation<
    { ok: boolean; data: any },
    any,
    UpdateScheduleVariablesType
  >(updateSchedule, {
    onSuccess: ({ ok, data }) => {
      if (ok) {
        onData(data);
      }
    },
  });
}
