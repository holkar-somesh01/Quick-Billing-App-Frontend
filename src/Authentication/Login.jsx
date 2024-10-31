import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "./../assets/background.png";
import { useFormik } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import {
  useAdminLoginMutation,
  useAdminOTPVerifyMutation,
} from "../redux/apis/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { admin, logoutAdmin } from "../redux/slices/authSlice";
import { BillContext } from "../share/Context";

const Login = () => {
  const [adminData, setAdminData] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [AdminLogin, { isSuccess, isError, isLoading, error }] =
    useAdminLoginMutation();
  const formik = useFormik({
    initialValues: {
      // name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      // name: yup.string().required("Enter Name"),
      email: yup.string().required("Enter email").email("Enter Valid email"),
      password: yup.string().required("Enter Password").max(8).min(8),
    }),
    onSubmit: (values, { resetForm }) => {
      AdminLogin(values);
      setAdminData(values);
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
      console.log(isSuccess);
      toast.success("Your Account Successfully Sign In", {
        theme: "dark",
        position: "top-center",
      });
      setShowOTP(true);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(`${JSON.stringify(error, null, 2)}`, {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isError]);
  return (
    <>
      {showOTP ? (
        <VerifyOTP adminData={adminData} setAdminData={setAdminData} />
      ) : (
        <div>
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
              <img
                className="h-[500px] mt-32 absolute"
                src={background}
                alt=""
              />
              <div className="relative">
                <div className="bg-slate-300 bg-opacity-80 backdrop-blur-md w-[300px] p-3 rounded-md">
                  <h1 className="text-center font-bold text-xl bg-gradient-to-br from-pink-800 to-purple-500 text-slate-200 p-3 rounded-md">
                    Sign In..!
                  </h1>
                  <form onSubmit={formik.handleSubmit}>
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
                        "Sign In"
                      )}
                    </button>
                  </form>
                </div>
                <p className="text-slate-700 font-semibold ms-10">
                  Dont Have Account?
                  <Link className="text-blue-600" to="/register">
                    Sign Up{" "}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const VerifyOTP = ({ adminData, setAdminData }) => {
  const navigate = useNavigate();
  const { BillPdfData, setBillPdfData } = useContext(BillContext);
  const [OTPData, setOTPData] = useState();
  const [AdminOTP, { isSuccess, isLoading, isError, error }] =
    useAdminOTPVerifyMutation();
  useEffect(() => {
    if (isSuccess) {
      setBillPdfData({ ...BillPdfData, isSuccess: isSuccess });
      toast.success("OTP SuccessFully Verified ", {
        theme: "dark",
        position: "top-center",
      });
      navigate("/");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(`${JSON.stringify(error, null, 2)}`, {
        theme: "dark",
        position: "top-center",
      });
      //   dispatch(logoutAdmin());
    }
  }, [isError]);
  return (
    <>
      <div>
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
              <div className="bg-slate-300 bg-opacity-80 backdrop-blur-md w-[300px] p-3 rounded-md">
                <h1 className="text-center font-bold text-xl bg-gradient-to-br from-pink-800 to-purple-500 text-slate-200 p-3 rounded-md">
                  Verify Your OTP..!
                </h1>
                <div>
                  <input
                    onChange={(e) =>
                      setOTPData({ OTPData, otp: e.target.value })
                    }
                    type="text"
                    className="input input-md bg-white mb-3 w-full placeholder:text-black placeholder:font-bold"
                    placeholder="Enter OTP"
                  />
                  <button
                    onClick={(e) =>
                      AdminOTP({ ...OTPData, email: adminData.email })
                    }
                    type="submit"
                    className="btn bg-red-600 text-white font-bold w-full"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
              <p className="text-slate-700 font-semibold ms-10">
                Dont Have Account?
                <Link className="text-blue-600" to="/register">
                  Sign Up{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
