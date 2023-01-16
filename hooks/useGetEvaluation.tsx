import { useQuery } from "react-query";
import getEvaluation from "../utils/getEvaluation";

export default function useGetEvaluation(
  id: number,
  onData?: (data: any) => void
) {
  return useQuery(["schedule", id], () => getEvaluation(id), {
    enabled: Boolean(id),
    onSuccess: ({ ok, data }) => {
      if (ok && onData) {
        onData(data);
      }
    },
  });
}
