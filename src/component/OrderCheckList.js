import { useState } from "react";

function OrderCheckList() {

const [ready,setReady] = useState(false)
const [responseReady, setResponseReady] = useState('준비중');
const [success, setSuccess] = useState(false)
const [responseSuccess, setResponseSuccess] = useState("배송전")

const onReady=()=>{
setReady(!ready)
if (ready){
setResponseReady("준비중")
}
else{
setResponseReady("준비완료")
}
}

const onSuccess= ()  =>{
  setSuccess(!success)
  if(success){
    setResponseSuccess("배송전")
  }
  else{
    setResponseSuccess("배송완료")
    window.location.assign("/")
  }
}


  return (
    <>
      <>
        <div className="text-gray-900 bg-gray-200 mt-20">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th></th>
                </tr>
                <tr className="border-b hover:bg-orange-100 bg-gray-100">
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.name"
                      className="bg-transparent"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <input
                      type="text"
                      value="user.email"
                      className="bg-transparent"
                    />
                  </td>
                  <td className="p-3 px-5">
                    <select value="user.role" className="bg-transparent">
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                    onClick={onReady}
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      {responseReady}
                    </button>
                    <button
                    onClick={onSuccess}
                      type="button"
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      {responseSuccess}
                    </button>
                  </td>
                </tr>
                

                
               
             
             
             
              
              </tbody>
            </table>
          </div>
        </div>
      </>
    </>
  );
}
export default OrderCheckList;
