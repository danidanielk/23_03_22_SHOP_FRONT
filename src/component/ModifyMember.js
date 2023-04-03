import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

function ModifyMember() {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [password3, setPassword3] = useState("");
  const [getToken] = useCookies(["accessTK"]);
  const token = getToken.accessTK;

  const onPassword3 = (e) => {
    setPassword3(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onPassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const onPhone = (e) => {
    setPhone(e.target.value);
  };

  var checkPw;
  if (password !== password2) {
    checkPw = "Check Password.";
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/member/modify/data", {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const getData = response.data;
        setData(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onButton = () => {
    if (!password3 || !password || !password2) {
      alert("비밀번호를 입력해주세요");
    } else {
      const jsonData = {
        phone: phone,
        password: password,
        currentPassword: password3,
      };
      const json = JSON.stringify(jsonData);
      const blob = new Blob([json], { type: "application/json" });

      axios
        .patch("http://localhost:8080/member/modify", blob, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

        .then((Response) => {
          console.log(Response);
          alert("수정 완료");
          window.location.assign("/login");
        })
        .catch((error) => {
          alert("비밀번호를 확인해 주세요");
          console.log(error);
        });
    }
  };

  const onButton2 = (memberId, password3) => {
    if (!password3) {
      console.log(memberId);
      alert("현재 비밀번호를 입력해주세요");
    } else {
      const formData = new FormData();
      formData.append("password", password3);
      formData.append("memberId", memberId);
      // console.log(password3)

      // const jsonData = { password: password3 };
      // const json = JSON.stringify(jsonData);
      // const blob = new Blob([json], { type: "application/json" });

      axios
        .post(`http://localhost:8080/member/modify/delete`, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          alert("계정이 삭제되었습니다.");
          window.location.assign("/");
        })
        .catch((error) => {
          console.log(password3);
          alert("비밀번호를 잘못 입력하셨습니다.");
          console.log(error);
        });
    }
  };

  return (
    <>
      <>
        <div className="w-full h-screen flex items-center justify-center bg-gray-0">
          <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
            {/* <!-- header -->   */}
            <label className="font-light text-3xl mb-10">
              <span className="font-bold">회원정보 수정</span>
            </label>
            {/* <!-- sign-in --> */}
            <input
              type="email"
              className="w-full h-12 rounded-lg  px-4 text-lg focus:ring-blue-600 mb-4 border border-black"
              placeholder={data.email}
              disabled
            />
            <input
              type="number"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4 border border-black"
              placeholder={data.phone}
              onChange={onPhone}
              value={phone}
              disabled
            />
            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="현재 비밀번호"
              onChange={onPassword3}
              value={password3}
            />

            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="변경할 비밀번호"
              onChange={onPassword}
              value={password}
            />
            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="비밀번호 재입력"
              onChange={onPassword2}
              value={password2}
            />
            <div className="mb-4 text-red-500 font-semibold">{checkPw}</div>

            <button
              type="button"
              className="w-full h-12 rounded-lg bg-gray-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
              onClick={onButton}
            >
              수정 완료
            </button>

            <button
              type="button"
              className="w-full h-12 rounded-lg bg-gray-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
              onClick={() => onButton2(data.memberId, password3)}
              // onClick={onButton2}
            >
              회원 탈퇴
            </button>
          </div>
        </div>
      </>
    </>
  );
}
export default ModifyMember;
