import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.AdminAuth);

  useEffect(() => {
    if (admin) {
      navigate("/");
    }
  }, [admin]);
  return (
    <>
      <div className="h-screen bg-white">
        <div className="bg-white h-16 flex items-center justify-between shadow-md shadow-slate-800">
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
        <div>
          <div className="grid grid-cols-2">
            <div className="">
              <div className="flex justify-center items-center h-[500px]">
                <div>
                  <h1 className="text-slate-700 text-3xl font-bold font-serif ms-14">
                    Business Software for MSMEs
                  </h1>
                  <p className="ms-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem quibusdam dolores error sapiente hic quia.
                    Earum adipisci amet sint minima exercitationem quaerat!
                    Incidunt libero vero distinctio optio ex? Obcaecati, neque.
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => navigate("/login")}
                className="btn absolute btn-error bottom-40 left-36 w-56"
              >
                Get Started
              </button>
            </div>
            <div className="flex justify-center items-center h-[500px]">
              <img
                className="h-[300px]"
                src="https://vyapar.com/wp-content/uploads/2024/05/Hero-Image-WEBP.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
