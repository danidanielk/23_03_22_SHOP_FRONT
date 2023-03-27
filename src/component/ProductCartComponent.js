import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductCartComponent() {
  const location = useLocation();
  const memberId = new URLSearchParams(location.search).get("memberId");
  const auth = new URLSearchParams(location.search).get("auth");
  const cart = true;

  const [data, setData] = useState([]);
  const [nullData, setNullData] = useState("");

  const onBuy = (productId, cartProductId, thisQuantity, productPrice) => {
    window.location.assign(
      `/buy?cartProductId=${cartProductId}&thisQuantity=${thisQuantity}&thisPrice=${productPrice}&cart=${cart}`
    );
  };

  const onPatch = (productId) => {
    window.location.assign(
      `/patch?productId=${productId}&memberId=${memberId}&auth=${auth}`
    );
  };

  const onManagerDelete = (productId) => {
    axios
      .delete(`http://localhost:8080/manager/delete/${productId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        window.location.assign(`/cart?memberId=${memberId}&auth=${auth}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCustomerDelete = (cartProductId) => {
    axios
      .delete(`http://localhost:8080/member/delete/${cartProductId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        window.location.assign(`/cart?memberId=${memberId}&auth=${auth}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .post(`http://localhost:8080/member/mypage/${memberId}`)
      .then((response) => {
        if (response.data !== null) {
          const getData = response.data;
          console.log(getData);
          setData(getData);
        } else {
          const nullData = true;
          setNullData(nullData);
        }
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
            <div>
            <div>
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
              <a
                className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
                href="/productupload"
              >
                - ManagerPage 상품등록
              </a>
            </li>
            </div>
            <div>
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
            <a
              className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-20"
              href="/ordercheck"
            >
              - ManagerPage 배송관리
            </a>
          </li>
          </div>
          </div>
          ) : 
          
         
          <div>
          <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
          <a
            className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-20"
            href="/ordercheck2"
          >
            - 나의 주문내역
          </a>
        </li>
        </div>
      
          }
          {nullData === true && <div>장바구니가 없습니다.</div>}
          <div className="ml-6 mr-6 grid grid-cols-10 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-15 mt-8 md:mt-0">
            {data.map((value) => (
              <div className="bg-white shadow-lg border-gray-100 max-h-52	 border sm:rounded-3xl p-8 flex space-x-36">
                <div className="h-48 overflow-visible w-1/2">
                  <img
                    className="rounded-3xl shadow-lg"
                    src={value.productImage}
                  />
                </div>
                <div className="flex flex-col w-1/2 space-y-1 mt-">
                  <div className="flex justify-between items-start">
                    <div className="text-gray-400 max-h-40 overflow-y-hidden">
                      {value.category} : {value.productName}
                    </div>
                  </div>

                  <div className="">$ {value.productPrice} / 수량 : {value.productQuantity}{value.thisQuantity}</div>

                  {auth === "MANAGER" ? (
                    <>
                      <div className="mt-5">
                        <div className="mt-5 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                          <button onClick={() => onPatch(value.productId)}>
                            수정
                          </button>
                        </div>
                        <div className="mt-2 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                          <button
                            onClick={() => onManagerDelete(value.productId)}
                          >
                            삭제
                          </button>
                        </div>
                        {/* <div>수량 : {value.productQuantity}</div> */}
                      </div>
                    </>
                  ) : (
                    <>
                    <div 
                    className="mt-5"
                    >
                      
                      <div className=" shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        <button
                          onClick={() =>
                            onBuy(
                              value.productId,
                              value.cartProductId,
                              value.thisQuantity,
                              value.productPrice
                              )
                            }
                        >
                          BUY
                        </button>
                      </div>
                      <div className="mt-2 shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        <button
                          onClick={() => onCustomerDelete(value.cartProductId)}
                        >
                          DELETE
                        </button>
                      </div>
                            </div>
                    </>
                  )}
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
