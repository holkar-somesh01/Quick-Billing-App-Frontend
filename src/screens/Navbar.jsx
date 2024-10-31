import React, { useEffect } from "react";
import { FaBell, FaGear, FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { useAdminLogoutMutation } from "../redux/apis/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [AdminLogout, { isSuccess, isLoading, isError, error }] =
    useAdminLogoutMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      toast.warn("Admin Logout Success", {
        theme: "dark",
        position: "top-center",
      });
      navigate("/");
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isError) {
      toast.warn(`${JSON.stringify(error, null, 2)}`, {
        theme: "dark",
        position: "top-center",
      });
    }
  }, [isError]);
  return (
    <>
      <div className="bg-white w-[100%] p-2">
        <div className="flex gap-10">
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-white border-b-2 border-black placeholder:text-black w-[350px]"
              placeholder="Enter Business Name"
            />
            <button className="bg-blue-600 rounded-md p-2 text-white w-24">
              Save
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <div
              onClick={(e) => navigate("/add-sale")}
              className=" cursor-pointer p-2 bg-red-600 w-28 flex gap-3 rounded-full"
            >
              <span className="bg-white rounded-full h-5 w-5 flex justify-center items-center text-black p-0">
                <FaPlus />
              </span>
              <span className="text-white text-xs font-bold">Add Sale</span>
            </div>
            <div
              onClick={(e) => navigate("/bank")}
              className="cursor-pointer p-2 bg-blue-600 w-28 flex gap-3 rounded-full"
            >
              <span className="bg-white rounded-full h-5 w-5 flex justify-center items-center text-black p-0">
                <FaPlus />
              </span>
              <span className="text-white text-xs font-bold">Create Bill</span>
            </div>
            <div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="p-2 cursor-pointer border-blue-600 border shadow-md w-32 flex gap-3 rounded-full m-1 text-blue-600 text-sm font-bold"
                >
                  + Add More
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li className="text-black font-bold">
                    <Link to="/customer">
                      <FaRegUserCircle className="text-xl" />
                      <span>ADD Customers</span>
                    </Link>
                  </li>
                  <li className="text-black font-bold">
                    <Link to="/products">
                      <GiShop className="text-xl" />
                      <span>ADD Products</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex border-l-2 gap-5">
            <span className="text-slate-500 text-xl mt-3 ms-3">
              <FaBell />
            </span>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="text-slate-500 text-xl mt-3 ms-3"
              >
                <FaGear />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
              >
                <div>
                  <button
                    onClick={(e) => {
                      AdminLogout();
                      dispatch(logoutAdmin());
                    }}
                    className="text-slate-700 font-bold flex gap-4"
                  >
                    <span className="text-slate-700 font-bold text-2xl">
                      <CiLogout />
                    </span>
                    LogOut
                  </button>
                </div>
                {/* <li className='text-slate-700 font-semibold'></li> */}
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
