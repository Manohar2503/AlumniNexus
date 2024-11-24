import React from "react";
import { useLocation } from "react-router-dom";
import pic3 from '../assets/pic3.jpeg'
const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return <div>No event details found.</div>;
  }

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center">
        <div className="mt-[100px] text-center text-[#5a58c8]">
          <h1 className="text-5xl font-bold">{event.title}</h1>
          <h1 className="pt-5 text-xl font-semibold">
            {event.date} | Event location is {event.location}
          </h1>
          <div className="bg-[#5a58c8] w-64 mx-auto text-white p-5 mt-10">
            <span>Tickets are not on sale</span>
            <br />
            <a href="http://" className="underline">
              See other events
            </a>
          </div>
          <div className="mt-[4rem] w-[160vh] mx-auto">
            <img className=' '  src={event.image} alt="" />
          </div>

          <div className="mt-10 mb-10">
            {" "}
            
            <h1 className="text-3xl font-bold">Time & Location</h1>
            <h1 className="pt-5 font-light">
              {event.date}, {event.time}
            </h1>
            <h1 className="font-light">Event location is {event.location}</h1>
          </div>

          <div className="mt-10 ">
            <h1 className="text-3xl text-red-950 font-bold">Description</h1>
            <h1 className="pt-5 font-semibold">{event.description}</h1>
          </div>
          <h1 className="text-4xl font-bold justify-center text-red-400 text-center my-[20px]">Event Images</h1>
          <div>
          <div className="w-[20%] h-[20%] grid  sm:grid-cols-2 gap-2 md:grid-cols-4 md:m-4  xl:grid-cols-4 md:w-[100%] md:h-[100%] ">
          <diV><img className='mx-2 w-[100%] h-[100%] '  src={event.image1} alt="" /></diV>
          <img className='mx-2  w-[100%] h-[100%]'  src={event.image2} alt="" />
          <img className='mx-2 w-[100%] h-[100%]'  src={event.image3} alt="" />
          <img className='mx-2 w-[100%] h-[100%]'  src={event.image4} alt="" />
          </div>
        <div className="w-[20%] h-[20%] grid gap-2  sm:grid-cols-2 md:grid-cols-4 md:m-4 xl:grid-cols-4 md:w-[100%] md:h-[100%]">
        <img className='mx-2 w-[100%] h-[100%]'  src={event.image5} alt="" />
        <img className='mx-2 w-[100%] h-[100%]'  src={event.image6} alt="" />
        <img className=' mx-2 w-[100%] h-[100%]'  src={event.image7} alt="" />
        <img className='mx-2 w-[100%] h-[100%] '  src={event.image8} alt="" />
        </div>
          </div>

          <div className="mt-10 mb-[50px]">
            <h1 className="text-3xl font-bold">Share This Event</h1>
            <h1 className="text-xl pt-5 pb-10">
              <span className="font-bold pr-10">
                <a href="https://www.instagram.com/acm_vvit?igsh=MXZlbHBoYm96Zm13OQ==">f</a>
              </span>
              <span className="font-bold pr-10">
                <a href="https://www.instagram.com/acm_vvit?igsh=MXZlbHBoYm96Zm13OQ==">x</a>
              </span>
              <span className="font-bold">
                <a href="https://www.instagram.com/acm_vvit?igsh=MXZlbHBoYm96Zm13OQ==">in</a>
              </span>
            </h1>
          </div>


        </div>
      </div>
    </>
  );
};

export default EventDetails;