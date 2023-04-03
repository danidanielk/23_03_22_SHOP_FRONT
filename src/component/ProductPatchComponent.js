import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

function ProductPatchComponent() {
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productName, setProductName] = useState("");
  const [contents, setContents] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [getToken] = useCookies(["accessTK"])
  const token = getToken.accessTK
  //파일 이미지 상태에 저장 변수
  const [selectFile, setSelectFile] = useState("");

  // 여기서부터
  useEffect(() => {
    setLoading(true);
  }, [imageSrc]);

  const onProductImage = (e) => {
    setSelectFile(e.target.files[0]);

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
  };
  // 여기까지 이미지 업로드시 바로 보여주는 구간.

  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");
  const memberId = new URLSearchParams(location.search).get("memberId");
  const auth = new URLSearchParams(location.search).get("auth");

  const onProductName = (e) => {
    setProductName(e.target.value);
  };

  const onContents = (e) => {
    setContents(e.target.value);
  };

  const onProductPrice = (e) => {
    setProductPrice(e.target.value);
  };

  const onProductQuantity = (e) => {
    setProductQuantity(e.target.value);
  };

  const onCategory = (e) => {
    setProductCategory(e.target.value);
  };

  const onSubmit = () => {
    const formData = new FormData();

    const data = {
      //  "productImage":selectFile,
      productName: productName,
      productContent: contents,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productCategory: productCategory,
    };

    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("formData", blob);
    formData.append("productImage", selectFile);
    formData.append("productId",productId)

    axios
      .patch(
        `http://localhost:8080/manager/patch`,
        formData,
        { withCredentials: true ,
        headers: { "Content-Type": "multipart/form-data",Authorization:`Bearer ${token}` } },
   
      )
      .then((value) => {
        console.log(value);
        console.log(token)
        window.location.assign(`/cart?memberId=${memberId}&auth=${auth}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="mt-12 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="text"
          value={productName}
          id="title"
          onChange={onProductName}
          placeholder="Product Name"
        />
        <label htmlFor="category"></label>
        <select
          id="category"
          className="pl-2 w-full outline-none border-none"
          value={productCategory}
          onChange={onCategory}
          placeholder="Product Category"
        >
          <option value="">Product category</option>
          <option value="desk">책상</option>
          <option value="chair">의자</option>
          <option value="lighting">조명</option>
          <option value="sofa">쇼파</option>
        </select>
      </div>

      <div className="mt-5 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl">
        <input
          className="pl-2 w-full outline-none border-none"
          type="number"
          value={productPrice}
          id="title"
          onChange={onProductPrice}
          placeholder="Product Price"
        />
        <input
          className="pl-2 w-full outline-none border-none"
          type="number"
          value={productQuantity}
          id="title"
          onChange={onProductQuantity}
          placeholder="Product Quentity"
        />
      </div>

      <div className="flex flex-col-1 gap-1 text-center mt-14 ml-52">
        <input
          className="mt-7 flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
          placeholder="이미지 선택"
          type="file"
          onChange={onProductImage}
        ></input>

        {loading && (
          <img
            src={imageSrc}
            alt=""
            className=" bg-center bg-no-repeat bg-cover w-60 h-60 border border-gray-500 shadow-lg ml-12 mt-1"
          />
        )}
      </div>
      <div className="mt-5 mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        ></label>
        <textarea
          rows="4"
          name="message"
          id="message"
          value={contents}
          onChange={onContents}
          placeholder="contents"
          className="mt-12 w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      {/*  */}
      <div className="mt-12 text-center border-2 mb-6 py-2 px-3 rounded-2xl bg-gray-900">
        <button className="text-white hover:text-[#FF6A3D]" onClick={onSubmit}>
          수정 완료
        </button>
      </div>
      {/*  */}
    </>
  );
}
export default ProductPatchComponent;
