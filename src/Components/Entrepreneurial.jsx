import React from 'react'
import { DonationData } from '../assets/data/donation'

function DonationCard({ donate }) {
  return (
    <div className="flex justify-center space-x-[25px]">
      <div className="w-[250px] h-[250px] border-solid bg-[#fcd34d] flex flex-col items-center justify-center space-y-2 p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
        <div className="text-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <h1 className="text-[20px]">{donate.title}</h1>
          <p className="text-[15px] mt-2">
            Click here to edit the text and include the information you would like to feature.
          </p>
        </div>
        <div className="flex items-center justify-center text-[20px] mt-2 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <span className="text-gray-700"></span>
          <span className="text-gray-900 ml-1">→</span>
        </div>
      </div>
    </div>
  )
}

const Entrepreneurial = () => {
  return (
    <div>
      <div>
        <h1 className=" md:text-[80px] font-bold justify-center text-center drop-shadow-md hover:drop-shadow-x">
          Entrepreneurial Ideas
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        {DonationData.map((donate, index) => (
          <DonationCard key={index} donate={donate} />
        ))}
      </div>
    </div>
  )
}

export default Entrepreneurial
