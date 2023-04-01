import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function OrderCheckList() {
  const [getToken] = useCookies(["accessTK"])
  const token = getToken.accessTK
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    // localStorage에서 데이터 가져오기
    const savedDataList = JSON.parse(localStorage.getItem("dataList")) || [];
    setDataList(savedDataList);
  }, []);

  useEffect(() => {
    // state가 변경될 때마다 localStorage에 저장하기
    localStorage.setItem("dataList", JSON.stringify(dataList));
  }, [dataList]);

  useEffect(() => {
    // axios로 데이터를 가져온 뒤 dataList와 localStorage에 저장된 데이터를 비교해서
    // 새로운 데이터가 있으면 setDataList를 호출합니다.
    axios
      .get("http://localhost:8080/manager/orderlist", {
        withCredentials: true,
        headers:{Authorization:`Bearer ${token}`}
      })
      .then((response) => {
        const getDataList = response.data;
        const savedDataList =
          JSON.parse(localStorage.getItem("dataList")) || [];
        if (getDataList.length !== savedDataList.length) {
          setDataList(getDataList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onReady = (index) => {
    setDataList((prevDataList) => {
      const updatedDataList = [...prevDataList];
      updatedDataList[index] = {
        ...prevDataList[index],
        ready: !prevDataList[index].ready,
      };
      return updatedDataList;
    });
  };

  const onSuccess = (index) => {
    setDataList((prevDataList) => {
      const updatedDataList = [...prevDataList];
      updatedDataList[index] = {
        ...prevDataList[index],
        success: !prevDataList[index].success,
      };
      return updatedDataList;
    });
  };

 

  return (
    <>
      <>
        <div className="text-gray-900 bg-gray-200 mt-20">
          <div className="p-4 flex">
            <h1 className="text-3xl">Order List</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">상품</th>
                  <th className="text-left p-3 px-5">수량</th>
                  <th className="text-left p-3 px-5 ">주소</th>
                  <th className="text-left p-3 px-5">메세지</th>
                  <th className="text-left p-3 px-5 ">상태</th>
                </tr>
                {dataList.map((value, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">
                      <div>{value.email}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.phone}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.productQuantity}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.address}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.message}</div>
                    </td>

                    <td>
                      <button
                        onClick={() => onSuccess(index)}
                        type="button"
                        className=" text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        {value.success ? "배송완료" : "----"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
}
export default OrderCheckList;
