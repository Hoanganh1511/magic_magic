import { TrendingProvider } from "@/context/nft/TrendingContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <TrendingProvider>{children}</TrendingProvider>;
};

export default Layout;
