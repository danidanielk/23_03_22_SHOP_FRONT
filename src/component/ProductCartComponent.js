import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductCartComponent() {
  const location = useLocation();
  const memberId = new URLSearchParams(location.search).get("memberId");
  const auth = new URLSearchParams(location.search).get("auth");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(`http://localhost:8080/member/mypage/${memberId}`)
      .then((response) => {
        const getData = response.data;
        console.log(getData);
        setData(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        {/* MANAGER */}

        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          {auth === "MANAGER" ? (
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
              <a
                className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-20"
                href="/productupload"
              >
                - ManagerPage 상품등록
              </a>
            </li>
          ) : null}
          <div className="ml-6 mr-6 grid grid-cols-10 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-15 mt-8 md:mt-0">
            {data.map((value) => (
              <div className="bg-white shadow-lg border-gray-100 max-h-52	 border sm:rounded-3xl p-8 flex space-x-36">
                <div className="h-48 overflow-visible w-1/2">
                  <img
                    className="rounded-3xl shadow-lg"
                    src={value.productImage}
                  />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="text-gray-400 max-h-40 overflow-y-hidden">
                      {value.category} : {value.productName}
                    </div>
                  </div>

                  <div className="flex text-1xl font-bold text-a">
                    $ {value.productPrice}
                  </div>

                {auth === "MANAGER"?
                
                <div className="text-center items-center bg-green-600 text-gray-100 font-bold rounded-xl p-2">
                    <button>상품 수정</button>
                  </div>
                  :
                  <>
                  <div className="text-center items-center bg-green-600 text-gray-100 font-bold rounded-xl p-2">
                  <button>BUY</button>
                </div>
                <div className="text-center items-center bg-green-600 text-gray-100 font-bold rounded-xl p-2">
                  <button>DELETE</button>
                </div>
                  </>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
export default ProductCartComponent;
