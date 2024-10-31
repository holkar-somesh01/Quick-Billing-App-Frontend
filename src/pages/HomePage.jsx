import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaGear,
  FaPlus,
} from "react-icons/fa6";
import { PiListStarBold } from "react-icons/pi";
import Navbar from "../screens/Navbar";
import Chart from "../subComponent/Charts";

const HomePage = () => {
  return (
    <>
      <div className="bg-slate-200 h-screen">
        <div>
          <Navbar />
        </div>
        {/* MAIN COMPONENT START */}
        <div className="m-4 flex gap-14">
          <div>
            <div className="bg-white p-4 w-[500px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <span className="text-yellow-500 mt-1 text-xl">
                    <PiListStarBold />
                  </span>
                  <h1 className="text-black font-bold ms-3">Sale</h1>
                </div>
                <div>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-sm bg-slate-300 m-1"
                    >
                      This Month
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white rounded-box z-[1] p-2 shadow"
                    >
                      <div>
                        <p className="hover:bg-blue-200 p-2 text-black">
                          This Month
                        </p>
                        <p className="hover:bg-blue-200 p-2 text-black">
                          Last Month
                        </p>
                        <p className="hover:bg-blue-200 p-2 text-black">
                          This Quarter
                        </p>
                        <p className="hover:bg-blue-200 p-2 text-black">
                          This Year
                        </p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <h1 className="text-black font-bold text-2xl">
                    ₹ 10,000
                    <span className="text-slate-400 text-xl font-semibold">
                      .00
                    </span>
                  </h1>
                  <p>Total Sale (Aug)</p>
                  <span className="text-green-400 flex ">
                    <FaArrowUp />
                    <span className="mb-1">0%</span>
                  </span>
                  <p className="text-slate-500 text-sm">This Month Growth</p>
                </div>
                <div className="border-l-2 border-dashed border-slate-400">
                  <div>
                    <Chart />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 w-[500px]">
              <div className="bg-white mt-4 w-full p-3 h-[200px]">
                <div className="p-5">
                  <span className="text-green-500 flex gap-4">
                    <FaArrowDown />
                    <p className="text-black font-semibold">You'll Recive</p>
                  </span>
                  <h1 className="text-black ms-10 font-semibold">
                    ₹ 10,200<span className="text-slate-400">.00</span>
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p>John</p>
                  <span className="text-green-500">10,000</span>
                </div>
              </div>
              <div className="bg-white mt-4 w-full p-3 h-[200px]">
                <div className="p-5">
                  <span className="text-red-500 flex gap-4">
                    <FaArrowUp />
                    <p className="text-black font-semibold">You'll Pay</p>
                  </span>
                  <h1 className="text-black ms-10 font-semibold">
                    ₹ 100,200<span className="text-slate-400">.00</span>
                  </h1>
                </div>
                <div className="flex justify-between">
                  <p>Apple Iphone</p>
                  <span className="text-green-500">60,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-l border-slate-600"></div>
          <div className="p-2 h-11 w-[50%] bg-white rounded-md">
            <div className="flex justify-between">
              <p className="text-slate-600 font-semibold">Privacy</p>
              <span>
                <input
                  type="checkbox"
                  className="toggle  toggle-info bg-white"
                  defaultChecked
                />
              </span>
            </div>
            <h1 className="text-slate-800 font-bold mt-5">Stock Inventory</h1>
            <div className="bg-white p-5">
              <h1 className="text-slate-700 font-semibold">Stock Value</h1>
              <p className="text-slate-600">₹. 00</p>
            </div>
            <div className="bg-white p-5 mt-3">
              <h1 className="text-slate-700 font-semibold">Stock Value</h1>
              <p className="text-slate-600">₹. 00</p>
            </div>
            <h1 className="text-slate-800 font-bold mt-5">Cash & Bank</h1>
            <div className="bg-white p-5">
              <h1 className="text-slate-700 font-semibold">Bank Accounts</h1>
              <p className="text-slate-600">₹.0.00</p>
            </div>
            <div className="bg-white p-5 mt-3">
              <h1 className="text-slate-700 font-semibold">Loan Accounts</h1>
              <p className="text-orange-600">₹.0.00</p>
            </div>
          </div>
        </div>
        {/* MAIN COMPONENT END */}
      </div>
    </>
  );
};

export default HomePage;
