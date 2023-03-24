import React from "react";
import DaumPostcode from "react-daum-postcode";

function BuyComponent() {

    const [openPostcode, setOpenPostcode] = React.useState(false); // 주소 검색 팝업창 열림 여부
    const [address, setAddress] = React.useState(""); // 선택한 주소 저장
  
    // 주소 검색 완료 시 실행할 콜백 함수
    const handleComplete = (data) => {
        setAddress(data.address); // 선택한 주소 저장
      setOpenPostcode(false); // 주소 검색 팝업창 닫기
    };
  // DaumPostcode 컴포넌트가 업데이트 될 때마다 새로운 key를 반환하여 문제를 방지합니다.
  const daumPostcodeKey = openPostcode ? "open" : "closed";



    
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
                     이름 / 연락처 data
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
                  
                  <button onClick={() => setOpenPostcode(true)}>주소검색</button>
                </label>
                <div
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                >
                    주소 data {address} 
                    </div>
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
                     상품 이름 / 수량
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
  