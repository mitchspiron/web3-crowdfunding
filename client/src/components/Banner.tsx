import React from "react";
import { banner } from "../assets/img";

interface BannerProps {
  title: string;
  description?: string;
  cta: boolean;
}

const Banner: React.FC<BannerProps> = ({ title, description, cta }) => (
  <div className="relative rounded-xl overflow-hidden h-[200px] mb-5 shadow-2xl">
    <img
      src={banner}
      alt="Fund Others Banner"
      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-55"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-8xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          <h2 className="text-3xl text-white mb-8 drop-shadow-lg">
            {description}
          </h2>
        </div>
        {cta && (
          <button className="px-10 py-4 bg-dark-800 text-dark-primary rounded-xl text-xl font-semibold hover:bg-gray-100 hover:text-dark-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Fundraising
          </button>
        )}
      </div>
    </div>
  </div>
);

export default Banner;
