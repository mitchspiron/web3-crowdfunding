import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStateContext } from "../context";
import { Campaign } from "../constants";
import { calculateBarPercentage, daysLeft, shortenAddress } from "../utils";
import { CustomLoader, Loader } from "../components";

interface StatCardProps {
  label: string;
  value: string;
}

interface Donator {
  donator: string;
  donation: number;
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

const CampaignDetails: React.FC<Campaign> = () => {
  const { state } = useLocation();
  const { address, contract, getDonations, donate } = useStateContext();
  const [isLoading, setIsLoading] = useState(true);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState<Donator[]>([]);
  const remainingDays = daysLeft(state.deadline);
  const progress = calculateBarPercentage(state.target, state.amountCollected);
  const isOwner =
    address &&
    state.owner &&
    address.toLowerCase() === state.owner.toLowerCase();

  const fetchDonators = async () => {
    if (!getDonations) {
      console.error("getDonations is not defined");
      setIsLoading(false);
      return;
    }
    try {
      const data = await getDonations(state.pId);
      setDonators(data);
      console.log("DONATOR", data);
    } catch (error) {
      console.log("Error fetching donators:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address, getDonations, state.pId]);

  const handleDonate = async (e: any) => {
    if (!amount) return;
    e.preventDefault();
    setTransactionLoading(true);
    await donate(state.pId, amount);
    setAmount("");
    setTransactionLoading(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen text-white">
      {transactionLoading && <CustomLoader message="Transaction in progress" />}
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9 relative h-[400px] w-full rounded-2xl overflow-hidden">
              <img
                src={state.image}
                alt={state.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {state.owner.substring(0, 2)}
                  </span>
                </div>
                <span className="text-white text-sm font-medium">
                  Created by {shortenAddress(state.owner)}
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col space-y-3">
              <StatCard
                label="Goal"
                value={`${state.target.toLocaleString()} ETH`}
              />
              <StatCard
                label="Collected"
                value={`${state.amountCollected.toLocaleString()} ETH`}
              />
              <StatCard label="Days Left" value={`${remainingDays} days`} />
            </div>
          </div>

          <div className="bg-zinc-900 p-4 rounded-lg">
            <h2 className="text-white text-lg font-bold mb-4">Creator</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {state.owner.substring(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-medium">{state.owner}</p>
                    {isOwner && (
                      <span className="ml-2 px-2 py-0.5 bg-purple-500/30 text-purple-300 text-xs rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm flex items-center">
                    <i className="fas fa-shield-alt text-xs mr-1"></i> Verified
                    creator
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-6">
            <h1 className="text-2xl font-bold text-white mb-6 uppercase">
              {state.title}
            </h1>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  {state.amountCollected.toLocaleString()} ETH collected
                </span>
                <span className="text-gray-400">
                  Target: {state.target.toLocaleString()} ETH
                </span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 glass-effect rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Campaign description
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {state.description}
              </p>
            </div>

            <div className="lg:col-span-4 glass-effect rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                Pledge without reward
              </h2>
              <form
                className="space-y-6"
                onSubmit={handleDonate}
                autoComplete="off"
              >
                <div className="space-y-2">
                  <input
                    type="number"
                    step={0.0001}
                    min={0}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                    placeholder="0.0001 ETH"
                    required
                  />
                </div>
                <div className="bg-dark-900 text-start p-4 rounded-lg">
                  <p className="text-md font-bold">
                    Back it because you believe in it.
                  </p>
                  <p className="text-gray-300 text-sm">
                    Support the project for non reward, just because it speaks
                    to you.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full border border-gray-400 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-100 hover:text-dark-800 transition-colors duration-200"
                >
                  Fund now
                </button>
              </form>
            </div>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-users text-gray-300 mr-2"></i>
              <span>Donators & Contributions</span>
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({donators.length})
              </span>
            </h2>

            <div className="space-y-6">
              {donators.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {donators.map((item, index) => (
                    <div
                      key={`${item.donator}-${index}`}
                      className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {item.donator.substring(0, 2)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-gray-300 text-sm font-mono truncate"
                            title={item.donator}
                          >
                            {item.donator.substring(0, 6)}...
                            {item.donator.substring(item.donator.length - 4)}
                          </p>
                          <p className="text-white font-semibold mt-1">
                            {item.donation} ETH
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-zinc-900/50 rounded-lg p-8 border border-zinc-800 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <i className="fas fa-hand-holding-usd text-2xl text-gray-500"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    No donors yet
                  </h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto">
                    Be the first to support this campaign and help it reach its
                    goal!
                  </p>
                </div>
              )}

              <div className="flex justify-center">
                {donators.length > 2 && (
                  <button className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <span>View all donations</span>
                    <i className="fas fa-chevron-right text-xs ml-1"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;
