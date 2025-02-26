import React, { useContext, createContext, ReactNode } from "react";
import {
  useAddress,
  useMetamask,
  useContractWrite,
  useContract,
  SmartContract,
} from "@thirdweb-dev/react";
import { BaseContract, ethers } from "ethers";
import { BaseContractForAddress } from "@thirdweb-dev/sdk";

interface CampaignForm {
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

type ContractType =
  | SmartContract<BaseContract | any>
  | SmartContract<BaseContractForAddress<never>>
  | undefined;

interface StateContextType {
  address: string | undefined;
  contract: ContractType;
  connect?: any;
  createCampaign: (form: CampaignForm) => Promise<void>;
  getCampaigns: () => Promise<any>;
  getUserCampaigns: () => Promise<any>;
  donate: (pId: number, amount: string) => Promise<any>;
  getDonations?: (pId: number) => Promise<any>;
}

const StateContext = createContext<StateContextType>({
  address: "",
  contract: undefined,
  createCampaign: async () => {},
  getCampaigns: async () => {},
  getUserCampaigns: async () => {},
  donate: async () => {},
  getDonations: async () => {},
});

interface StateContextProviderProps {
  children: ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({
  children,
}) => {
  const { contract } = useContract(import.meta.env.VITE_CONTRACT_ADDRESS);

  const { mutateAsync: createCampaignAsync } = useContractWrite(
    contract as any,
    "createCampaigna"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form: CampaignForm): Promise<void> => {
    try {
      const data = await createCampaignAsync({
        args: [
          address,
          form.title,
          form.description,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });
      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaigns = async () => {
    try {
      if (!contract) {
        console.error("Contract not loaded");
        return;
      }

      const campaigns = await (contract as SmartContract).call("getCampaingns");

      const parsedCampaigns = campaigns.map((campaign: any, i: number) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        image: campaign.image,
        pId: i,
      }));

      console.log("Parsed Campaigns:", parsedCampaigns);
      return parsedCampaigns;
    } catch (error) {
      console.error("Failed to fetch campaigns:", error);
    }
  };

  const getUserCampaigns = async () => {
    try {
      const allCampaigns = await getCampaigns();
      const userCampaigns = allCampaigns.filter(
        (campaign: any) => campaign.owner === address
      );
      return userCampaigns;
    } catch (error) {
      console.error("Failed to fetch user campaigns:", error);
    }
  };

  const donate = async (pId: number, amount: string) => {
    try {
      const data = await (contract as SmartContract).call(
        "donateToCampaign",
        [pId],
        { value: ethers.utils.parseEther(amount) }
      );

      return data;
    } catch (error) {
      console.error("Failed to donate:", error);
    }
  };

  const getDonations = async (pId: number) => {
    try {
      const donations = await (contract as SmartContract).call("getDonators", [
        pId,
      ]);
      const numberOfDonations = donations[0].length;
      const parsedDonations = [];
      for (let i = 0; i < numberOfDonations; i++) {
        parsedDonations.push({
          donator: donations[0][i],
          donation: ethers.utils.formatEther(donations[1][i].toString()),
        });
      }
      //console.log("Donations:", donations);
      return parsedDonations;
    } catch (error) {
      console.error("Failed to fetch donations:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => useContext(StateContext);
