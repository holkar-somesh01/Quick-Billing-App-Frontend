import classNames from "classnames";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAddProductsMutation } from "../redux/apis/productAPi";
import { useSelector } from "react-redux";

const Products = () => {
  const [customerData, setCustomerData] = useState();
  const navigate = useNavigate();
  const [AddProducts, { isSuccess, isLoading, isError, error }] =
    useAddProductsMutation();
  const { admin } = useSelector((state) => state.AdminAuth);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      desc: "",
      qty: "",
      unit: "",
      images: "",
      userId: admin._id,
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter Name"),
      price: yup.string().required("Enter price"),
      desc: yup.string().required("Enter desc"),
      qty: yup.string().required("Enter qty"),
      unit: yup.string().required("Enter unit"),
      images: yup.string().required("Enter images"),
      userId: yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const fd = new FormData();
      fd.append("name", values.name);
      fd.append("price", values.price);
      fd.append("desc", values.desc);
      fd.append("qty", values.qty);
      fd.append("unit", values.unit);
      fd.append("userId", values.userId);
      fd.append("images", values.images);
      AddProducts(fd);
      console.log(fd);

      resetForm();
    },
  });
  const handleClass = (arg) =>
    classNames({
      "input input-bordered text-black font-bold w-full input-md input-primary  bg-white placeholder:text-black placeholder:font-semibold": true,
      "input input-bordered text-black font-bold w-full input-md input-primary  bg-white placeholder:text-black placeholder:font-semibold input-success":
        formik.touched[arg] && !formik.errors[arg],
      "input input-bordered text-black font-bold w-full input-md input-primary  bg-white placeholder:text-black placeholder:font-semibold input-error":
        formik.touched[arg] && formik.errors[arg],
    });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product SuccessFully Added..!", {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isSuccess]);
  return (
    <>
      <div className="">
        <div className="bg-white h-screen overflow-scroll">
          <div className="w-[1050px] fixed z-10">
            <Subnav />
          </div>

          <div className=" flex justify-center mt-28">
            <div className="card card-compact w-[80%] bg-white shadow-xl">
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="p-10 ">
                    <div className="">
                      <h1 className="text-black text-center text-2xl font-medium">
                        Add New Products
                      </h1>
                    </div>
                    <pre>{JSON.stringify(customerData, null, 2)}</pre>
                    <div className="flex gap-5 my-5 mt-5">
                      <div>
                        <label htmlFor="name">Enter Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Product Name"
                          {...formik.getFieldProps("name")}
                          className={handleClass("name")}
                        />
                        {formik.errors.name && formik.touched.name && (
                          <div className="text-error font-bold  m-2">
                            {formik.errors.name}
                          </div>
                        )}
                        {!formik.errors.name && formik.touched.name && (
                          <div className="text-success font-bold mt-2">
                            Looks Good..!
                          </div>
                        )}
                      </div>
                      <div className="w-[300px]">
                        <label htmlFor="price">Enter price</label>
                        <input
                          type="price"
                          name="price"
                          id="price"
                          placeholder="Enter Product price"
                          {...formik.getFieldProps("price")}
                          className={handleClass("price")}
                        />
                        {formik.errors.price && formik.touched.price && (
                          <div className="text-error font-bold  m-2">
                            {formik.errors.price}
                          </div>
                        )}
                        {!formik.errors.price && formik.touched.price && (
                          <div className="text-success font-bold mt-2">
                            Looks Good..!
                          </div>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="w-[620px] flex gap-5 my-5">
                      <div>
                        <label htmlFor="desc">Enter desc</label>
                        <input
                          type="text"
                          name="desc"
                          id="desc"
                          placeholder="Enter Product desc"
                          {...formik.getFieldProps("desc")}
                          className={handleClass("desc")}
                        />
                        {formik.errors.desc && formik.touched.desc && (
                          <div className="text-error font-bold  m-2">
                            {formik.errors.desc}
                          </div>
                        )}
                        {!formik.errors.desc && formik.touched.desc && (
                          <div className="text-success font-bold mt-2">
                            Looks Good..!
                          </div>
                        )}
                      </div>
                      <div className="w-[300px]">
                        <label htmlFor="qty">Enter qty</label>
                        <input
                          type="qty"
                          name="qty"
                          id="qty"
                          placeholder="Enter Product qty"
                          {...formik.getFieldProps("qty")}
                          className={handleClass("qty")}
                        />
                        {formik.errors.qty && formik.touched.qty && (
                          <div className="text-error font-bold  m-2">
                            {formik.errors.qty}
                          </div>
                        )}
                        {!formik.errors.qty && formik.touched.qty && (
                          <div className="text-success font-bold mt-2">
                            Looks Good..!
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-[620px]">
                      <label htmlFor="unit">Enter unit</label>
                      <input
                        type="text"
                        name="unit"
                        id="unit"
                        placeholder="Enter Product unit"
                        {...formik.getFieldProps("unit")}
                        className={handleClass("unit")}
                      />
                      {formik.errors.unit && formik.touched.unit && (
                        <div className="text-error font-bold  m-2">
                          {formik.errors.unit}
                        </div>
                      )}
                      {!formik.errors.unit && formik.touched.unit && (
                        <div className="text-success font-bold mt-2">
                          Looks Good..!
                        </div>
                      )}
                    </div>
                    <div className="w-[620px]">
                      <label htmlFor="images">Enter images</label>
                      <input
                        type="file"
                        name="images"
                        id="images"
                        placeholder="Enter Product images"
                        onChange={(e) =>
                          formik.setFieldValue("images", e.target.files[0])
                        }
                        // {...formik.getFieldProps("images")}
                        className={handleClass("images")}
                      />
                      {formik.errors.images && formik.touched.images && (
                        <div className="text-error font-bold  m-2">
                          {formik.errors.images}
                        </div>
                      )}
                      {!formik.errors.images && formik.touched.images && (
                        <div className="text-success font-bold mt-2">
                          Looks Good..!
                        </div>
                      )}
                    </div>
                    <div className="w-[620px] my-3">
                      {isLoading ? (
                        <div className="bg-slate-700 w-full text-center">
                          {" "}
                          <span className="loading loading-ring loading-lg"></span>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-md font-bold text-white w-full"
                        >
                          Add Products
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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

export default Products;
