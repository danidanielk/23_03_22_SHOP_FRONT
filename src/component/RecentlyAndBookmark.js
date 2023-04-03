import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

function RecentlyAndBookmark() {
  const [getToken] = useCookies(["accessTK"]);
  const token = getToken.accessTK;

  const [recentlySets, setRecentlySets] = useState([]);
  const [bookmarkSets, setBookmarkSets] = useState([]);

  const location = useLocation()
  const memberId = new URLSearchParams(location.search).get("memberId")
  const auth = new URLSearchParams(location.search).get("auth")

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/myproduct", {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const getData = response.data;
        setRecentlySets(getData.recentlySets);
        setBookmarkSets(getData.bookmarkSets);
        console.log(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onClick1 = (productId) => {
    window.location.assign(`/productdetail/?productId=${productId}`);
  };

  const onClick2 = (productId) => {
    window.location.assign(`/productdetail/?productId=${productId}`);
  };

  const onDelete = (bookmarkId) => {
    const formdata = new FormData();
    formdata.append("bookmarkId", bookmarkId);
    console.log(bookmarkId)

    axios.post("http://localhost:8080/member/bookmark/delete", formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Conten-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then((response)=>{
      console.log(response)
      window.location.assign(`/cart?memberId=${memberId}&auth=${auth}`);
    })
    .error((error)=>{
      console.log(error)
    })
  };

  return (
    <div>
      <div className="mt-20">
        <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
          <a
            className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
            href="/boardlist"
          >
            - 최근 본 상품
          </a>
        </li>
      </div>

      <div className="ml-10 grid grid-cols-5 gap-3 mr-72 justify-items-start">
        {recentlySets.map((value) => (
          <div
            key={value.productId}
            className="bg-white shadow-lg border-gray-100 w-28 h-28 border sm:rounded-2xl p-2 flex flex-col items-center"
          >
            <button
              style={{ width: "100%", height: "100%", position: "relative" }}
              onClick={() => onClick1(value.productId)}
            >
              <img
                className="rounded-2xl shadow-lg object-cover w-full h-full"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                src={value.prodcutImage}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
          <a
            className="border-1 ml-6 mr- text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb"
            href="/boardlist"
          >
            - 즐겨찾기
          </a>
        </li>
      </div>

      <div className="ml-10 grid grid-cols-3 gap-10 mb-20 mr-10">
        {bookmarkSets.map((value) => (
          <div className="flex items-center justify-between bg-white shadow-lg border-gray-100 h-36 border sm:rounded-3xl p-8 mt-8">
            <button onClick={() => onClick2(value.productId)}>
              <img
                className="rounded-2xl shadow-lg w-24 flex-grow-1"
                src={value.productImage}
                // alt={value.productName}
              />
            </button>
            <div className="ml-4 flex-grow">
              <button
                onClick={() => onDelete(value.bookmarkId)}
                className="ml-3 mt-1 shadow bg-gray-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
              <div className="ml-3 mt-3 text-gray-600 font-semibold text-sm">
                {value.productName}
              </div>
              <div className="ml-3 mt-5 text-gray-500 text-sm">
                $ {value.productPrice}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyAndBookmark;
