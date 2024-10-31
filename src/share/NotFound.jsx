import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="h-screen bg-slate-50">
      <div className="bg-white h-16 flex items-center justify-between shadow-xl shadow-slate-800">
        <div className="text-center ps-10">
          <img
            className="object-contain h-full w-24"
            src="https://vyapar.com/wp-content/uploads/2023/04/vyapar-app-logo.png"
            alt=""
          />
        </div>
        <div className="flex gap-10 text-black pe-10">
          <p className="font-semibold">
            <Link to="/">Home</Link>
          </p>
          <p className="font-semibold">
            <Link to="/login">Login</Link>
          </p>
          <p className="font-semibold">
            <Link to="/profile">Profile</Link>
          </p>
        </div>
      </div>
      <div className=" bg-slate-50 text-center pt-14">
        <h1 className="font-bold text-5xl text-red-500">
          Oops! That page can’t be found.
        </h1>
        <p className="text-black mt-10 font-semibold">
          It looks like nothing was found at this location. Maybe try one of the
          links below or a search?
        </p>
        <div className="mt-6">
          <input
            type="text"
            className="border border-slate-400 bg-slate-200 h-10 me-4 placeholder:text-slate-500 placeholder:font-semibold placeholder:px-3"
            placeholder="Search..."
          />
          <button className="bg-red-500 rounded-full p-3 px-5 text-white font-semibold">
            Search
          </button>
        </div>
        <div className="bg-slate-900 flex justify-around p-5 mt-2">
          <p className="text-white">
            © 2024 Simply Quick Billing Apps Pvt. Ltd.
          </p>
          <div className="flex gap-10">
            <span className="text-white text-xl">
              <FaFacebook />
            </span>
            <span className="text-white text-xl">
              <FaTwitter />
            </span>
            <span className="text-white text-xl">
              <FaInstagram />
            </span>
            <span className="text-white text-xl">
              <FaLinkedin />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
