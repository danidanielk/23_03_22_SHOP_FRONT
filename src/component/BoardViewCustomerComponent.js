import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { useLocation } from "react-router-dom"

function BoardViewCustomerComponent() {


    const [data,setData] = useState('')
    const location = useLocation()
    const boardId = new URLSearchParams(location.search).get("boardId")
    const [getToken]=useCookies(["accessTK"])
    const token = getToken.accessTK
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/board/view/customer/${boardId}`,{withCredentials:true,headers:{Authorization:`Bearer ${token}`}})
        .then((response)=>{
            const getData=response.data
            setData(getData)
            console.log(getData)
        })
      .catch((error)=>{
          console.log(error)
        })
    },[])
    
      return (
        <>
          <>
            <div className="ml-40 mt-32 mr-40">
      
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    email
                  </label>
                  <div
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {data.email}
                  </div>
                  
                  <p className="text-gray-600 text-xs italic">
                    
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Title
                  </label>
                  <div
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {data.title}
                  </div>
                  
                  <p className="text-gray-600 text-xs italic">
                    
                  </p>
                </div>
              </div>


              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Message
                  </label>
                  <div
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                  >
                    {data.message}

                  </div>
                  <p className="text-gray-600 text-xs italic">
                   
                  </p>
                </div>
              </div>


              <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                답변
              </label>
              <div
                className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 resize-none"
                id="message"
             
              >
                {data.answer}
              </div>
              <p className="text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p>
            </div>
          </div>
       



            </div>
          </>
        </>
      );
    }
    export default BoardViewCustomerComponent;
    