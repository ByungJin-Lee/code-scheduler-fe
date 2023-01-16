import Router from "next/router";
import { useMutation } from "react-query";
import client, { saveAuth } from "../utils/client";
import login, { LoginVariablesType } from "../utils/login";

export default function useLogin() {
  return useMutation<{ data: any; ok: boolean }, any, LoginVariablesType>(
    login,
    {
      onSuccess: ({ data, ok }) => {
        if (ok) {
          saveAuth(data.token);
          Router.push("/");
        }
      },
    }
  );
}
