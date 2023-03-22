import axios from "axios";
import { useEffect, useState } from "react";

function CategoryComponent() {


  const onDesk = () => {
    window.location.assign("/list/?category=desk");
  };

  const onChair = () => {
    window.location.assign("/list/?category=chair");
  };

  const onLighting = () => {
    window.location.assign("/list/?category=lighting");
  };

  const onSofa = () => {
    window.location.assign("/list/?category=sofa");
  };



 

  return (
    <>
      <>
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col jusitfy-center items-center space-y-10">
              <div className="flex flex-col justify-center items-center ">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">
                  Shop By Category
                  {/*  */}
               
                  {/*  */}
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759_960_720.jpg"
                  />
                  <button
                    onClick={onDesk}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    desk
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>

                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_960_720.jpg"
                    />
                    <button
                      onClick={onChair}
                      className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    >
                      chair
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://cdn.pixabay.com/photo/2016/11/29/05/01/lights-1867437_960_720.jpg"
                    />
                    <button
                      onClick={onLighting}
                      className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                    >
                      lighting
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                  </div>
                </div>

                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_960_720.jpg"
                  />
                  <button
                    onClick={onSofa}
                    className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  >
                    sofa
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
export default CategoryComponent;
