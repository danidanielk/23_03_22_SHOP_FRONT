import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginDto, setLoginDto] = useState("");
  const [accessTk, setAccessTk] = useState("");
  const [refreshTk, setRefreshTk] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  // useEffect(()=>{

  // },[])
  const onLogin = () => {
    const loginData = { email: email, password: password };
    const json = JSON.stringify(loginData);
    const blob = new Blob([json], { type: "application/json" });

    axios
      .post(
        "http://localhost:8080/member/login",
        blob,
        {
          headers: { "Content-Type": "application/json" },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        const loginDto = response.data;
        const accessTk = loginDto.accessToken;
        const refreshTk = loginDto.refreshToken;

        const cookies = new Cookies();
        cookies.set("accessTK", accessTk, {
          maxAge: 60 * 10 * 1000,
          path: "/",
        });
        cookies.set("refreshTK", refreshTk, {
          maxAge: 60 * 60 * 1000 * 2,
          path: "/",
        });
        // console.log(loginDto)
        console.log(accessTk);
        console.log(refreshTk);
        window.location.assign("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <>
        <div className="w-full h-screen flex items-center justify-center bg-gray-0">
          <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
            <label className="font-light text-3xl mb-10">
              <span className="font-bold">로그인</span>
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Email"
              onChange={onEmail}
              value={email}
            />
            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Password"
              onChange={onPassword}
              value={password}
            />
            <button
              className="w-full h-12 rounded-lg bg-gray-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
              onClick={onLogin}
            >
              Login
            </button>
            <a
              href="#!"
              className="text-sm text-gray-800 focus:outline-none focus:text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 mb-5"
            >
              Forgot password?
            </a>

            <button className="w-full h-12 rounded-lg bg-green-600 text-gray-100 uppercase font-semibold hover:bg-green-700 text-gray-200 transition mb-4">
              Sign with Naver
            </button>
            <button className="w-full h-12 rounded-lg bg-yellow-600 text-gray-100 uppercase font-semibold hover:bg-yellow-700 text-gray-100 transition mb-4">
              Sign with KAKAO
            </button>
            <button className="w-full h-12 rounded-lg bg-blue-600 text-gray-100 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
              Sign with GOOGLE
            </button>
          </div>
        </div>
      </>
    </>
  );
}
export default LoginComponent;
