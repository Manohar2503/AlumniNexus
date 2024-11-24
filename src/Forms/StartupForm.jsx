import React from 'react'
import { DonationData } from '../assets/data/donation';

const StartupForm = () => {
  return (
    <div className='bg-[#FFF1E6]'>
    <div className="max-w-lg mx-auto  mt-5 p-6 bg-white shadow-lg rounded-lg">
<h2 className="text-2xl font-semibold mb-6 text-gray-700">Submit Your  Idea</h2>

<form >
<div className="mb-4 ">
 <label for="ideatitle" className="block text-gray-600 font-medium mb-2">Idea Title*</label>
 <input type="text" id="ideatitle" name="ideatitle" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>

<div className="mb-4">
 <label for="username" className="block text-gray-600 font-medium mb-2">Username*</label>
 <input type="text" id="username" name="username" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>

<div className="mb-4">
 <label for="email" className="block text-gray-600 font-medium mb-2">Email*</label>
 <input type="email" id="email" name="email" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>


<div className="mb-4">
 <label for="contact" className="block text-gray-600 font-medium mb-2">Contact Number</label>
 <input type="tel" id="contact" name="contact" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>
<div className="mb-4">
 <label for="files" className="block text-gray-600 font-medium mb-2">Username*</label>
 <input type="file" id="files" name="files" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div>

<div className="mb-4">
 <label for="idea" className="block text-gray-600 font-medium mb-2">Idea Details</label>
 <textarea id="idea" name="idea" rows="6" required
   className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
</div>


<div className="text-right">
 <button type="submit"
   className="px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition">
   Submit Idea
 </button>
</div>
</form>
</div>
   
</div>
  )
}

export default StartupForm
