import React, { useState } from "react";
import useSignup from "../hooks/useSignup";
import MainTemplate from "../templates/MainTemplate";
import wrapOnChange from "../utils/wrapOnChange";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");

  const { mutate } = useSignup();

  const handleSignup = () => {
    if (email.length === 0) return;

    if (pw !== confirm) return;

    mutate({
      email: email,
      password: pw,
    });
  };

  return (
    <MainTemplate>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Sign up
          </h1>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email 입력
            </label>
            <input
              value={email}
              onChange={wrapOnChange(setEmail)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                비밀번호 입력
              </label>
              <input
                value={pw}
                onChange={wrapOnChange(setPw)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                비밀번호 확인
              </label>
              <input
                value={confirm}
                onChange={wrapOnChange(setConfirm)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                onClick={handleSignup}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                회원가입
              </button>
            </div>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            <a href="#" className="font-medium text-purple-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </MainTemplate>
  );
}
