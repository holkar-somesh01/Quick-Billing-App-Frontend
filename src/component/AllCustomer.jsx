import React, { useEffect, useState } from "react";
import { useLazyGetAllCustomerQuery } from "../redux/apis/cutomerApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaMagnifyingGlass,
  FaMessage,
  FaPhone,
  FaPlus,
  FaPrint,
} from "react-icons/fa6";
import Navbar from "../screens/Navbar";
import BillCreate from "./BillCreate";
import CustomerProfile from "./CustomerProfile";

const AllCustomer = () => {
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.AdminAuth);
  const [FetchCustomer, { data, isSuccess, isError, error, isLoading }] =
    useLazyGetAllCustomerQuery();
  const [navigateCompo, setnavigateCompo] = useState("bank");
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    FetchCustomer(admin._id);
  }, []);
  return (
    <>
      {navigateCompo === "bank" ? (
        <div className="bg-white h-screen overflow-scroll">
          <div className="border-b-2 border-slate-400 shadow-slate-500 shadow-md fixed">
            <Navbar />
          </div>
          <div className="flex justify-end px-10 pt-5 mt-20">
            <button
              onClick={(e) => navigate("/customer")}
              className="text-white btn-sm btn font-bold bg-red-600"
            >
              <FaPlus className="font-bold " /> <span>ADD Customer</span>
            </button>
          </div>
          {isLoading ? (
            <div className="h-[100%] flex justify-center items-center ">
              <span className="loading loading-spinner loading-md text-blue-600"></span>
            </div>
          ) : (
            <div className="p-10 ">
              <table class="table table-light table-striped table-hover bg-white rounded-none">
                <thead border={1}>
                  <tr className="bg-blue-900 text-white ">
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Mobile</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item) => (
                      <tr className="text-black">
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">{item.email}</td>
                        <td className="text-center">{item.mobile}</td>
                        <td cla className="flex gap-3 justify-center">
                          <button
                            onClick={(e) => {
                              setnavigateCompo("BillCreate");
                              setCustomerData(item);
                            }}
                            className="btn btn-primary text-white"
                          >
                            Create Bill
                          </button>
                          <button
                            onClick={(e) => {
                              setnavigateCompo("CustomerProfile");
                              setCustomerData(item);
                            }}
                            className="btn btn-primary text-white"
                          >
                            View All
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : navigateCompo === "BillCreate" ? (
        <BillCreate
          setnavigateCompo={setnavigateCompo}
          customerData={customerData}
        />
      ) : (
        <CustomerProfile
          setnavigateCompo={setnavigateCompo}
          customerData={customerData}
        />
      )}
    </>
  );
};

export default AllCustomer;
