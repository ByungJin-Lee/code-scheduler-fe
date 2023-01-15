import { useMutation } from "react-query";
import testCode from "../utils/testCode";

export default function useCodeTest(onData: (data: any) => void) {
  return useMutation<{ ok: boolean; data: any }, any, string>(testCode, {
    onSuccess: ({ ok, data }) => {
      if (ok) {
        onData(data);
      }
    },
  });
}
