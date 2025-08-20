"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type SwapView = "swap" | "history"; // có thể mở rộng sau này
type SelectMode = "pay" | "receive" | null;

interface SwapContextType {
  view: SwapView;
  setView: Dispatch<SetStateAction<SwapView>>;
  selectMode: SelectMode;
  setSelectMode: Dispatch<SetStateAction<SelectMode>>;
}

const SwapContext = createContext<SwapContextType | undefined>(undefined);

export function SwapProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<SwapView>("swap");
  const [selectMode, setSelectMode] = useState<SelectMode>(null);

  return (
    <SwapContext.Provider value={{ view, setView, selectMode, setSelectMode }}>
      {children}
    </SwapContext.Provider>
  );
}

export function useSwap() {
  const ctx = useContext(SwapContext);
  if (!ctx) {
    throw new Error("useSwap must be used inside SwapProvider");
  }
  return ctx;
}
