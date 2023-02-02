import React from "react";

export const GuestRouteForm = () => {
  return (
    <>
      <div className="flex-col min-h-[90vh] w-full flex items-center justify-center bg-gray-50">
        <div className="">
          {/* <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">Form UI<span className="text-sm text-purple-700">form showcase</sm></h1> */}
          <h1 className="mb-1 font-bold sm:text-2xl lg:text-3xl flex gap-1 items-baseline font-mono">
            Have a Look at our Form 
              <sm />
            {/* </span> */}
          </h1>
        </div>
        <div className="flex flex-col max-w- gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400 min-w-[25vw]">
         
        <div id="name" className="">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div id="age" className="">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="19" required/>
        </div>
        <div id="target_location" className="">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Location</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mumbai" required/>
        </div>


<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Looking for flat</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Looking for roommate</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Looking for flat + roommate</label>
</div>

        
        
          
          <button
            className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
