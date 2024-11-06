import React, { useEffect, useState } from "react";
import Register from "./Authentication/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./share/NotFound";
import Home from "./Authentication/Home";
import Login from "./Authentication/Login";
import ContextProvider from "./share/Context";
import { useSelector } from "react-redux";
import AddCustomer from "./component/AddCustomer";
import AllCustomer from "./component/AllCustomer";
import BillCreate from "./component/BillCreate";
import AddSale from "./component/AddSale";
import Products from "./component/Products";
import AllProducts from "./component/AllProducts";
import Sales from "./pages/Sales";
import HomePage from "./pages/HomePage";
import SideBar from "./screens/Sidebar";
import UpdateProfile from "./Authentication/UpdateProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const App = () => {
  const { admin } = useSelector((state) => state.AdminAuth);
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLogin(admin);
    }, 50);
  }, [admin]);
  return (
    <ContextProvider>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <div className="flex">
            <span className="flex-1">
              {/* <SideBar /> */}
            </span>
            <div className="w-full">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/customer" element={<AddCustomer />} />
                <Route path="/bank" element={<AllCustomer />} />
                <Route path="/add-sale" element={<AddSale />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/fetch-products" element={<AllProducts />} />
                <Route path="/sales" element={<Sales />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
