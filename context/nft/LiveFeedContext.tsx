"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Kiểu dữ liệu cho state
type FilterType = "All" | "Free" | "Paid";

interface LiveFeedContextType {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  isMuted: boolean;
  setIsMuted: Dispatch<SetStateAction<boolean>>;
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
}

// Tạo context
const LiveFeedContext = createContext<LiveFeedContextType | undefined>(
  undefined
);

// Provider
export function LiveFeedProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>("All");

  return (
    <LiveFeedContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        filter,
        setFilter,
      }}
    >
      {children}
    </LiveFeedContext.Provider>
  );
}

// Hook để gọi
export function useLiveFeed() {
  const ctx = useContext(LiveFeedContext);
  if (!ctx) throw new Error("useLiveFeed must be used inside LiveFeedProvider");
  return ctx;
}
