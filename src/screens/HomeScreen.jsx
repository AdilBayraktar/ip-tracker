import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import AnimatedLayout from "../Layouts/AnimatedLayout";

const HomeScreen = () => {
  const [ip, setIP] = useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="text-center">
      {ip ? (
        <AnimatedLayout>
          <p className="text-2xl text-gray-500">Your IP Address</p>
          <div className="shadow-xl md:w-fit sm:w-full flex bg-white justify-center items-center md:mx-auto my-10 py-5 px-20 rounded-3xl">
            <p className="text-green-800 font-medium md:text-6xl sm:text-4xl my-5">
              {ip}
            </p>
          </div>
          <Link
            to={`/details/${ip}`}
            className="bg-green-500 shadow-lg text-white text-lg font-semibold px-4 py-2 transition rounded-md hover:bg-green-400"
          >
            Click to get more Info
          </Link>
        </AnimatedLayout>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default HomeScreen;
