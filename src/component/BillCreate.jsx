import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetchProductsQuery } from "../redux/apis/productAPi";
import { FaMessage } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa";
import CreateBillPDF from "./CreateBillPDF";

const BillCreate = ({ setnavigateCompo, customerData }) => {
  const [pdfNavigate, setPdfNavigate] = useState(true);
  const { admin } = useSelector((state) => state.AdminAuth);
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [rows, setRows] = useState([{ id: 1 }]);
  const [billData, setBillData] = useState({});
  const [totalBillData, settotalBillData] = useState();
  const { data, isLoading } = useFetchProductsQuery(admin._id);
  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  const handleProductChange = (e, index) => {
    const selectedValue = e.target.value;
    const selectedProduct = data.find((item) => item._id === selectedValue);
    const updatedProductData = [...productData];
    updatedProductData[index] = selectedProduct;
    setProductData(updatedProductData);
    addRow();
  };

  const handleInputChange = (e, index, field) => {
    const value = e.target.value;
    const updatedProductData = [...productData];
    updatedProductData[index] = {
      ...updatedProductData[index],
      [field]: value,
    };
    setProductData(updatedProductData);
  };

  const calculateAmount = (price, qty, discount) => {
    const unitPrice = parseFloat(price) || 0;
    const quantity = +qty || 0;
    const discountValue = +discount || 0;
    const discontVar = unitPrice * quantity;
    return discontVar - discountValue;
  };

  const handleBillChange = (e) => {
    const { name, value } = e.target;
    setBillData({ ...billData, [name]: value });
  };

  const getTotalAmount = () => {
    return productData
      .reduce((total, product) => {
        const { price, qty, discount } = product || {};
        return total + calculateAmount(price, qty, discount);
      }, 0)
      .toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const billDetails = {
      ...billData,
      products: productData.map((product, index) => ({
        itemName: product.name,
        qty: product.qty,
        unit: product.unit,
        pricePerUnit: product.price,
        discount: product.discount,
        amount: calculateAmount(product.price, product.qty, product.discount),
      })),
      totalAmount: getTotalAmount(),
    };
    settotalBillData({ ...billDetails, _id: admin._id });
    setPdfNavigate(false);
  };
  return (
    <>
      {pdfNavigate ? (
        <form action="">
          <div className="bg-slate-200 h-screen overflow-scroll">
            <div className="flex justify-between p-3 bg-white">
              <div className="flex gap-4">
                <p className="text-black font-bold text-sm">Sale</p>
                <span className="border-l-2 border-slate-400 px-4">Credit</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary toggle-sm"
                  defaultChecked
                />
                <p className="text-slate-600 text-sm font-semibold">Cash</p>
              </div>
              <div>
                <button
                  onClick={() => setnavigateCompo("bank")}
                  className="bg-slate-500 text-black rounded-full py-[5px] px-[12px]"
                >
                  <span className="text-white">X</span>
                </button>
              </div>
            </div>
            <div className="bg-slate-200 p-10">
              <div className="flex justify-between">
                <div className="flex gap-5 h-8">
                  <input
                    type="text"
                    name="customerName"
                    value={customerData.name}
                    className="bg-white input-primary rounded-md text-black border border-slate-600 p-1 placeholder:text-slate-500 placeholder:font-semibold"
                    placeholder="Customer Name"
                    readOnly
                  />
                  <input
                    type="text"
                    name="mobile"
                    value={customerData.mobile}
                    className="bg-white input-primary rounded-md text-black border border-slate-600 p-1 placeholder:text-slate-500 placeholder:font-semibold"
                    placeholder="Phone No"
                    readOnly
                  />
                </div>
                <div className="flex">
                  <div>
                    <p className="text-slate-500">Invoice Number</p>
                    <p className="text-slate-500">Invoice Date</p>
                    <p className="text-slate-500">State of supply</p>
                  </div>
                  <div className="ms-4 w-28">
                    <input
                      type="text"
                      value={admin._id}
                      name="userId"
                      placeholder="Type here"
                      className="input input-bordered w-full input-xs bg-white"
                      readOnly
                    />
                    <input
                      name="date"
                      type="text"
                      value={new Date().toLocaleDateString()}
                      placeholder="Type here"
                      className="input input-bordered w-full input-xs bg-white"
                      readOnly
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      name="shopAddress"
                      onChange={handleBillChange}
                      className="input input-sm input-bordered bg-white w-32"
                    />
                  </div>
                </div>
              </div>
              <div>
                <select
                  onChange={(e) => handleProductChange(e, rows.length - 1)}
                  className="select select-bordered w-36 bg-white text-black select-sm"
                >
                  <option disabled selected>
                    Choose Products
                  </option>
                  {data &&
                    data.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div>
              <table className="bg-white">
                <thead>
                  <tr className="p-3">
                    <th className="border p-3 text-slate-600 w-[100px]">#</th>
                    <th className="border p-3 text-slate-600 w-[380px]">
                      Item
                    </th>
                    <th className="border p-3 text-slate-600 w-[100px]">Qty</th>
                    <th className="border p-3 text-slate-600 w-[100px]">
                      Unit
                    </th>
                    <th className="border p-3 text-slate-600 w-[100px]">
                      Price/Unit
                    </th>
                    <th className="border p-3 text-slate-600 w-[100px]">
                      Discount
                    </th>
                    <th className="border p-3 text-slate-600 w-[100px]">
                      Images
                    </th>
                    <th className="border p-3 text-slate-600 w-[100px]">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((_, index) => {
                    const product = productData[index] || {};
                    const { price, qty, discount } = product;
                    const amount = calculateAmount(price, qty, discount);

                    return (
                      <tr key={index}>
                        <td className="text-center text-slate-600 border border-slate-200">
                          {index + 1}
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="item"
                            type="text"
                            value={product.name}
                            placeholder="Item"
                            className="input input-bordered w-full bg-white input-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="qty"
                            type="text"
                            value={product.qty}
                            placeholder="Qty"
                            onChange={(e) => handleInputChange(e, index, "qty")}
                            className="input input-bordered w-full bg-white input-sm"
                          />
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="unit"
                            type="text"
                            value={product.unit}
                            placeholder="Unit"
                            className="input input-bordered w-full bg-white input-sm"
                            readOnly
                          />
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="price"
                            type="text"
                            value={product.price}
                            placeholder="Price/Unit"
                            // onChange={(e) => handleInputChange(e, index, 'price')}
                            className="input input-bordered w-full bg-white input-sm"
                          />
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="discount"
                            type="text"
                            value={product.discount || ""}
                            placeholder="Discount"
                            onChange={(e) =>
                              handleInputChange(e, index, "discount")
                            }
                            className="input input-bordered w-full bg-white input-sm"
                          />
                        </td>
                        <td className="border border-slate-200">
                          <img
                            className="h-20 w-20 object-cover"
                            src={product.images || ""}
                            alt="Product Image"
                          />
                        </td>
                        <td className="border border-slate-200">
                          <input
                            name="amount"
                            type="text"
                            value={amount.toFixed(2) || ""}
                            placeholder="Amount"
                            className="input input-bordered w-full bg-white input-sm"
                            readOnly
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex bg-slate-300 p-5 justify-between items-end">
                <div>
                  <button
                    type="button"
                    onClick={addRow}
                    className="btn-sm bg-blue-600 text-white font-semibold text-xs rounded-md"
                  >
                    + Add Rows
                  </button>
                </div>
                <div className="flex gap-4">
                  <p className="text-black font-semibold">Total</p>
                  <input
                    type="text"
                    value={`₹ ${getTotalAmount()}`}
                    placeholder="Enter Total"
                    name="total"
                    className="input input-bordered bg-white input-sm"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <pre>{JSON.stringify(totalBillData, null, 2)}</pre>
            <div>
              <div className="bg-white mt-[120px] ps-[800px] flex gap-5">
                <div className="dropdown dropdown-top">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn bg-white btn-outline btn-sm m-1 text-black"
                  >
                    Share
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-white text-black rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a href="#/">
                        SMS
                        <span>
                          <FaMessage />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#/">
                        Print
                        <span>
                          <FaPrint />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#/">Save & New</a>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-sm bg-blue-600 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <CreateBillPDF
          setPdfNavigate={setPdfNavigate}
          totalBillData={totalBillData}
          customerData={customerData}
        />
      )}
    </>
  );
};

export default BillCreate;
