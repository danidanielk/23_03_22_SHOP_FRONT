import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ListAllComponent() {
  const click = (productId) => {
    window.location.assign(`/productdetail/?productId=${productId}`);
  };

  const [dataList, setDataList] = useState([]);

  //   const location = useLocation();
  //   const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    axios
      .post(`http://localhost:8080/product/listall`)
      .then((response) => {
        const getDataList = response.data;
        setDataList(getDataList);
        console.log(dataList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        <div className="2xl:container xl:mx-auto">
          <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50 mb-20">
                Top Selling
              </h1>
            </div>
            <div className="grid grid-cols-10 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-15 mt-8 md:mt-0">
              {/* 카드시작 */}

              {dataList.map((value) => (
                <div className="bg-gray-50 dark:bg-gray-800 p-8">
                  <div className="">
                    <h2 className="text-xl text-gray-600 dark:text-white">
                      <div className="flex text-2xl mb-5 font-bold text-a">
                        {value.productName}
                      </div>
                      <div className="flex text-2x1 font-bold text-a">
                        ${value.productPrice}
                      </div>
                      {/* <div className="flex text-1xl font text-a">수량:{value.productQuentity}</div> */}
                    </h2>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                  </div>
                  <button
                    onClick={() => click(value.productId)}
                    className="flex justify-center items-center mt-8 md:mt-24"
                  >
                    <img src={value.productImage} />
                  </button>
                </div>
              ))}
              {/* 카드끝 */}
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default ListAllComponent;
