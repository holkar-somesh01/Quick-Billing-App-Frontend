import React, { useContext, useEffect, useRef, useState } from "react";
import { BillContext } from "../share/Context";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import ReactToPrint from "react-to-print";
import { useSendBillMailMutation } from "../redux/apis/sendEmailApi";
import { toast } from "react-toastify";

const CreateBillPDF = ({ setPdfNavigate, totalBillData, customerData }) => {
  const [SendBillMail, { isSuccess, isError, isLoading, error }] =
    useSendBillMailMutation();
  const handleSendBill = () => {
    SendBillMail({ totalBillData, customerData });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Bill Send To User Email..!");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.success(`${error.data.message}`, {
        theme: "dark",
        position: "top-center"
      });
    }
  }, [isError]);
  const componentRef = useRef();
  return (
    <>
      <div className="h-screen bg-white">
        <div>
          <Subnav />
        </div>
        <div className="">
          <div className="">
            <ReactToPrint
              trigger={() => (
                <button className="btn text-white btn-sm bg-blue-500 w-28">
                  Print
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
          <PrintPdfCompo
            setPdfNavigate={setPdfNavigate}
            totalBillData={totalBillData}
            customerData={customerData}
            ref={componentRef}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setPdfNavigate(true)}
            className="btn text-white btn-sm bg-red-600 w-28"
          >
            Back
          </button>
          <button
            type="button"
            className="btn text-white btn-sm bg-blue-500 w-28"
            onClick={handleSendBill}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-md"></span>
              </>
            ) : (
              "Share"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

const PrintPdfCompo = React.forwardRef(
  ({ setPdfNavigate, totalBillData, customerData }, ref) => {
    const { BillPdfData, setBillPdfData } = useContext(BillContext);
    const dispatch = useDispatch();
    useEffect(() => {
      setBillPdfData({ ...BillPdfData, totalBillData });
    }, []);
    return (
      <>
        <div>
          <div ref={ref}>
            <div className="flex justify-center items-center mt-5 text-black">
              <h1 className="font-bold text-2xl">QUICK BILL</h1>
            </div>
            <div className="px-10 text-black font-semibold flex gap-20">
              <span>
                Customer Name: <span>{customerData && customerData.name}</span>
              </span>
              <p>
                Mobile: <span>{customerData && customerData.mobile}</span>
              </p>
            </div>
            <div className="p-10">
              <table className="w-full ">
                <thead>
                  <tr className="border-r border-slate-400">
                    <th className="text-black border-r border-l border-b border-slate-700 p-5">
                      Product Name
                    </th>
                    <th className="text-black border-r border-b border-slate-700 p-5">
                      Price/Unit
                    </th>
                    <th className="text-black border-r border-b border-slate-700 p-5">
                      QTY
                    </th>
                    <th className="text-black border-r border-b border-slate-700 p-5">
                      Unit
                    </th>
                    <th className="text-black border-r border-b border-slate-700 p-5">
                      Discount
                    </th>
                    <th className="text-black border-r border-b border-slate-700 p-5">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {totalBillData &&
                    totalBillData.products.map((item, index) => (
                      <tr key={index}>
                        <td className="text-black border-r border-l border-slate-400 p-5">
                          {item.itemName}
                        </td>{" "}
                        <td className="text-black border-r border-slate-400 p-5">
                          {item.pricePerUnit}
                        </td>
                        <td className="text-black border-r border-slate-400 p-5">
                          {item.qty}
                        </td>
                        <td className="text-black border-r border-slate-400 p-5">
                          {item.unit}
                        </td>
                        <td className="text-black border-r border-slate-400 p-5">
                          {item.discount
                            ? item.discount
                            : "No Discount Included"}
                        </td>
                        <td className="text-black border-r border-slate-400 p-5">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="flex justify-end p-10">
                <div>
                  <div className="flex gap-3">
                    <p className="text-slate-700">Total : </p>
                    <p className="text-slate-700 underline">
                      {totalBillData && totalBillData.totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

const Subnav = () => {
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

export default CreateBillPDF;
