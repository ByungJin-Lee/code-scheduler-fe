import { useQuery } from "react-query";
import getMySchedule from "../utils/getMySchedule";

export default function useGetMySchedule(onData: (data: any) => void) {
  return useQuery<{ ok: boolean; data: any }, any>(
    "my-schedule",
    getMySchedule,
    {
      onSuccess: ({ ok, data }) => {
        if (ok) {
          onData(data);
        }
      },
    }
  );
}
