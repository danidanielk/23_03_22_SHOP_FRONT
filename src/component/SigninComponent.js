import axios from "axios";
import { useState } from "react";

function SigninComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
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

  const onButton = () => {
    // const formData2 = new FormData();
    // formData2.append("email", email);
    // formData2.append("phone", phone);
    // formData2.append("password", password);
    // formData.append("formData", blob);

    // const formData = new FormData();
    const jsonData = { email: email, phone: phone, password: password };
    const json = JSON.stringify(jsonData);
    const blob = new Blob([json], { type: "application/json" });
    // formData.append("blob", blob);
    axios
      .post("http://localhost:8080/member/signin", blob, {
        headers: { "Content-Type": "application/json" },
      })
      // axios.post("http://localhost:8080/member/signin", blob,  { headers: { "Content-Type": "application/json" }})
      .then((Response) => {
        console.log(Response);
        window.location.assign("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("email 중복");
      });
  };

  return (
    <>
      <>
        <div className="w-full h-screen flex items-center justify-center bg-gray-0">
          <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
            {/* <!-- header -->   */}
            <label className="font-light text-3xl mb-10">
              <span className="font-bold">회원가입</span>
            </label>
            {/* <!-- sign-in --> */}
            <input
              type="email"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Email"
              onChange={onEmail}
              value={email}
            />
            <input
              type="number"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="phone"
              onChange={onPhone}
              value={phone}
            />
            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Password"
              onChange={onPassword}
              value={password}
            />
            <input
              type="password"
              className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
              placeholder="Password"
              onChange={onPassword2}
              value={password2}
            />
            <div className="mb-4 text-red-500 font-semibold">{checkPw}</div>

            <button
              type="button"
              className="w-full h-12 rounded-lg bg-gray-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
              onClick={onButton}
            >
              Sign in
            </button>
          </div>
        </div>
      </>
    </>
  );
}
export default SigninComponent;
