import React from "react";
import { FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SubNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white bg-slate-200 p-5">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <FaMagnifyingGlass className="text-black mt-2" />
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered bg-white input-sm"
            />
          </div>
          <div className="flex gap-3">
            <span className="border-r-2 border-slate-300 flex px-3">
              <FaBell className="text-xl text-black" />
            </span>
            <button
              onClick={(e) => navigate("/fetch-products")}
              className="btn-sm rounded-md bg-indigo-600"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
