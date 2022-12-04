import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { tableData } from "../../Constants";

const StaffInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div>
        <Link to="/">
          <img className="w-[165px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <div className="w-full flex items-center justify-center">
          <h1 className="text-[36px] font-semibold bg-darkBlue text-white w-[480px] h-[72px] flex items-center justify-center rounded-lg">
            Attendance information
          </h1>
        </div>
        <div className="w-full mt-6">
          <table className="w-full text-center flex flex-col justify-between">
            <thead>
              <tr className="w-full flex justify-between px-6">
                <th className="text-lg font-semibold underline underline-offset-4 text-left">
                  Date
                </th>
                <th className="text-lg font-semibold underline underline-offset-4">
                  Employee Name
                </th>
                <th className="text-lg font-semibold underline underline-offset-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="flex flex-col">
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="w-full flex justify-between mt-4 px-6 hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-hover duration-300 rounded-lg bg-extraLightBlue bg-opacity-10 py-2 group"
                >
                  <td className="text-base font-normal text-left">
                    {item.dateInfo}
                  </td>
                  <td className="text-base font-normal">{item.name}</td>
                  <td
                    className={`${
                      item.status === "Absent"
                        ? "text-red-600 group-hover:text-red-200"
                        : "text-black group-hover:text-white"
                    } `}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <ul className="w-full flex mb-3 justify-between gap-2 font-semibold text-lg px-6">
            <li className="w-1/3 bg-green-400">Date</li>
            <li className="w-1/3 bg-green-400">Employee Name</li>
            <li className="w-1/3  bg-green-400">Status</li>
          </ul>
          <ul className="w-full flex flex-col gap-2 items-center text-left font-normal text-base">
            <li className="w-full flex justify-between text-left gap-2 hover:bg-extraLightBlue text-black px-6">
              <span className="w-1/3 text-left">11/7/16</span>
              <span className="w-1/3 text-center">Arlene McCoy</span>
              <span className="w-1/3 text-right">Present</span>
            </li>
            <li className="w-full flex justify-between text-left gap-2 hover:bg-extraLightBlue text-black px-6">
              <span className="w-1/3 text-left">2/11/12</span>
              <span className="w-1/3 text-center">Eleanor Pena</span>
              <span className="w-1/3 text-right">Absent</span>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default StaffInfo;
