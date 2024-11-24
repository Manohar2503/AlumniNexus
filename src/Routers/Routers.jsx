import React from "react";
import Body from '../Pages/Body'
import Footer from '../Pages/Footer'
import { Header } from "../Pages";
import Login from "../Components/Login";
import { Routes, Route } from "react-router-dom";
import DonarImages from "../Components/DonarImages";
import Leanrning from "../Components/Leanrning";
import Event from "../Components/Event";
import AddForm from "../Forms/AddForm";
import EventDetails from "../Components/EventDetails";
import NewsMain from "../Components/NewsMain";
import NewsDetails from "../Components/NewsDetails";
import DonationPage from "../Components/DonationPage";
import StartupForm from "../Forms/StartupForm";
import MentorPage from "../Components/MainPages/MentorPage";
import JobsPage from "../Components/MainPages/JobsPage";
import AboutPage from "../Components/MainPages/AboutPage";
import ContactPage from "../Components/MainPages/ContactPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Body/>} />
      <Route path="/body" element={<Body/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/learning" element={<Leanrning/>}/>
      <Route path="/events" element= {<Event/>}/>
      <Route path="/form" element={<AddForm/>}/>  
      <Route path="/event-details" element={<EventDetails/>} />
      <Route path='/newsMain' element={<NewsMain/>}/>
      <Route path='/newsdetails' element={<NewsDetails/>}/>
      <Route path='/donations' element={<DonationPage/>}/>
      <Route path='/stratup' element={<StartupForm/>}/>
      <Route path='/mentor' element={<MentorPage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/aboutpage' element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
  );
};
export default Routers;
