import React from "react";

const Container = ({ children }) => {
  return <div className="md:p-10 sm:p-5 my-5 min-h-[100vh]">{children}</div>;
};

export default Container;
