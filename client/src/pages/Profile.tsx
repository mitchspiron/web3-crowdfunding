import React from "react";
import { Banner, FundCard, Recent, StatCard } from "../components";

const Profile = () => {
  return (
    <div>
      <Banner title="My campaign" cta={false} />
      <StatCard />

      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Projets tendance</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-dark-600 rounded-lg hover:bg-dark-500 transition-colors duration-300">
              <i className="fas fa-filter mr-2 text-gray-300"></i>Filtrer
            </button>
            <button className="px-4 py-2 bg-white text-dark-900 rounded-lg hover:opacity-90 transition-opacity duration-300">
              <i className="fas fa-plus mr-2"></i>Nouveau projet
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FundCard />
          <FundCard />
          <FundCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
