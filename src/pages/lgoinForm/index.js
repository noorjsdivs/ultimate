import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import bannerBg from "../../assets/images/bannerBg.png";

const LoginForm = () => {
  let navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/staffinfo");
  };
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="max-w-screen-2xl h-screen mx-auto flex justify-between items-center">
        <div className="w-3/5">
          <Link to="/">
            <img className="w-[165px]" src={logo} alt="logo" />
          </Link>
          <div className="w-full h-auto flex items-center">
            <img
              className="w-[612px] h-[437px] bg-red-300"
              src={bannerBg}
              alt="bannerBg"
            />
          </div>
        </div>
        <div className="w-2/5">
          <div className="w-full flex items-center justify-center signUpFormOne">
            <form className="w-[516px] h-[630px] shadow-2xl flex flex-col items-center justify-center gap-10">
              <div>
                <h4 className="font-semibold text-xl">Log In Form</h4>
              </div>
              <div className="w-[70%] flex flex-col items-center gap-6">
                <input
                  className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                  type="text"
                  placeholder="Write First Name"
                />
                <input
                  className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                  type="text"
                  placeholder="Write Last Name"
                />

                <button
                  onClick={handleSignIn}
                  className="bg-darkBlue mt-6 font-semibold text-base text-white px-6 py-3 rounded-xl flex items-center justify-center gap-1 shadow-xl hover:bg-blue-800 hover:cursor-pointer transition-hover duration-300"
                >
                  Sign In
                </button>

                <p className="text-sm text-right w-full mt-6 text-[#7E7E7E]">
                  Don't have an Account?
                  <Link to="/">
                    <span className="text-[14px] text-darkBlue font-semibold uppercase ml-2 hover:cursor-pointer hover:text-blue-800 transition-hover duration-300 underline underline-offset-4">
                      SIGNUP HERE!
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
