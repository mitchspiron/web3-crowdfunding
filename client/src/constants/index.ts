import { createCampaign, dashboard, logout, profile } from "../assets/img";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "",
  },
];

export interface Campaign {
  owner: string;
  title: string;
  description: string;
  target: string;
  deadline: Date;
  amountCollected: string;
  image: string;
  pId: number;
}
