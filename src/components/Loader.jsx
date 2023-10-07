import React from "react";
import { MutatingDots, RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      {/* <RotatingLines
                strokeColor="green"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            /> */}
      <MutatingDots
        height="100"
        width="96"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
