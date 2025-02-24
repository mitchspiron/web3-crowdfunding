import React from "react";

const StatCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Projets financés</p>
            <h3 className="text-2xl font-bold text-white">1,234</h3>
          </div>
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
            <i className="fas fa-rocket text-gray-300"></i>
          </div>
        </div>
        <p className="text-green-400 text-sm mt-2">+12.5% ce mois</p>
      </div>

      <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Montant total</p>
            <h3 className="text-2xl font-bold text-white">2.5M €</h3>
          </div>
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
            <i className="fas fa-euro-sign text-gray-300"></i>
          </div>
        </div>
        <p className="text-green-400 text-sm mt-2">+8.2% ce mois</p>
      </div>

      <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Contributeurs</p>
            <h3 className="text-2xl font-bold text-white">15,679</h3>
          </div>
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
            <i className="fas fa-users text-gray-300"></i>
          </div>
        </div>
        <p className="text-green-400 text-sm mt-2">+18.3% ce mois</p>
      </div>

      <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Projets actifs</p>
            <h3 className="text-2xl font-bold text-white">456</h3>
          </div>
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
            <i className="fas fa-chart-line text-gray-300"></i>
          </div>
        </div>
        <p className="text-green-400 text-sm mt-2">+5.7% ce mois</p>
      </div>
    </div>
  );
};

export default StatCard;
