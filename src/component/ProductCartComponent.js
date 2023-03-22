import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductCartComponent() {


  

  return (
    <>
      <>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img
                  className="rounded-3xl shadow-lg"
                  // src=
                />
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
             
                  <div className="text-gray-400 max-h-40 overflow-y-hidden">
                   
                  </div>
                </div>
                <div>
                  {/* <div className="text-lg text-gray-800">2019</div>  */}
                </div>
                <p className=" text-gray-700 max-h-30 overflow-y-hidden">
                
                </p>
                <div className="flex text-2xl font-bold text-a"></div>
                   <div className="text-center items-center bg-green-600 text-gray-100 font-bold rounded-xl p-2">
                   <button
                   
                   >
                    구매하기
                   </button>
                   </div>
                   <div className="text-center items-center bg-green-600 text-gray-100 font-bold rounded-xl p-2">
                   <button
                   
                   >
                    장바구니에 담기
                   </button>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default ProductCartComponent;
