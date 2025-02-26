import React from "react";
import Loader from "./Loader";

interface CustomLoaderProps {
  message: string;
}

const CustomLoader: React.FC<CustomLoaderProps> = ({ message }) => {
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen bg-black bg-opacity-80 flex justify-center items-center">
      <div className="p-5 rounded-lg shadow-lg flex flex-col items-center">
        <Loader />
        <div className="mt-3 text-xl font-bold text-center">{message}</div>
        <p className="mt-2 text-sm">Please wait ...</p>
      </div>
    </div>
  );
};

export default CustomLoader;
