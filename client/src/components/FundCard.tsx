import React from "react";
import { Campaign } from "../constants";
import { calculateBarPercentage, daysLeft } from "../utils";
import { useNavigate } from "react-router-dom";
import { shortenAddress } from "@thirdweb-dev/react";

const FundCard = ({ campaign }: { campaign: Campaign }) => {
  const navigate = useNavigate();
  return (
    <div className="glass-effect rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={campaign.image}
        alt={campaign.title}
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
          {campaign.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm line-clamp-1">
          {campaign.description}
        </p>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progression</span>
            <span className="text-gray-400">
              {calculateBarPercentage(
                Number(campaign.target),
                Number(campaign.amountCollected)
              )}
            </span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full"
              style={{
                width: `${calculateBarPercentage(
                  Number(campaign.target),
                  Number(campaign.amountCollected)
                )}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400">Target</p>
            <p className="font-semibold text-white">{campaign.target} ETH</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Days Left</p>
            <p className="font-semibold text-white">
              {daysLeft(campaign.deadline)} days
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() =>
            navigate(`/campaign-details/${campaign.pId}`, { state: campaign })
          }
          className="w-full px-4 py-2 border border-gray-500 text-gray-40 rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Fund this project
        </button>
        <div className="flex items-center mt-4">
          <img
            src={campaign.image}
            alt={campaign.owner}
            className="w-10 h-10 rounded-full mr-3"
          />
          <p className="text-gray-400 text-sm">
            by{" "}
            <span className="text-white font-semibold">{shortenAddress(campaign.owner)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
