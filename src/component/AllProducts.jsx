import React, { useEffect, useState } from "react";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  useFetchProductsQuery,
  useUpdateProductMutation,
} from "../redux/apis/productAPi";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import classNames from "classnames";
import * as yup from "yup";
import { toast } from "react-toastify";

const AllProducts = () => {
  const { admin } = useSelector((state) => state.AdminAuth);
  const [selectedProduct, setSelectedProduct] = useState();
  const { data, isSuccess, isError, error, isLoading } = useFetchProductsQuery(
    admin._id
  );
  const [
    UpdateProduct,
    {
      isSuccess: isSuccessUpdate,
      isLoading: isLoadingUpdate,
      isError: isErrorUpdate,
      error: ErrorUpdate,
    },
  ] = useUpdateProductMutation();
  const formik = useFormik({
    initialValues: {
      name: selectedProduct ? selectedProduct.name : "",
      price: selectedProduct ? selectedProduct.price : "",
      desc: selectedProduct ? selectedProduct.desc : "",
      qty: selectedProduct ? selectedProduct.qty : "",
      unit: selectedProduct ? selectedProduct.unit : "",
      images: "",
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().required("Enter name"),
      price: yup.string().required("Enter price"),
      desc: yup.string().required("Enter desc"),
      qty: yup.string().required("Enter qty"),
      unit: yup.string().required("Enter unit"),
      images: yup.string().required("Enter images"),
    }),
    onSubmit: (values, { resetForm }) => {
      UpdateProduct(values);
      resetForm();
    },
  });
  const handleClass = (arg) =>
    classNames({
      "input input-bordered bg-white w-full": true,
      "input-error": formik.touched[arg] && formik.errors[arg],
      "input-success": formik.touched[arg] && !formik.errors[arg],
    });
  useEffect(() => {
    if (isSuccessUpdate) {
      toast.success("Product Update Success");
    }
  }, [isSuccessUpdate]);
  useEffect(() => {
    if (isErrorUpdate) {
      toast.error(`${ErrorUpdate.data.message}`, {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isErrorUpdate])
  return (
    <div>
      <div className="bg-white h-screen overflow-scroll">
        <div className="fixed w-[1050px]">
          <Subnav />
        </div>
        <div>
          <div className="p-10 mt-20">
            <table class="table table-light table-striped table-hover bg-white rounded-none">
              <thead border={1}>
                <tr className="bg-blue-900 text-white ">
                  <th className="text-center">Name</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Desc</th>
                  <th className="text-center">QTY</th>
                  <th className="text-center">Unit</th>
                  <th className="text-center">Images</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item) => (
                    <tr className="text-black">
                      <td className="text-center">{item.name}</td>
                      <td className="text-center">{item.price}</td>
                      <td className="text-center">{item.desc}</td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-center">{item.unit}</td>
                      <td className="text-center">
                        <img
                          className="h-20 w-20 object-contain"
                          src={item.images}
                          alt=""
                        />
                      </td>
                      <td cla className="flex gap-3 justify-center">
                        <button
                          onClick={(e) => {
                            document.getElementById("my_modal_3").showModal();
                            setSelectedProduct(item);
                          }}
                          className="btn btn-primary text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => { }}
                          className="btn btn-primary text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-slate-300">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div>
              <pre>{JSON.stringify(selectedProduct, null, 2)}</pre>
              <form onSubmit={formik.handleSubmit}>
                <div className="my-2">
                  <input
                    type="text"
                    {...formik.getFieldProps("name")}
                    placeholder="Enter Name"
                    value={formik.values.name}
                    className={handleClass("name")}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    value={formik.values.desc}
                    {...formik.getFieldProps("desc")}
                    placeholder="Enter Name"
                    className={handleClass("desc")}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    {...formik.getFieldProps("price")}
                    value={formik.values.price}
                    placeholder="Enter Name"
                    className={handleClass("price")}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    {...formik.getFieldProps("qty")}
                    placeholder="Enter Name"
                    value={formik.values.qty}
                    className={handleClass("qty")}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    {...formik.getFieldProps("unit")}
                    placeholder="Enter Name"
                    value={formik.values.unit}
                    className={handleClass("unit")}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="file"
                    {...formik.getFieldProps("images")}
                    placeholder="Enter Name"
                    className={handleClass("images")}
                  />
                </div>
                {isLoadingUpdate ? (
                  <>
                    <span className="loading loading-spinner loading-md"></span>
                  </>
                ) : (
                  <button type="submit" className="btn btn-primary w-full">
                    Update Project
                  </button>
                )}
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

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
              onClick={(e) => navigate("/products")}
              className="btn-sm rounded-md bg-indigo-600"
            >
              Add Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
