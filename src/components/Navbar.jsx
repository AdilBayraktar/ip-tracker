import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center px-10 h-16 items-center bg-white top-0 text-[#27c412] shadow-md sticky z-50">
      <Link to={"/"} className="cursor-pointer">
        <p className="text-3xl font-bold uppercase flex justify-center items-center">
          <img src="/ip-tracker-app.png" className="w-[40px]" alt="" /> IP
          Tracker
        </p>
      </Link>
    </div>
  );
};

export default Navbar;
