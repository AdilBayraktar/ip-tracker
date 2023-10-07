import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{ fontFamily: "sans-serif", direction: "ltr" }}
      className="bottom-0 w-full bg-white shadow-2xl  p-4 flex text-green-800 items-center justify-center"
    >
      Created With <AiFillHeart className="mx-1 text-red-600 text-2xl" /> By{" "}
      <Link
        to="https://rokispace.com/"
        className="mx-1 underline"
        target="_blank"
      >
        ROKISPACE
      </Link>
    </div>
  );
};

export default Footer;
