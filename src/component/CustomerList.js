import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function CustomerList() {
  const [dataList, setDataList] = useState([]);
  const [getToken] = useCookies(["accessTK"])
  const token = getToken.accessTK

  useEffect(() => {
    axios
      .get("http://localhost:8080/manager/customer/list", {
        withCredentials: true,
        headers:{Authorization:`Bearer ${token}`}
      })
      .then((response) => {
        const getData = response.data;
        console.log(getData);
        setDataList(getData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [sortAsc, setSortAsc] = useState(true); // default sorting is ascending

  function handleClick() {
    const sortedList = dataList.sort((a, b) => {
      if (sortAsc) {
        return b.purchase - a.purchase;
      } else {
        return a.purchase - b.purchase;
      }
    });
    setDataList([...sortedList]); // create new array to re-render
    setSortAsc(!sortAsc); // toggle sorting direction
  }

  return (
    <>
      <>
        <div className="text-gray-900 bg-gray-200 mt-20">
          <div className="p-4 flex">
            <h1 className="text-3xl">Customer List</h1>
          </div>
          <div className="text-right mr-10 font-bold">
            <button onClick={handleClick}>
              등급순서 정렬 {sortAsc ? "▲" : "▼"}
            </button>
          </div>

          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Phone</th>
                  <th className="text-left p-3 px-5">Purchase</th>
                  <th className="text-left p-3 px-5 text-center">gradle</th>
                </tr>
                {dataList.map((value) => (
                  <tr
                    key={value}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">
                      <div>{value.email}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.phone}</div>
                    </td>

                    <td className="p-3 px-5">
                      <div>{value.purchase}</div>
                    </td>

                    <td className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline- text-white font-bold py-1 px-2 rounde text-center">
                      <div>{value.gradle}</div>
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
export default CustomerList;
