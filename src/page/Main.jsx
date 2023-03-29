import React from "react";
import Header from "../components/MainComponents/Header";
import Navbar from "../components/MainComponents/Navbar";
import Slider from "../components/MainComponents/Slider";
import TimeCard from "../components/MainComponents/TimeCard";
import Topbar from "../components/MainComponents/Topbar";
import UserOnline from "../components/MainComponents/UserOnline";

const Main = () => {
    return (
        <div>
         <Topbar/>
         <Header/>
         <TimeCard/>
         <Slider/>
        <UserOnline/>
        <Navbar/>
        </div>
    )
}

export default Main;