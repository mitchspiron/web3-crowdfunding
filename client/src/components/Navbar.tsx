import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  return (
    <nav className="h-16 glass-effect flex items-center justify-between px-6">
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-300"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="h-10 px-4 flex items-center justify-center hover:bg-dark-600 rounded-lg transition-colors duration-300">
          <i className="fas fa-bell text-gray-300"></i>
        </button>

        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? "bg-dark-600 text-dark-900" : "bg-dark-600 text-white"}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else connect();
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
