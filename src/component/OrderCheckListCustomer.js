import axios from "axios";
import { useEffect, useState } from "react";

function OrderCheckListCustomer() {


    const onCancel=(orderId)=>{
        axios.delete(`http://localhost:8080/member/cancel/${orderId}`,{withCredentials:true})
        .then((response)=>{
            console.log(response)
            window.location.assign("/ordercheck2")
        }).catch((error)=>{
            console.log(error)
        })

    }


    const [dataList, setDataList] = useState([]);

    useEffect(() => {
      // axios로 데이터를 가져온 뒤 dataList와 localStorage에 저장된 데이터를 비교해서
      // 새로운 데이터가 있으면 setDataList를 호출합니다.
      axios
        .get("http://localhost:8080/member/orderlist", {
          withCredentials: true,
        })
        .then((response) => {
          const getDataList = response.data;
          setDataList(getDataList);
          
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
  
   
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
                    <th className="text-left p-3 px-5">주소반환</th>
                    <th className="text-left p-3 px-5">메세지</th>
                    <th className="text-left p-3 px-5">취소</th>
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
                      <div>
                       {value.phone}
                      </div>
                    </td>
  
                    <td className="p-3 px-5">
                      <div>
                        {value.productQuantity}
                      </div>
                    </td>
  
                    <td className="p-3 px-5">
                      <div>
                        {value.address}
                      </div>
                    </td>
  
                     
                    <td className="p-3 px-5">
                      <div>
                        {value.message}
                      </div>
                    </td>
  
                        <td>
                        <button
                          onClick={() => onCancel(value.orderId)}
                          type="button"
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                    주문 취소
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
export default OrderCheckListCustomer;
