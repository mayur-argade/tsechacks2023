import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import { getoneflat } from "../http";

const FlatPage = () => {
  const [flat, setFlat] = useState([]);

  const flatid = useParams().id;
  console.log(flatid);

  useEffect(() => {
    const fetchposts = async () => {
      const { data } = await getoneflat(flatid);
      // console.log(data);
      setFlat(data);
      console.log("flat",flat)
    };
    fetchposts();
  }, [flatid]);

  return (
    <div className="mr-6 ml-6">
      <div className=" bg-slate-50">
        <Navbar />
      </div>

      <div className="flex mr-44 ml-44 justify-between align-middle mt-2">
        <nav class="flex mt-3 " aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Flats
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  {flat.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <span className="mt-3">last updated on : {flat.updatedAt}</span>
      </div>

      <div className="mr-44 ml-44 mt-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{flat.name}</span>
            <span className="leading-10">
              {flat.address}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{flat.price}</span>

            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
              type="button"
            >
              <span class="sr-only">Open user menu</span>
              <span className="text-base">Contact</span>
              <svg
                class="w-4 h-4 mx-1.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              id="dropdownAvatarName"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <Link to="https://wa.me/+919076102474">
                  <div className="flex space-x-1">
                    <img src="/assets/wp.webp" className="w-5 h-5" alt="" />
                    <span>Whatsapp</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="images mt-10 flex space-x-1">
          <img src="/assets/1.jpg" className="w-96 h-96" alt="" />
          <img src="/assets/2.jfif" className="w-96 h-96" alt="" />
          <img src="/assets/3.jfif" className="w-96 h-96" alt="" />
        </div>

        <div className="grid grid-cols-4 justify-between mt-5 divide-x-2">
          <div className="flex flex-col ">
            <span className="text-xl font-regular text-center">{flat.buildArea}sqft</span>
            <span className="font-regular text-lg text-center">buildArea</span>
          </div>

          <div className="flex flex-col ">
            <span className="text-xl font-regular text-center"> </span>
            <span className="font-regular text-lg text-center">is Parking</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-regular text-center">320sqft</span>
            <span className="font-regular text-lg text-center">
              Nearby Station
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-regular text-center">320sqft</span>
            <span className="font-regular text-lg text-center">
              Average price
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatPage;
