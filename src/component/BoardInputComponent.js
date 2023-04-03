import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

function BoardInputComponent() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [getToken] = useCookies(["accessTK"]);
  const token = getToken.accessTK;

  const onTitle = (e) => {
    setTitle(e.target.value);
  };

  const onMessage = (e) => {
    setMessage(e.target.value);
  };

  const onButton = () => {
    const data = { title: title, message: message };
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });

    axios
      .post("http://localhost:8080/board/save", blob, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("문의사항을 전송하였습니다.");
        window.location.assign("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <>
        <div className="ml-40 mt-10 mr-40">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-20">
              Question
            </h1>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                value={title}
                onChange={onTitle}
              />
              <p className="text-gray-600 text-xs italic">
              Please enter the title
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                value={message}
                onChange={onMessage}
              ></textarea>
              <p className="text-gray-600 text-xs italic">
              Please enter the contents
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onButton}
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </div>
      </>
    </>
  );
}
export default BoardInputComponent;
