import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ProductDetailComponent() {
  const onBuy = (productId) => {
    
  };

  const onSave = (productId) => {
    axios.get(`http://localhost:8080/product/product/add/${productId}`,{withCredentials:true})
    .then((response)=>{
      const memberId = response.data
      console.log(memberId,productId)
      alert("등록 완료 ")
      window.location.assign(`/productdetail/?productId=${productId}`);
    })
    .then((error)=>{
      console.log(error)
      // alert("로그인 해주세요")
      // window.location.assign("/login")
    })
  };

  const [product, setProduct] = useState("");

  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");

  useEffect(() => {
    axios
      .post(`http://localhost:8080/product/productid/${productId}`)
      .then((response) => {
        const getProduct = response.data;
        console.log(getProduct);
        setProduct(getProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <>
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <div id="viewerButton" className="hidden w-full flex justify-center">
            <button
              onclick="openView()"
              className="bg-white text-indigo-600 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 py-5 px-10 font-semibold"
            >
              Open Quick View
            </button>
          </div>
          <div
            id="viewerBox"
            className="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900"
          >
            <div className="flex justify-end">
              <button
                onclick="closeView()"
                aria-label="Close"
                className="focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="dark:text-white"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8799 15.9996L23.6133 10.2796C23.8643 10.0285 24.0054 9.688 24.0054 9.33293C24.0054 8.97786 23.8643 8.63733 23.6133 8.38626C23.3622 8.13519 23.0217 7.99414 22.6666 7.99414C22.3115 7.99414 21.971 8.13519 21.7199 8.38626L15.9999 14.1196L10.2799 8.38626C10.0288 8.13519 9.68832 7.99414 9.33325 7.99414C8.97818 7.99414 8.63766 8.13519 8.38659 8.38626C8.13551 8.63733 7.99446 8.97786 7.99446 9.33293C7.99446 9.688 8.13551 10.0285 8.38659 10.2796L14.1199 15.9996L8.38659 21.7196C8.26161 21.8435 8.16242 21.991 8.09473 22.1535C8.02704 22.316 7.99219 22.4902 7.99219 22.6663C7.99219 22.8423 8.02704 23.0166 8.09473 23.179C8.16242 23.3415 8.26161 23.489 8.38659 23.6129C8.51054 23.7379 8.658 23.8371 8.82048 23.9048C8.98296 23.9725 9.15724 24.0073 9.33325 24.0073C9.50927 24.0073 9.68354 23.9725 9.84602 23.9048C10.0085 23.8371 10.156 23.7379 10.2799 23.6129L15.9999 17.8796L21.7199 23.6129C21.8439 23.7379 21.9913 23.8371 22.1538 23.9048C22.3163 23.9725 22.4906 24.0073 22.6666 24.0073C22.8426 24.0073 23.0169 23.9725 23.1794 23.9048C23.3418 23.8371 23.4893 23.7379 23.6133 23.6129C23.7382 23.489 23.8374 23.3415 23.9051 23.179C23.9728 23.0166 24.0077 22.8423 24.0077 22.6663C24.0077 22.4902 23.9728 22.316 23.9051 22.1535C23.8374 21.991 23.7382 21.8435 23.6133 21.7196L17.8799 15.9996Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-strech justify-center lg:space-x-8">
              <div className="lg:w-1/2 flex justify-between items-strech bg-gray-50  px-2 py-20 md:py-6 md:px-6 lg:py-24">
                <div className="flex items-center">
                  <button
                    onclick="goPrev()"
                    aria-label="slide back"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                  >
                    <svg
                      className="w-10 h-10 lg:w-16 lg:h-16"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 16L24 32L40 48"
                        stroke="#1F2937"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="slider">
                  <div className="slide-ana lg:relative">
                    {/* <div
                      className="flex"
                      style={{ transform: "translateX(-100%)" }}
                    >
                      <img
                        src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                        alt="A black chair with wooden legs"
                        className="w-full h-full"
                      />
                    </div> */}
                    <div
                      className="flex"
                      style={{ transform: "translateX(0%)" }}
                    >
                      <img
                        src={(product.productImage)}
                        // src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                        alt="A black chair with wooden legs"
                        className="w-60 h-60"
                      />
                    </div>
                    {/* <div
                      className="flex"
                      style={{ transform: "translateX(100%)" }}
                    >
                      <img
                        src="https://i.ibb.co/fMGD6ZC/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-3-1.png"
                        alt="A black chair with wooden legs"
                        className="w-full h-full"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onclick="goNext()"
                    aria-label="slide forward"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                  >
                    <svg
                      className="w-10 h-10 lg:w-16 lg:h-16"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 16L40 32L24 48"
                        stroke="#1F2937"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                  {product.productName}
                </h1>
                <p className="text-base leading-normal text-gray-600 dark:text-white mt-2">
                  {product.productContent}
                </p>
                <p className="text-3xl font-medium text-gray-600 dark:text-white mt-8 md:mt-10"></p>
                <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                  <button
                    onClick={() => onSave(product.productId)}
                    className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                  >
                    ADD TO CART
                  </button>
                  <button
                    onClick={() => onBuy(product.productId)}
                    className="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 dark:text-white uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-transparent dark:border-white dark:text-white focus:ring-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-800 "
                  >
                    BUY
                  </button>
                </div>
                <div className="mt-6">
                  <button className="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    재고수량:{product.productQuentity}
                  </button>

                  <button className="text-xl underline text-gray-800 dark:text-white dark:hover:text-gray-200 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                    가격:{product.productPrice}
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
export default ProductDetailComponent;
