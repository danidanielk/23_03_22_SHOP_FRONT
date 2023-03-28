import axios from "axios";
import { useEffect, useState } from "react";

function BoardListComponent() {
  
  const [dataList, setDataList] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:8080/board/list",{withCredentials:true})
    .then((response)=>{
        const getData = response.data
        console.log(getData)
        setDataList(getData)
    })
    .catch((error)=>{
        console.log(error)
    })

},[])

const onButton=(boardId)=>{
    window.location.assign(`/boardview?boardId=${boardId}`)
}

  return (
    <>
      <>
        <div className="text-gray-900 bg-gray-200 mt-20">
          <div className="p-4 flex">
            <h1 className="text-3xl">Question List</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Title</th>
                  <th className="text-left p-3 px-5">phone</th>
                  <th className="text-left p-3 px-5 text-center">상태</th>
              
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
                    <button
                    onClick={()=>onButton(value.boardId)}
                    >
                      {value.title}
                    </button>
                  </td>

                   
                  <td className="p-3 px-5">
                    <div>
                      {value.phone}
                    </div>
                  </td>


                  <td className="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline- text-white font-bold py-1 px-2 rounde text-center">
                    <div>
                      {value.state}
                    </div>
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
export default BoardListComponent;
