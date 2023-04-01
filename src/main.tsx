import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Layout } from "./components/Layout";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter } from "react-router-dom";

console.log(import.meta.env.NEXT_PUBLIC_INFURA_ID);

const { chains, provider } = configureChains(
  [polygon],
  [
    infuraProvider({ apiKey: import.meta.env.VITE_PUBLIC_INFURA_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);
