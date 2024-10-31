import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaBilibili,
  FaCartShopping,
  FaGear,
  FaHouse,
  FaMoneyBill,
  FaMoneyBillTransfer,
  FaPeopleGroup,
  FaPeopleRoof,
  FaPerson,
  FaPersonBiking,
  FaPlus,
  FaProductHunt,
  FaShop,
  FaUser,
  FaWallet,
} from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { GiNetworkBars } from "react-icons/gi";
import { FiTool } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaProjectDiagram, FaUserAlt, FaUserAltSlash } from "react-icons/fa";

const SideBar = () => {
  const naviate = useNavigate();
  const [focusBar, setFocusBar] = useState("home");
  return (
    <>
      <div className="bg-slate-800 h-screen w-60 overflow-x-hidden">
        <Link to="/update-profile" className="flex">
          <img
            className="rounded-full h-16 w-16 object-cover"
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="text-white font-bold text-xl mt-3">MY Compny</h1>
          <span className="ms-5 mt-5 text-white">
            <FaArrowRight />
          </span>
        </Link>
        <div
          onClick={(e) => {
            naviate("/");
            setFocusBar("home");
          }}
          className={`${
            focusBar === "home"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <span className="text-white text-2xl">
            <FaHouse />
          </span>
          <h1 className="text-white font-bold ms-5">Home</h1>
        </div>
        <div
          onClick={(e) => {
            naviate("/parties");
            setFocusBar("parties");
          }}
          className={`${
            focusBar === "parties"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div div className="flex">
            <span className="text-white text-2xl">
              <IoPerson />
            </span>
            <h1 className="text-white font-bold ms-5">Parties</h1>
          </div>
          <span className="text-white ms-20 mt-2">
            <FaPlus />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/item");
            setFocusBar("item");
          }}
          className={`${
            focusBar === "item"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <MdDashboardCustomize />
            </span>
            <h1 className="text-white font-bold ms-5">Items</h1>
          </div>
          <span className="text-white ms-[90px] mt-2">
            <FaPlus />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/sales");
            setFocusBar("sales");
          }}
          className={`${
            focusBar === "sales"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <FaMoneyBillTransfer />
            </span>
            <h1 className="text-white font-bold ms-5">Sale</h1>
          </div>
          <span className="text-white ms-[100px] mt-2 text-xl">
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/purchases");
            setFocusBar("purchases");
          }}
          className={`${
            focusBar === "purchases"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="inline-flex">
            <span className="text-white text-2xl">
              <FaCartShopping />
            </span>
            <h1 className="text-white font-bold ms-5">Purchase</h1>
          </div>
          <span className="text-white ms-16 mt-2 text-xl">
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/Products");
            setFocusBar("Products");
          }}
          className={`${
            focusBar === "Products"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <FaProductHunt />
            </span>
            <p className="text-white font-semibold ms-5">Products</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            naviate("/quick-bill");
            setFocusBar("quick-bill");
          }}
          className={`${
            focusBar === "quick-bill"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="inline-flex">
            <span className="text-white text-2xl">
              <MdDashboardCustomize />
            </span>
            <h1 className="text-white text-xs font-bold ms-4">Quick Billing</h1>
          </div>
          <span className="text-white ms-[70px] mt-2">
            <FaPlus />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/expence");
            setFocusBar("expence");
          }}
          className={`${
            focusBar === "expence"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <FaWallet />
            </span>
            <h1 className="text-white font-semibold ms-5">Expences</h1>
          </div>
          <span className="text-white ms-[65px] mt-2 text-xl">
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/bank");
            setFocusBar("bank");
          }}
          className={`${
            focusBar === "bank"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <FaUserAlt />
            </span>
            <h1 className="text-white font-semibold ms-5">Customers</h1>
          </div>
          <span className="text-white ms-[95px] mt-2 text-xl">
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div
          onClick={(e) => {
            naviate("/store");
            setFocusBar("store");
          }}
          className={`${
            focusBar === "store"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <FaShop />
            </span>
            <p className="text-white font-semibold ms-5">My Store</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            naviate("/report");
            setFocusBar("report");
          }}
          className={`${
            focusBar === "report"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div className="flex">
            <span className="text-white text-2xl">
              <GiNetworkBars />
            </span>
            <p className="text-white font-semibold ms-5">Reports</p>
          </div>
        </div>
        <div
          onClick={(e) => {
            naviate("/setting");
            setFocusBar("setting");
          }}
          className={`${
            focusBar === "setting"
              ? "p-3 bg-black  rounded-md flex  border-l-4 border-red-800 cursor-pointer "
              : "p-3 rounded-md flex  border-l-4 border-slate-800 cursor-pointer "
          }`}
        >
          <div onClick={(e) => naviate("/setting")} className="flex">
            <span className="text-white text-2xl">
              <FaGear />
            </span>
            <p className="text-white font-semibold ms-5">Setting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
