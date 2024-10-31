import React, { useContext } from "react";
import { FaPhone, FaShare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BillContext } from "../share/Context";
import Navbar from "../screens/Navbar";

const CustomerProfile = ({ setnavigateCompo, customerData }) => {
  const { BillPdfData, setBillPdfData } = useContext(BillContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white h-screen ">
        <div className="border-b-2 border-slate-200 shadow-md shadow-slate-500 ">
          <Navbar />
        </div>
        <div className="justify-between flex items-center mt-10">
          <div>
            <div className="flex ps-10 gap-3">
              <div className="flex pt-3 ">
                <h5 className="bg-teal-200 p-2 text-black rounded-lg">
                  <strong>CustomerName : </strong>
                  {customerData.name}
                </h5>
              </div>
              <div className="flex pt-3">
                <h5 className="bg-teal-200 p-2 text-black rounded-lg">
                  <strong>Mobile : </strong>
                  {customerData.mobile}
                </h5>
              </div>
            </div>
            <div className="justify-center items-center ps10">
              <div className="mx-10 mt-3 rounded-md p-5 bg-teal-300 ">
                <h5 className=" p-2 text-black rounded-lg">
                  <strong>Email : </strong>
                  {customerData.email}
                </h5>
                <h5 className=" p-2 text-black rounded-lg">
                  <strong>Address : </strong>
                  {customerData.address}
                </h5>
              </div>
              <div className="flex ps-10 pt-3"></div>
            </div>
          </div>
          <div className="px-20">
            {/* <img height={350} width={350} src="https://play-lh.googleusercontent.com/0Oxj5yd5rYDqofo_zYwzlKFnZcaSN51LuO4mrIPLDnj6rSMkGgKklLDtzZRPCdq7wyLM=w600-h300-pc0xffffff-pd" alt="" /> */}
            <div clas>
              <button
                onClick={(e) => {
                  setBillPdfData(customerData);
                  navigate("/add-sale");
                }}
                className="btn btn-primary"
              >
                Add Remaining Payment
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 pt-36 ps-10">
          <div className="h-28 w-28 bg-teal-200 rounded-md flex justify-center items-center ">
            <div>
              <h1 className="text-black font-semibold">Paid</h1>
              <p className="text-black font-bold">₹ 0.00</p>
            </div>
          </div>
          <h1 className="text-black font-bold mt-10 text-xl">+</h1>
          <div className="h-28 w-28 bg-blue-200 rounded-md flex justify-center items-center ">
            <div>
              <h1 className="text-black font-semibold">Unpaid</h1>
              <p className="text-black font-bold">₹ 10,300.00</p>
            </div>
          </div>
          <h1 className="text-black font-bold mt-10 text-xl">=</h1>
          <div className="h-28 w-28 bg-orange-200 rounded-md flex justify-center items-center ">
            <div>
              <h1 className="text-black font-semibold">Total</h1>
              <p className="text-black font-bold">₹ 10,300.00</p>
            </div>
          </div>
          <div className="ms-20 flex gap-5">
            <button className="btn  text-white font-bold bg-teal-400">
              <FaPhone className="font-bold " /> <span>Contact</span>
            </button>
            <button className="btn  text-white font-bold bg-blue-400">
              <FaMessage className="font-bold " /> <span>Message</span>
            </button>
            <button className="btn  text-white font-bold bg-orange-400">
              <FaShare className="font-bold " /> <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
