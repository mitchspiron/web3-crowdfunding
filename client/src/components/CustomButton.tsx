import React, { useEffect } from "react";
import { useStateContext } from "../context";

interface ButtonProps {
  btnType: "button" | "submit" | "reset";
  title: string;
  handleClick?: () => void;
  styles?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  btnType = "button",
  title,
  handleClick,
  styles = "",
}) => {
  const { address } = useStateContext();
 /*  useEffect(() => {
    if (address) {
      console.log("ADD", address);
    }
  }, [address]); */
  return (
    <button
      type={btnType}
      onClick={handleClick}
      className={`h-10 px-5 rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 flex items-center space-x-2 ${styles}`}
    >
      {/* <i className={address ? "fas fa-plus" : "fas fa-user-circle"}></i> */}
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
