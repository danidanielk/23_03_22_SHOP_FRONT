import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function RecentlyAndBookmark() {
  const [getToken] = useCookies(["accessTK"]);
  const token = getToken.accessTK;

  const [recentlySets, setRecentlySets] = useState([]);
  const [bookmarkSets, setBookmarkSets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/myproduct", {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const getData = response.data;
        setRecentlySets(getData.recentlySets.slice(0, 4));
        setBookmarkSets(getData.bookmarkSets);
        console.log(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

      <div className="ml-10 grid grid-cols-5 gap-20">
        {recentlySets.slice(0, 5).map((value) => (
          <div
            key={value.productId}
            className="bg-white shadow-lg border-gray-100 h-33 border sm:rounded-3xl p-8 flex flex-col items-center"
          >
            <button>
              <img
                className="rounded-3xl shadow-lg w-28 h-17 object-cover"
                src={value.prodcutImage}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
          <a
            className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb"
            href="/boardlist"
          >
            - 즐겨찾기
          </a>
        </li>
      </div>

      <div className="ml-10 grid grid-cols-3 gap-10 mb-20">
      {bookmarkSets.map((value) => (
          <div className="flex items-center justify-between bg-white shadow-lg border-gray-100 h-36 border sm:rounded-3xl p-8 mt-8">
            <button>

              <img
                className="rounded-2xl shadow-lg w-24 flex-grow-1"
                src={value.productImage}
                alt={value.productName}
                />
                </button>
            <div className="ml-4 flex-grow">
              <div className="ml-7 mt-10 text-gray-600 font-semibold text-sm">
                {value.productName}
              </div>
              <div className="ml-7 mt-5 text-gray-500 text-sm">
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
