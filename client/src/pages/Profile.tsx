import React, { useEffect, useState } from "react";
import { Banner, FundCard, StatCard } from "../components";
import { useStateContext } from "../context";
import { Link } from "react-router-dom";
import { Loader } from "../components";
import { SearchX } from "lucide-react";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
      <Banner title="My campaign" cta={false} />
      <StatCard />

      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            My Campaigns ({campaigns.length})
          </h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-dark-600 rounded-lg hover:bg-dark-500 transition-colors duration-300">
              <i className="fas fa-filter mr-2 text-gray-300"></i>Filtrer
            </button>
            <Link
              to="/create-campaign"
              className="px-4 py-2 bg-white text-dark-900 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              <i className="fas fa-plus mr-2"></i>New Campaign
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="flex justify-center items-center col-span-3 py-12">
              <Loader />
            </div>
          ) : campaigns.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center justify-center text-center text-white text-2xl font-bold space-y-4 py-12">
              <SearchX size={48} className="text-gray-400" />
              <p>No campaigns found</p>
            </div>
          ) : (
            campaigns.map((campaign: any, i: number) => (
              <FundCard key={i} campaign={campaign} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
