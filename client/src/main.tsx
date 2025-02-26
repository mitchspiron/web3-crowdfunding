import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const sepolia = {
  chainId: 11155111,
  rpc: [
    `https://11155111.rpc.thirdweb.com/${
      import.meta.env.VITE_TEMPLATE_CLIENT_ID
    }`,
  ],
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  shortName: "sepolia",
  slug: "sepolia",
  testnet: true,
  chain: "Ethereum",
  name: "Sepolia Testnet",
};

const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={sepolia} clientId={clientId}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
