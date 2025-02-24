import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 glass-effect z-30">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 text-white">CrowdFund</h1>
        <nav className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Menu Principal
            </p>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-300"
            >
              <i className="fas fa-home text-gray-300"></i>
              <span className="text-gray-300">Tableau de bord</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-compass text-gray-300"></i>
              <span className="text-gray-300">Découvrir</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-heart text-gray-300"></i>
              <span className="text-gray-300">Favoris</span>
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Catégories
            </p>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-laptop-code text-gray-300"></i>
              <span className="text-gray-300">Technologie</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-palette text-gray-300"></i>
              <span className="text-gray-300">Art & Culture</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-leaf text-gray-300"></i>
              <span className="text-gray-300">Environnement</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-gamepad text-gray-300"></i>
              <span className="text-gray-300">Jeux vidéo</span>
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase text-gray-400 font-semibold">
              Personnel
            </p>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-user text-gray-300"></i>
              <span className="text-gray-300">Profil</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 hover:bg-dark-600 rounded-lg transition-colors duration-300"
            >
              <i className="fas fa-cog text-gray-300"></i>
              <span className="text-gray-300">Paramètres</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
