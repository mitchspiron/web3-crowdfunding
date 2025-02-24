import React from "react";

const CreateCampaign: React.FC = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Créer une Campagne</h1>
        <div className="bg-white text-dark-800 text-center py-4 rounded-lg">
          <h2 className="text-2xl font-bold">Start a campaign</h2>
        </div>

        <div className="glass-effect rounded-lg p-6 shadow-md">
          <form className="space-y-6">
            {/* Ligne 1 : Votre nom et Titre de la campagne */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Votre nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                  placeholder="Ex: John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Titre de la campagne
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                  placeholder="Ex: Projet Innovant 1"
                  required
                />
              </div>
            </div>

            {/* Description de la campagne */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Description</label>
              <textarea
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                rows={5}
                placeholder="Décrivez votre projet en détail..."
                required
              />
            </div>

            <div className="bg-gradient-to-r from-white to-gray-300 text-dark-800 text-center py-4 rounded-lg shadow-lg">
              <h3 className="font-bold">
                You will get 100% of the raised amount
              </h3>
            </div>

            {/* Ligne 2 : Objectif financier et Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Objectif financier (€)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                  placeholder="Ex: 50000"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Deadline</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
            </div>

            {/* Image de couverture */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Image de couverture (URL)
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full border border-gray-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-100 hover:text-dark-800 transition-colors duration-200"
            >
              Créer la Campagne
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
