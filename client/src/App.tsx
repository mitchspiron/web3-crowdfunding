import React from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { Navbar, Sidebar } from "./components";

export const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
