import React from "react";

interface StatCardProps {
  label: string;
  value: string;
}

interface Campaign {
  title: string;
  collected: number;
  goal: number;
  daysLeft: number;
  category: string;
  description: string;
  progress: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <div className="glass-effect p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
      <div className="bg-white/5 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
        <i className="fas fa-rocket text-gray-300"></i>
      </div>
    </div>

    <p className="text-green-400 text-sm mt-2">+12.5% ce mois</p>
  </div>
);

const CampaignDetails: React.FC = () => {
  const campaignData: Campaign = {
    title: "Projet Innovant 1",
    collected: 35000,
    goal: 50000,
    daysLeft: 15,
    category: "Technologie",
    description:
      "Ce projet vise à révolutionner l'industrie technologique en développant une solution innovante pour les énergies renouvelables. Avec votre soutien, nous pourrons financer la recherche et le développement nécessaires pour rendre cette vision réalité. Chaque don, aussi petit soit-il, nous rapproche de notre objectif de 50 000 €. Merci de croire en notre projet et de faire partie de cette aventure !",
    progress: 70,
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9 relative h-[400px] w-full rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/401/200"
              alt="Campaign Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <div className="lg:col-span-3 flex flex-col space-y-3">
            <StatCard
              label="Collecté"
              value={`${campaignData.collected.toLocaleString()} €`}
            />
            <StatCard
              label="Objectif"
              value={`${campaignData.goal.toLocaleString()} €`}
            />
            <StatCard
              label="Jours Restants"
              value={`${campaignData.daysLeft} jours`}
            />
            <StatCard label="Catégorie" value={campaignData.category} />
          </div>
        </div>

        <div className="glass-effect rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-6">
            {campaignData.title}
          </h1>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">
                {campaignData.collected.toLocaleString()} € collectés
              </span>
              <span className="text-gray-400">
                Objectif: {campaignData.goal.toLocaleString()} €
              </span>
            </div>
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${campaignData.progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">La Petite Histoire</h2>
            <p className="text-gray-300 leading-relaxed">
              {campaignData.description}
            </p>
          </div>

          <div className="lg:col-span-4 glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Faire un Don</h2>
            <form
              className="space-y-6"
              onSubmit={(e: React.FormEvent) => e.preventDefault()}
            >
              <div className="space-y-2">
                <label className="block text-sm text-gray-400">
                  Montant du don (€)
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                  placeholder="50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full border border-gray-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-100 hover:text-dark-800 transition-colors duration-200"
              >
                Faire un Don
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
