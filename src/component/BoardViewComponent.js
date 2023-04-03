import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

function BoardViewComponent() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [getToken] = useCookies(["accessTK"]);
  const token = getToken.accessTK;

  const onMessage = (e) => {
    setMessage(e.target.value);
  };

  const onButton = () => {
    const answerData = { boardId: boardId, answer: message };
    const json = JSON.stringify(answerData);
    const blob = new Blob([json], { type: "application/json" });
    axios
      .post("http://localhost:8080/board/view/answer", blob, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        alert("답변이 전송되었습니다.");
        window.location.assign("/boardlist");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  const boardId = new URLSearchParams(location.search).get("boardId");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/board/view/${boardId}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const getData = response.data;
        setData(getData);
        console.log(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        <div className="ml-40 mt-32 mr-40">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                email
              </label>
              <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {data.email}
              </div>

              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Title
              </label>
              <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {data.title}
              </div>

              <p className="text-gray-600 text-xs italic"></p>
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
              <div className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none">
                {data.message}
              </div>
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                답변
              </label>
              <div className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none">
                {data.answer}
              </div>
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                답변하기
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                id="message"
                value={message}
                onChange={onMessage}
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="mb-10                                                    shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onButton}
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>

          {/* <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div> */}
        </div>
      </>
    </>
  );
}
export default BoardViewComponent;
