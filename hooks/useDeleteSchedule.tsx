import Router from "next/router";
import { useMutation } from "react-query";
import deleteSchedule from "../utils/deleteSchedule";
("../utils/deleteSchedule");

export default function useDeleteSchedule(onData?: (data: any) => void) {
  return useMutation<{ ok: boolean; data: any }, any, number>(deleteSchedule, {
    onSuccess: ({ ok, data }) => {
      if (ok) {
        if (onData) onData(data);
        Router.push("/workspace");
      }
    },
  });
}
