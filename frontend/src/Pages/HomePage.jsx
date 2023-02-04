import React from "react";
import Navbar from "../Components/Navbar";
import { BrowserRouter as Router, Link, Outlet } from "react-router-dom";
import "./homes.css";

const HomePage = () => {
  return (
    <div className="">
      <div className="mr-6 ml-6 bg-slate-50">
        <Navbar />
        <ul className="mt-3 flex flex-row gap-10 content-center items-center gap-x-20 z-10 mx-7 pb-3">
          <Link className="nav" to="roomMates">
            Flat Mates
          </Link>
          <Link className="nav" to="flats">
            Flats
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
