import { LiveFeedProvider } from "@/context/nft/LiveFeedContext";
import { MintProvider } from "@/context/nft/MintContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MintProvider>
      <LiveFeedProvider>{children}</LiveFeedProvider>
    </MintProvider>
  );
};

export default Layout;
