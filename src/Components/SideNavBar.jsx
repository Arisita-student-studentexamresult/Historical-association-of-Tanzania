import React from "react";
import { NavLink } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import logo from "../Assets/Images/Logo3.png";
// icons
import { ImHome } from "react-icons/im";
import { FaImages } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";

const SideNavBar = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
          open ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between p-4">
          <div>
            <img
              src={logo}
              alt="Historical association of Tanzania Logo"
              title="HAT Logo"
              className="h-7 xl:h-9 md:h-7"
            />
          </div>
          <TfiClose
            onClick={closeMenu}
            className="text-2xl ring-2 rounded-full ring-[#a56322] cursor-pointer text-[#a56322]"
          />
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <ImHome className="" />
            Home
          </NavLink>
          <NavLink
            to="/AboutUs/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <BsFillInfoCircleFill />
            About Us
          </NavLink>
          <NavLink
            to="/Research/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <FaNewspaper />
            Research
          </NavLink>
          <NavLink
            to="/Announcements/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <HiSpeakerphone />
            Announcements
          </NavLink>
          <NavLink
            to="/Gallery/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#b67a3d] flex flex-row items-center w-full gap-x-2 font-medium text-white px-7 py-2 "
                : "text-gray-700 flex flex-row items-center w-full gap-x-2 hover:text-[#b67a3d] px-7 py-2 bg-slate-200"
            }
            onClick={closeMenu}
          >
            <FaImages />
            Gallery
          </NavLink>
        </nav>
        <div className="grow"></div>
      </div>
    </div>
  );
};

export default SideNavBar;
