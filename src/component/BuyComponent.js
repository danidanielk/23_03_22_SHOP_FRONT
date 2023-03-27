import axios from "axios";
import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useLocation } from "react-router-dom";

function BuyComponent() {
  const [openPostcode, setOpenPostcode] = React.useState(false); // 주소 검색 팝업창 열림 여부
  const [getAddress, setGetAddress] = React.useState(""); // 선택한 주소 저장
  const [data, setGetData] = useState("");
  const [message, setMessage] = useState("");

  const onMessage = (e) => {
    setMessage(e.target.value);
  };

  // 주소 검색 완료 시 실행할 콜백 함수
  const handleComplete = (data) => {
    setGetAddress(data.address); // 선택한 주소 저장
    setOpenPostcode(false); // 주소 검색 팝업창 닫기
  };
  // DaumPostcode 컴포넌트가 업데이트 될 때마다 새로운 key를 반환하여 문제를 방지합니다.
  const daumPostcodeKey = openPostcode ? "open" : "closed";

  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");
  const cartProductId = new URLSearchParams(location.search).get(
    "cartProductId"
  );
  const cart = new URLSearchParams(location.search).get("cart");
  const thisQuantity = new URLSearchParams(location.search).get("thisQuantity");
  const thisPrice = new URLSearchParams(location.search).get("thisPrice");

  useEffect(() => {
    if (cart === "false") {
      axios
        .get(`http://localhost:8080/member/buy/${productId}`, {
          withCredentials: true,
        })
        .then((response) => {
          const getData = response.data;
          setGetData(getData);
          console.log(getData);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:8080/member/buycart/${cartProductId}`, {
          withCredentials: true,
        })
        .then((response) => {
          const getData = response.data;
          setGetData(getData);
          console.log(getData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const onBuy = (productName, email, phone) => {
    const buyData = {
      address: getAddress,
      email: email,
      phone: phone,
      productName: productName,
      productPrice: thisPrice,
      productQuantity: thisQuantity,
      message: message,
    };
    const json = JSON.stringify(buyData);
    const blob = new Blob([json], { type: "application/json" });

    axios
      .post(
        "http://localhost:8080/member/order",
        blob,
        {
          headers: { "Content-Type": "application/json" },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        console.log(blob);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <>
        <div className="ml-40 mt-20 mr-40">
          {/*  */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                주문자 정보
              </label>
              <div
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
              >
                Email : {data.email} , Phone : {data.phone}
              </div>
              <p className="text-gray-600 text-xs italic">
                Remove if not needed
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                <button
                  onClick={() => setOpenPostcode(true)}
                  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                >
                  주소검색
                </button>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                readOnly
                value={getAddress}
              ></input>
              <p className="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div key={daumPostcodeKey}>
            {openPostcode && <DaumPostcode onComplete={handleComplete} />}
          </div>
          {/*  */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                상품 정보
              </label>
              <div
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
              >
                상품 이름 : {data.productName} , 상품 수량 : {thisQuantity} , 총
                금액 : {thisPrice}
              </div>
              <p className="text-gray-600 text-xs italic">
                Remove if not needed
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                MESSAGE
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
                value={message}
                onChange={onMessage}
              />

              <p className="text-gray-600 text-xs italic">
                Remove if not needed
              </p>
            </div>
          </div>
          {/*  */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                onClick={() => onBuy(data.productName, data.email, data.phone)}
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                결제하기
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </div>
      </>
    </>
  );
}
export default BuyComponent;
