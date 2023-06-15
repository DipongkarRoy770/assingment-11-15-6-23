import React from "react";
import error from "../../assets/images/error.svg";

const Error = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div>
        <img src={error} alt="error" className="w-1/4 mx-auto" />
      </div>
      <div className="text-center bg-danger w-25 p-5 rounded-2">
        <h2 className="text-3xl font-serif">404</h2>
        <h4 className="text-2xl font-thin text-blue-400">Sorry. Page not found !</h4>
      </div>
    </div>
  );
};

export default Error;
