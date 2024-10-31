import classNames from "classnames";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRegisterCustomerMutation } from "../redux/apis/cutomerApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({});
  const navigate = useNavigate();
  const [RegisterCustomer, { isSuccess, isLoading, isError, error }] =
    useRegisterCustomerMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      // password: "",
      address: "",
      mobile: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter Name"),
      email: yup.string(),
      // .required("Enter Email"),
      // password: yup.string().required("Enter Password"),
      address: yup.string().required("Enter Address"),
      mobile: yup.string().required("Enter Mobile"),
    }),
    onSubmit: (values, { resetForm }) => {
      RegisterCustomer(values);
      // resetForm();
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
      toast.success("Customer SuccessFully Registered..!", {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isSuccess]);
  return (
    <>
      <div className="bg-white h-[100%]">
        <div className="text-white bg-slate-200 p-5 flex justify-between">
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
              onClick={(e) => navigate("/bank")}
              className="btn-sm rounded-md bg-indigo-600"
            >
              View Customer
            </button>
          </div>
        </div>

        <div className=" flex justify-center">
          <div className="card card-compact w-[80%] bg-white shadow-xl">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="p-10 ">
                  <div className="">
                    <h1 className="text-black text-center text-2xl font-medium">
                      Add New Customer
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
                        placeholder="Enter Customer Name"
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
                      <label htmlFor="email">Enter Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Customer Email"
                        {...formik.getFieldProps("email")}
                        className={handleClass("email")}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="text-error font-bold  m-2">
                          {formik.errors.email}
                        </div>
                      )}
                      {!formik.errors.email && formik.touched.email && (
                        <div className="text-success font-bold mt-2">
                          Looks Good..!
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="w-[620px] flex gap-5 my-5">
                    <div>
                      <label htmlFor="mobile">Enter Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        id="mobile"
                        placeholder="Enter Customer Mobile"
                        {...formik.getFieldProps("mobile")}
                        className={handleClass("mobile")}
                      />
                      {formik.errors.mobile && formik.touched.mobile && (
                        <div className="text-error font-bold  m-2">
                          {formik.errors.mobile}
                        </div>
                      )}
                      {!formik.errors.mobile && formik.touched.mobile && (
                        <div className="text-success font-bold mt-2">
                          Looks Good..!
                        </div>
                      )}
                    </div>
                    {/* <div className='w-[300px]'>
                                        <label htmlFor="password">Enter Password</label>
                                        <input
                                            type="password"
                                            name='password'
                                            id='password'
                                            placeholder="Enter Customer Password"
                                            {...formik.getFieldProps("password")}
                                            className={handleClass("password")}
                                        />
                                        {
                                            formik.errors.password && formik.touched.password && <div className='text-error font-bold  m-2'>{formik.errors.password}</div>
                                        }
                                        {
                                            !formik.errors.password && formik.touched.password && <div className='text-success font-bold mt-2'>Looks Good..!</div>
                                        }
                                    </div> */}
                    <div className="w-[300px]">
                      <label htmlFor="address">Enter Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter Customer Address"
                        {...formik.getFieldProps("address")}
                        className={handleClass("address")}
                      />
                      {formik.errors.address && formik.touched.address && (
                        <div className="text-error font-bold  m-2">
                          {formik.errors.address}
                        </div>
                      )}
                      {!formik.errors.address && formik.touched.address && (
                        <div className="text-success font-bold mt-2">
                          Looks Good..!
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <div className='w-[620px]'>
                                    <label htmlFor="address">Enter Address</label>
                                    <input
                                        type="text"
                                        name='address'
                                        id='address'
                                        placeholder="Enter Customer Address"
                                        {...formik.getFieldProps("address")}
                                        className={handleClass("address")}
                                    />
                                    {
                                        formik.errors.address && formik.touched.address && <div className='text-error font-bold  m-2'>{formik.errors.address}</div>
                                    }
                                    {
                                        !formik.errors.address && formik.touched.address && <div className='text-success font-bold mt-2'>Looks Good..!</div>
                                    }
                                </div> */}
                  <div className="w-[620px] my-3">
                    {isLoading ? (
                      <div className="bg-slate-700">
                        {" "}
                        <span className="loading loading-ring loading-lg"></span>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary btn-md font-bold text-white w-full"
                      >
                        Add Customers
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomer;
