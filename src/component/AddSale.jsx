import React, { useContext } from "react";
import { useSelector } from "react-redux";
import SubNav from "../screens/SubNav";
import { BillContext } from "../share/Context";

const AddSale = () => {
  const { BillPdfData, setBillPdfData } = useContext(BillContext);
  console.log(BillPdfData);
  const { bill } = useSelector((state) => state.AdminAuth);
  console.log(bill);

  return (
    <>
      <div className="h-screen bg-slate-200 overflow-scroll">
        <div className="fixed w-[1050px] bg-white">
          <SubNav />
        </div>
        <div className="mt-20">
          <div className="p-10">
            <div className="">
              <h1 className="my-3 text-slate-600 font-semibold">
                Customer Name : {BillPdfData && BillPdfData.name}
              </h1>
              <h1 className="my-3 text-slate-600 font-semibold">
                Customer Mobile : {BillPdfData && BillPdfData.mobile}
              </h1>
            </div>
            <div className="card card-compact w-96 bg-white  shadow-xl">
              <div className="card-body p-5">
                <input
                  type="text"
                  value={bill && bill.totalAmount}
                  placeholder="Add Total Payment"
                  className="input input-bordered w-full text-black placeholder:text-slate-800 placeholder:font-semibold bg-slate-300"
                />
                <input
                  type="text"
                  placeholder="Add Remaining Amount"
                  className="input input-bordered w-full placeholder:text-slate-800 placeholder:font-semibold bg-slate-300"
                />
                <input
                  type="text"
                  placeholder="Deposite Ammount"
                  className="input input-bordered w-full placeholder:text-slate-800 placeholder:font-semibold bg-slate-300"
                />
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSale;
