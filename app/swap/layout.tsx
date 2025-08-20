import { SwapProvider } from "@/context/nft/SwapContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <SwapProvider>{children}</SwapProvider>;
};

export default Layout;
