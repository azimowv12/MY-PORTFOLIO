import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Aloqa() {
  return (
   <footer id='Aloqa' class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span class="ml-3 text-xl">Azimov Lochinbek</span>
    </a>

    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
 
      <a class="ml-3 text-gray-400">

      </a>
      <a href='https://www.instagram.com/llocinbek/' class="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a href='https://t.me/azimowv_tt' class="ml-3 text-gray-400">
        <FaTelegramPlane />
      </a>
    </span>
  </div>
</footer>
  )
}
