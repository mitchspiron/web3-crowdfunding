import React from "react";
import { Route, Routes } from "react-router-dom";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { Navbar, Sidebar } from "./components";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark-900 text-gray-900 dark:text-white">
      <Sidebar />
      <main className="ml-64">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
};
