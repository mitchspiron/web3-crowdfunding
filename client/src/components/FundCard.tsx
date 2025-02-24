import React from "react";

const FundCard = () => {
  return (
    <div className="glass-effect rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src="https://picsum.photos/401/200"
        alt="Project 1"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-6">
       {/*  <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm">
            Technologie
          </span>
          <button className="text-gray-400 hover:text-white">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div> */}
        <h3 className="text-xl font-semibold text-white mb-2">
          Projet Innovant 1
        </h3>
        <p className="text-gray-400 mb-4 text-sm">
          Une description détaillée du projet avec ses objectifs et sa vision...
        </p>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progression</span>
            <span className="text-gray-400">70%</span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400">Objectif</p>
            <p className="font-semibold text-white">50 000 €</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Temps restant</p>
            <p className="font-semibold text-white">15 jours</p>
          </div>
        </div>
        <button className="w-full px-4 py-2 border border-gray-500 text-gray-40 rounded-lg hover:opacity-90 transition-opacity duration-300">
          Soutenir le projet
        </button>
      </div>
    </div>
  );
};

export default FundCard;
