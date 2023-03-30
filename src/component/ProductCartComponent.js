import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductCartComponent() {
  const location = useLocation();
  const memberId = new URLSearchParams(location.search).get("memberId");
  const auth = new URLSearchParams(location.search).get("auth");
  const cart = true;

  const [data, setData] = useState([]);

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
      .post(`http://localhost:8080/member/mypage/${memberId}`,{withCredentials: true})
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
        <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-10 mt-10">
                My Page
              </h1>
            </div>
        <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    
          {auth === "MANAGER" ? (
            <div>

              
          <div className="">
            
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
            <a
              className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
              href="/boardlist"
            >
              - Manager Tab
            </a>
          </li>
          </div>

            <div className="wide-full item-center ml-7">
            <li className=" wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
              <a
                className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
                href="/productupload"
              >
                상품 등록
              </a> 

              <a
              className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
              href="/ordercheck"
            >
              배송 관리
            </a>

            <a
              className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
              href="/boardlist"
            >
              문의 사항
            </a>

        

            <a
              className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
              href="/customerlist"
            >
              회원 조회
            </a>
            </li>
            </div>

   

          <div className="mt-10">
            
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
            <a
              className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
              href="/boardlist"
            >
              - Product List
            </a>
          </li>
          </div>



          </div>
          ) : 
          
         <div>

<div className="mt-10">
            
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
            <a
              className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
              href="/boardlist"
            >
              - My Tab
            </a>
          </li>
          </div>


          <div className="ml-5">
          <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
          <a
            className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded  mb-5"
            href="/ordercheck2"
          >
            주문 내역
          </a>
      
          <a
            className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
            href="/boardlist2"
          >
            문의 사항
          </a>

          <a
            className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-5"
            href="/modify"
          >
            회원 정보
          </a>
        </li>
        </div>



  <div className="mt-10">
            <li className="wide-full flex space-x-4 items-center hover:text-indigo-600 cursor-pointer">
            <div
              className="border-1 ml-6 text-1xl lg:text-1xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-5"
              
            >
              - 장바구니
            </div>
          </li>
          </div>    

      
</div>

          }
          
           
        

          

          <div className="ml-6 mr-6 grid grid-cols-10 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-15 mt-8 md:mt-0">
            
            {data.map((value) => (
              <div className="bg-white shadow-lg border-gray-100 max-h-52	 border sm:rounded-3xl p-8 flex space-x-36">
                
                <div className="h-48 overflow-visible w-1/2">
                  <img
                    className="rounded-3xl shadow-lg"
                    src={value.productImage}
                  />
                </div>
                <div className=" flex flex-col w-1/2 space-y-1 ">
                  <div className=" flex justify-between items-start">
                    <div className=" text-gray-400 max-h-40 overflow-y-hidden">
                      {value.category} : {value.productName}
                    </div>
                  </div>

                  <div className="">$ {value.productPrice}</div>
                  <div className=""> 수량 : {value.productQuantity}{value.thisQuantity}</div>

                  {auth === "MANAGER" ? (
                    <>
                      <div className="mt-3">
                        <div className="text-center mt-3 shadow bg-gray-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                          <button onClick={() => onPatch(value.productId)}>
                            수정
                          </button>
                        </div>
                        <div className="text-center mt-2 shadow bg-gray-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
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
                      
                      <div className="mt-3 text-center shadow bg-gray-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
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
                      <div className="text-center mt-2 shadow bg-gray-800 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
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
