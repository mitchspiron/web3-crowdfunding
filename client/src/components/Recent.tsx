import React from "react";

const Recent = () => {
  return (
    <div className="glass-effect rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Activités récentes</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
          Voir tout
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex justify-center items-center">
            <i className="fas fa-check text-gray-300"></i>
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">
              Projet "EcoTech" financé avec succès
            </p>
            <p className="text-sm text-gray-400">Objectif atteint : 45 000 €</p>
          </div>
          <p className="text-sm text-gray-400">Il y a 2h</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex justify-center items-center">
            <i className="fas fa-user-plus text-gray-300"></i>
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">Nouveau contributeur</p>
            <p className="text-sm text-gray-400">
              Marie D. a rejoint la communauté
            </p>
          </div>
          <p className="text-sm text-gray-400">Il y a 4h</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex justify-center items-center">
            <i className="fas fa-rocket text-gray-300"></i>
          </div>
          <div className="flex-1">
            <p className="font-medium text-white">Nouveau projet lancé</p>
            <p className="text-sm text-gray-400">"ArtSpace" cherche 30 000 €</p>
          </div>
          <p className="text-sm text-gray-400">Il y a 6h</p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
