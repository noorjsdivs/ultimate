import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import logo from "../../assets/images/logo.png";
import bannerBg from "../../assets/images/bannerBg.png";
import NextStepBtn from "../../components/button/NextStepBtn";

const MainPage = () => {
  // const navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  // ==================== Error Messages ====================
  let [errMsg, setErrorMsg] = useState(false);

  let EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/);
  };

  // ==================== Success message ====================

  let [successMsgOne, setSuccessMsgOne] = useState(false);
  let [successMsgTwo, setSuccessMsgTwo] = useState(false);
  let [successMsgThree, setSuccessMsgThree] = useState(false);
  useEffect(() => {
    let FormOne = document.querySelector(".signUpFormOne");
    let FormTwo = document.querySelector(".signUpFormTwo");
    let FormThree = document.querySelector(".signUpFormThree");
    let submitBtnOne = document.querySelector(".submitBtnOne");
    let backBtnOne = document.querySelector(".backBtnOne");
    let backBtnTwo = document.querySelector(".backBtnTwo");
    submitBtnOne.addEventListener("click", (e) => {
      e.preventDefault();
      if (firstName === "") {
        setErrorMsg("First Name is required!");
      } else if (lastName === "") {
        setErrorMsg("Last Name is required!");
      } else {
        setErrorMsg(false);
        setSuccessMsgOne(
          `Thank you dear ${firstName} ${lastName}. Processing next`
        );
        setTimeout(() => {
          FormOne.style.transform = "translateX(-140%)";
          FormTwo.style.transform = "translateX(4%)";
          FormOne.style.transition = "all ease-in-out .7s";
          FormTwo.style.transition = "all ease-in-out .7s";
        }, 2000);
      }
    });
    let submtiBtnTwo = document.querySelector(".submtiBtnTwo");
    submtiBtnTwo.addEventListener("click", (e) => {
      e.preventDefault();
      if (phoneNumber === "") {
        setErrorMsg("Phone Number is required!");
      } else if (email === "") {
        setErrorMsg("Email is required!");
      } else if (!EmailValidation(email)) {
        setErrorMsg("Please give a valid Email!");
      } else {
        setErrorMsg(false);

        setSuccessMsgTwo(
          `Your Phone Nnumber: ${phoneNumber}, and Email: ${email} updated`
        );
        setTimeout(() => {
          FormTwo.style.transform = "translateX(-140%)";
          FormThree.style.transform = "translateX(4%)";
          FormTwo.style.transition = "all ease-in-out .7s";
          FormThree.style.transition = "all ease-in-out .7s";
        }, 2000);
      }
    });
    backBtnOne.addEventListener("click", (e) => {
      e.preventDefault();
      FormTwo.style.transform = "translateX(140%)";
      FormOne.style.transform = "translateX(0%)";
    });
    backBtnTwo.addEventListener("click", (e) => {
      e.preventDefault();
      FormThree.style.transform = "translateX(140%)";
      FormTwo.style.transform = "translateX(4%)";
    });
    let submitSignUpBtn = document.querySelector(".submitSignUpBtn");
    submitSignUpBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (password === "") {
        setErrorMsg("Password is required!");
      } else {
        setSuccessMsgThree(
          `Congratulations dear ${firstName} ${lastName}. Your Account has been created successfully according below mentioned details...`
        );
        setErrorMsg(false);
      }
    });
  }, [firstName, lastName, phoneNumber, email, password]);

  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="max-w-screen-2xl h-screen mx-auto flex justify-between items-center">
        <div className="w-3/5">
          <Link to="/">
            <img className="w-[165px]" src={logo} alt="logo" />
          </Link>
          <div className="w-full h-auto flex items-center">
            <img
              className="w-[612px] h-[437px]"
              src={bannerBg}
              alt="bannerBg"
            />
          </div>
        </div>
        <div className="w-2/5 relative p-5 overflow-x-hidden">
          <div className="w-full flex items-center justify-center signUpFormOne">
            <form className="w-[516px] h-[630px] shadow-2xl flex flex-col items-center justify-center gap-10">
              <div>
                <h4 className="font-semibold text-xl">SignUp Form</h4>
              </div>
              <div className="w-[70%] flex flex-col items-center gap-6">
                {successMsgOne ? (
                  <p className="text-green-800 flex flex-col text-base font-semibold">
                    {successMsgOne}{" "}
                    <span className="w-full flex justify-center items-center gap-6">
                      .......
                      <ImSpinner9 className="text-lg mt-2 text-darkBlue animate-spin" />
                    </span>
                  </p>
                ) : (
                  <>
                    {errMsg && (
                      <p className="text-sm text-white font-semibold tracking-[1.5px] rounded-md bg-red-600 w-full text-center py-[2px] animate-bounce">
                        {errMsg}
                      </p>
                    )}
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                      type="text"
                      placeholder="Write First Name"
                    />

                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                      type="text"
                      placeholder="Write Last Name"
                    />
                    {/* {errLastName && (
                      <p className="text-sm text-white font-semibold tracking-[1.5px] rounded-md bg-red-600 w-full text-center -mt-4 py-[2px]">
                        {errLastName}
                      </p>
                    )} */}
                  </>
                )}
                <span className="mt-6 submitBtnOne">
                  <NextStepBtn title="Next Step" />
                </span>
                <p className="text-sm text-right w-full mt-6 text-[#7E7E7E]">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-[14px] text-darkBlue font-semibold uppercase ml-1 hover:cursor-pointer hover:text-blue-800 transition-hover duration-300 underline underline-offset-4">
                      Login Here!
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          {/* =====================================================================
                                SignUp Form Two start here
          ====================================================================== */}

          <div className="absolute top-5 left-0 translate-x-[140%] z-50 signUpFormTwo">
            <form className="w-[516px] h-[630px] bg-white shadow-2xl flex flex-col items-center justify-center gap-10">
              <div>
                <h4 className="font-semibold text-xl">SignUp Form</h4>
              </div>
              <div className="w-[70%] flex flex-col items-center gap-6">
                {successMsgTwo ? (
                  <p className="text-green-800 flex flex-col text-base font-semibold">
                    {successMsgTwo}{" "}
                    <span className="w-full flex justify-center items-center gap-6">
                      .......
                      <ImSpinner9 className="text-lg mt-2 text-darkBlue animate-spin" />
                    </span>
                  </p>
                ) : (
                  <>
                    {errMsg && (
                      <p className="text-sm text-white font-semibold tracking-[1.5px] rounded-md bg-red-600 w-full text-center py-[2px] animate-bounce">
                        {errMsg}
                      </p>
                    )}
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                      type="number"
                      placeholder="+0088      1xxxxxxxxx"
                    />

                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                      type="email"
                      placeholder="Write Email Address"
                    />
                  </>
                )}
                <div className="mt-6 w-full text-sm font-bold flex justify-between items-center text-[#767676] px-8">
                  <span className="hover:text-darkBlue hover:cursor-pointer transition-hover duration-300 backBtnOne">
                    Back
                  </span>
                  <span className="submtiBtnTwo font-normal">
                    <NextStepBtn title="Next Step" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          {/* =====================================================================
                                SignUp Form Two end here
          ====================================================================== */}
          {/* =====================================================================
                                SignUp Form Three start here
          ====================================================================== */}
          <div className="absolute top-5 left-0 translate-x-[140%] z-10 signUpFormThree">
            <form className="w-[516px] h-[630px] bg-white shadow-2xl flex flex-col items-center justify-center gap-10">
              {successMsgThree ? (
                <div className="flex flex-col px-10 gap-1">
                  <p className="text-base text-green-600">{successMsgThree}</p>
                  <p className="text-base text-black">
                    Name:{" "}
                    <span className="text-darkBlue font-semibold">
                      {firstName} {lastName}
                    </span>
                  </p>
                  <p className="text-base text-black">
                    Email:{" "}
                    <span className="text-darkBlue font-semibold">{email}</span>
                  </p>
                  <p className="text-base text-black">
                    Phone Number:{" "}
                    <span className="text-darkBlue font-semibold">
                      {phoneNumber}
                    </span>
                  </p>
                  <p className="text-sm tracking-wide text-gray-500">
                    Now Log In to view more.
                  </p>
                  <Link to="/login">
                    <button className="bg-darkBlue mt-6 font-semibold text-base text-white px-6 py-3 rounded-xl flex items-center justify-center gap-1 shadow-xl hover:bg-blue-800 hover:cursor-pointer transition-hover duration-300">
                      Log In
                    </button>
                  </Link>
                </div>
              ) : (
                <>
                  <div>
                    <h4 className="font-semibold text-xl">SignUp Form</h4>
                  </div>
                  <div className="w-[70%] flex flex-col items-center gap-6">
                    {errMsg && (
                      <p className="text-sm text-white font-semibold tracking-[1.5px] rounded-md bg-red-600 w-full text-center py-[2px] animate-bounce">
                        {errMsg}
                      </p>
                    )}
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full outline-none text-darkBlue font-semibold rounded-sm px-4 pt-5 placeholder:text-sm placeholder:font-normal bg-transparent border-b-[1px] border-b-[#A4A4A4] placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500"
                      type="password"
                      placeholder="Write Password"
                    />
                    <div className="mt-10 w-full text-sm font-bold flex justify-between items-center text-[#767676] px-8">
                      <span className="hover:text-darkBlue hover:cursor-pointer transition-hover duration-300 backBtnTwo backBtnTwo">
                        Back
                      </span>
                      <span className="submitSignUpBtn">
                        <button className="bg-darkBlue font-semibold text-base text-white px-6 py-3 rounded-xl flex items-center justify-center gap-1 shadow-xl hover:bg-blue-800 hover:cursor-pointer transition-hover duration-300">
                          Sign Up
                        </button>
                      </span>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
          {/* =====================================================================
                                SignUp Form Three end here
          ====================================================================== */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
