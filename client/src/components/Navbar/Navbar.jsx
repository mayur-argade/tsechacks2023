import React from 'react'

export const Navbar = () => {
  return (
    <>
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 flex flex-row justify-between">
  <div class="flex flex-wrap items-center justify-between">
    <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Roommate</span>
    </a>
  </div>
  <div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><span>Log in</span></button>
  </div>
</nav>

    </>
  )
}
