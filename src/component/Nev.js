import axios from "axios";
import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import Address from "./Address";

function Nev() {

  const [getToken] = useCookies(["accessTK"])
  const token =getToken.accessTK


  const onList = () => {
    window.location.assign("/listall");
  };

  const onCart = () => {
    
    
    axios
    .get("http://localhost:8080/member/auth", { withCredentials: true ,headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        const authData = response.data;
        const MemberId = authData.memberId;
        const auth = authData.auth;
 
        

        console.log(authData);
        window.location.assign(`/cart?memberId=${MemberId}&auth=${auth}`);
        // if(authData.auth != null){
        //   setAuth(authData.auth)
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const onLogout=()=>{
    const cookie = new Cookies()
    cookie.remove("accessTK")
    cookie.remove("refreshTK")
    window.location.assign("/")
  }

  return (
    <>
      <>
        <nav className=" rounded-md w-72 h-screen flex-col justify-between">
          <div className=" bg-white h-full">
            <div className="flex  justify-center py-10 shadow-sm pr-4">
              <div className="pl-1">
                <p className="text-2xl font-bold text-indigo-600">DANI SHOP</p>
                <span className="text-xs block text-gray-800">WELCOME</span>
              </div>
            </div>
            <div className="pl-10">
              <ul className="space-y-8 pt-10">
                {/*  */}
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                  <button onClick={onList}>전체 상품</button>
                </li>

                {/*  */}
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                  <a href="/boardinput">문의 하기</a>
                </li>
                {/*  */}

                {/*  */}
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>

                  <a href="/">카테고리</a>
                </li>

                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <button onClick={onCart}>MyPage</button>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <a href="/login">로그인</a>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <a href="/signin">회원가입</a>
                </li>
                <li className="flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <button
                  onClick={onLogout}
                  >
                    Logout
                     </button>
                </li>
                {/*  */}

                {/*  */}
              </ul>
            </div>
          </div>
       
        </nav>
      </>
    </>
  );
}
export default Nev;
