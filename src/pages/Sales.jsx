import React from "react";
import {
  FaArrowDown,
  FaFileExcel,
  FaFilter,
  FaMagnifyingGlass,
  FaPlus,
  FaPrint,
  FaShare,
} from "react-icons/fa6";
import { MdBarChart, MdPrint } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Navbar from "../screens/Navbar";

const Sales = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen">
        <div>
          <Navbar />
        </div>
        <div className="bg-white m-3 p-3 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <button className="text-black btn-ghost btn font-semibold">
                This Month <FaArrowDown />
              </button>
              <div className=" p-2">
                <span className="text-white bg-slate-500 input-md p-1">
                  Between
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered border-black input-sm bg-white"
                />
                <input
                  type="text"
                  placeholder="Enter FIRMS"
                  className="border-black bg-white border input-sm input placeholder:text-black"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <p className="block items-center justify-center">
                <MdBarChart className="text-xl text-black" />
                <span className="text-xs font-semibold text-black">Graph</span>
              </p>
              <p className="block items-center justify-center">
                <FaFileExcel className="text-xl text-black" />
                <span className="text-xs font-semibold text-black">
                  Excel Report
                </span>
              </p>
              <p className="block items-center justify-center">
                <MdPrint className="text-xl text-black" />
                <span className="text-xs font-semibold text-black">Print</span>
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="h-14 w-28 bg-teal-200 rounded-md flex justify-center items-center ">
              <div>
                <h1 className="text-black font-semibold">Paid</h1>
                <p className="text-black font-bold">₹ 0.00</p>
              </div>
            </div>
            <h1 className="text-black font-bold mt-4 text-xl">+</h1>
            <div className="h-14 w-28 bg-blue-200 rounded-md flex justify-center items-center ">
              <div>
                <h1 className="text-black font-semibold">Unpaid</h1>
                <p className="text-black font-bold">₹ 10,300.00</p>
              </div>
            </div>
            <h1 className="text-black font-bold mt-4 text-xl">=</h1>
            <div className="h-14 w-28 bg-orange-200 rounded-md flex justify-center items-center ">
              <div>
                <h1 className="text-black font-semibold">Total</h1>
                <p className="text-black font-bold">₹ 10,300.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-3 p-2 bg-white h-[360px]">
          <h1 className="text-slate-800 font-bold text-sm">TRANSACTIONS</h1>
          <div className="flex justify-between ">
            <div>
              <input
                type="text"
                className="border input-bordered absolute border-black bg-white "
              />
              <FaMagnifyingGlass className="text-black relative pt-2 text-xl" />
            </div>
            <div className="">
              <button className="bg-blue-500 text-white flex rounded-md btn-sm pt-1">
                <span className="bg-white rounded-full p-1">
                  <FaPlus className="text-blue-500 font-semibold" />
                </span>
                <span className="text-white font-bold text-xs">ADD Sales</span>
              </button>
            </div>
          </div>
          <div className="">
            <table class="bg-white m-5">
              <thead className="">
                <tr className="flex">
                  <th className="border border-slate-500  text-slate-500 w-[130px]">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold">INVOICE No.</span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-slate-500  text-slate-500 w-[130px]">
                    <div className="flex justify-between">
                      <span className=" flex text-sm font-semibold">
                        <FaArrowDown className="" />
                        PARTY NAME
                      </span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-black  text-slate-500 w-[130px]">
                    <div>
                      <span className=" flex text-sm font-semibold">
                        <FaArrowDown className="" />
                        PAYMENT TYPE
                      </span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-slate-500  text-slate-500 w-[130px]">
                    <div className="flex justify-between">
                      <span className=" flex text-sm font-semibold">
                        <FaArrowDown className="" />
                        TRANSITION
                      </span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-black  text-slate-500 w-[130px]">
                    <div>
                      <span className=" flex text-sm font-semibold">
                        <FaArrowDown className="" />
                        AMOUNT{" "}
                      </span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-black  text-slate-500 w-[130px]">
                    <div>
                      <span className=" flex text-sm font-semibold">
                        <FaArrowDown className="" />
                        BALANCE DUE
                      </span>
                      <span>
                        <FaFilter className="text-sm" />
                      </span>
                    </div>
                  </th>
                  <th className="border border-black text-slate-500 w-[50px]"></th>
                  <th className="border border-black text-slate-500 w-[50px]"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex hover:bg-gray-300 bg-gray-100">
                  <td className="border  text-slate-500  border-slate-600 w-[130px] text-end">
                    1
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[130px]">
                    John
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[130px]">
                    Cash
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[130px]">
                    Sale
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[130px]">
                    ₹ 10,300
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[130px]">
                    ₹ 10,200
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[50px] ">
                    <div className="flex justify-center items-center">
                      <FaPrint className="text-black font-bold" />
                      <FaShare className="text-black font-bold" />
                    </div>
                  </td>
                  <td className="border  text-slate-500  border-slate-600 w-[50px] text-center">
                    <HiOutlineDotsVertical className="text-slate-800 font-bold ms-4" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
