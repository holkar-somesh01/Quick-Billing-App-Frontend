import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import background from "./../assets/background.png";
import { useFormik } from "formik";
import { FaEye } from "react-icons/fa";
import classNames from "classnames";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useAdminRegisterMutation } from "../redux/apis/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [AdminRegister, { isSuccess, isLoading, isError, error }] =
    useAdminRegisterMutation();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter Name"),
      email: yup.string().required("Enter email").email("Enter Valid email"),
      password: yup.string().required("Enter Password").max(8).min(8),
    }),
    onSubmit: (values, { resetForm }) => {
      AdminRegister(values);
      resetForm();
    },
  });
  const handleClass = (arg) =>
    classNames({
      "input my-1 input-bordered w-full bg-white": true,
      "input my-1 input-bordered w-full bg-white input-error":
        formik.touched[arg] && formik.errors[arg],
      "input my-1 input-bordered w-full bg-white input-success":
        formik.touched[arg] && !formik.errors[arg],
    });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Admin Register Success", {
        theme: "dark",
        position: "top-center",
      });
      navigate("/login");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(`${error.data.message}`, {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isError]);
  return (
    <>
      <div className="bg-white absolute w-[100vw] h-16 flex items-center justify-between shadow-md shadow-slate-800">
        <div className="text-center ps-10">
          <img
            className="object-contain h-full w-24"
            src="https://vyapar.com/wp-content/uploads/2023/04/vyapar-app-logo.png"
            alt=""
          />
        </div>
        <div className="flex gap-10 text-black pe-10">
          <p className="font-semibold">
            <Link to="/">Home</Link>
          </p>
          <p className="font-semibold">
            <Link to="/login">Login</Link>
          </p>
          <p className="font-semibold">
            <Link to="/profile">Profile</Link>
          </p>
        </div>
      </div>
      <div className="h-[100vh] bg-slate-200">
        <div className="flex justify-center items-center h-[500px]">
          <img className="h-[500px] mt-32 absolute" src={background} alt="" />
          <div className="relative">
            <div className="bg-slate-300 mt-32 bg-opacity-80 backdrop-blur-md w-[300px] p-3 rounded-md">
              <h1 className="text-center font-bold text-xl bg-gradient-to-br from-pink-800 to-purple-500 text-slate-200 p-3 rounded-md">
                Sign Up..!
              </h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="my-3">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    {...formik.getFieldProps("name")}
                    className={handleClass("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-600 text-sm font-semibold">
                      {formik.errors.name}
                    </div>
                  ) : null}
                  {formik.touched.name && !formik.errors.name ? (
                    <div className="text-green-600 font-semibold text-sm">
                      Looks Good...!
                    </div>
                  ) : null}
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    {...formik.getFieldProps("email")}
                    className={handleClass("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-600 text-sm font-semibold">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  {formik.touched.email && !formik.errors.email ? (
                    <div className="text-green-600 font-semibold text-sm">
                      Looks Good...!
                    </div>
                  ) : null}
                </div>
                <div className="my-3">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    {...formik.getFieldProps("password")}
                    className={`${handleClass("password")}`}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-600 text-sm font-semibold">
                      {formik.errors.password}
                    </div>
                  ) : null}
                  {formik.touched.password && !formik.errors.password ? (
                    <div className="text-green-600 font-semibold text-sm">
                      Looks Good...!
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn bg-red-600 text-white font-bold w-full"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-ring loading-md"></span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>
            </div>
            <p className="text-slate-700 font-semibold ms-10">
              Dont Have Account?
              <Link className="text-blue-600" to="/login">
                Sign In{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
