import Router from "next/router";
import { useMutation } from "react-query";
import signup, { SignupVariablesType } from "../utils/signup";

export default function useSignup() {
  return useMutation<{ ok: boolean }, any, SignupVariablesType>(signup, {
    onSuccess: ({ ok }) => {
      if (ok) {
        Router.push("/login");
      }
    },
  });
}
