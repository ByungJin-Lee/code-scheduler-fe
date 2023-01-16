import { useQuery } from "react-query";
import getSchedule from "../utils/getSchedule";

export default function useGetSchedule(
  id: number,
  onData?: (data: any) => void
) {
  return useQuery(["schedule", id], () => getSchedule(id), {
    enabled: Boolean(id),
    onSuccess: ({ ok, data }) => {
      if (ok && onData) {
        onData(data);
      }
    },
  });
}
