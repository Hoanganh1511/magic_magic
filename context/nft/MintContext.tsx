"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// --- types ---
type TimeRange = "10m" | "1h" | "6h" | "24h";
type LayoutType = "grid" | "list";

interface MintContextType {
  // Top bar
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;

  layout: LayoutType;
  setLayout: Dispatch<SetStateAction<LayoutType>>;

  timeRange: TimeRange;
  setTimeRange: Dispatch<SetStateAction<TimeRange>>;

  isSidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;

  // Sidebar filters
  quality: string | null;
  setQuality: Dispatch<SetStateAction<string | null>>;

  mintStyle: string | null;
  setMintStyle: Dispatch<SetStateAction<string | null>>;

  mintStatus: "live" | "ended" | null;
  setMintStatus: Dispatch<SetStateAction<"live" | "ended" | null>>;

  priceRange: [number, number] | null;
  setPriceRange: Dispatch<SetStateAction<[number, number] | null>>;

  mintVolume: number | null;
  setMintVolume: Dispatch<SetStateAction<number | null>>;

  mintCount: number | null;
  setMintCount: Dispatch<SetStateAction<number | null>>;

  percentMinted: number | null;
  setPercentMinted: Dispatch<SetStateAction<number | null>>;

  platform: string | null;
  setPlatform: Dispatch<SetStateAction<string | null>>;

  resetFilters: () => void;

  isDefault: () => boolean;
}
const defaultValues = {
  searchQuery: "",
  layout: "grid" as LayoutType,
  timeRange: "24h" as TimeRange,
  isSidebarOpen: false,
  quality: null as string | null,
  mintStyle: null as string | null,
  mintStatus: null as "live" | "ended" | null,
  priceRange: null as [number, number] | null,
  mintVolume: null as number | null,
  mintCount: null as number | null,
  percentMinted: null as number | null,
  platform: null as string | null,
};
// --- context ---
const MintContext = createContext<MintContextType | undefined>(undefined);

export function MintProvider({ children }: { children: React.ReactNode }) {
  // top bar
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState<LayoutType>("grid");
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // sidebar
  const [quality, setQuality] = useState<string | null>(null);
  const [mintStyle, setMintStyle] = useState<string | null>(null);
  const [mintStatus, setMintStatus] = useState<"live" | "ended" | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [mintVolume, setMintVolume] = useState<number | null>(null);
  const [mintCount, setMintCount] = useState<number | null>(null);
  const [percentMinted, setPercentMinted] = useState<number | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  const resetFilters = () => {
    setSearchQuery("");
    setLayout("grid");
    setTimeRange("24h");
    setQuality(null);
    setMintStyle(null);
    setMintStatus(null);
    setPriceRange(null);
    setMintVolume(null);
    setMintCount(null);
    setPercentMinted(null);
    setPlatform(null);
  };
  const isDefault = () =>
    searchQuery === defaultValues.searchQuery &&
    layout === defaultValues.layout &&
    timeRange === defaultValues.timeRange &&
    quality === defaultValues.quality &&
    mintStyle === defaultValues.mintStyle &&
    mintStatus === defaultValues.mintStatus &&
    priceRange === defaultValues.priceRange &&
    mintVolume === defaultValues.mintVolume &&
    mintCount === defaultValues.mintCount &&
    percentMinted === defaultValues.percentMinted &&
    platform === defaultValues.platform;
  return (
    <MintContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        layout,
        setLayout,
        timeRange,
        setTimeRange,
        isSidebarOpen,
        setSidebarOpen,
        quality,
        setQuality,
        mintStyle,
        setMintStyle,
        mintStatus,
        setMintStatus,
        priceRange,
        setPriceRange,
        mintVolume,
        setMintVolume,
        mintCount,
        setMintCount,
        percentMinted,
        setPercentMinted,
        platform,
        setPlatform,
        resetFilters,
        isDefault,
      }}
    >
      {children}
    </MintContext.Provider>
  );
}

// --- hook ---
export function useMint() {
  const ctx = useContext(MintContext);
  if (!ctx) throw new Error("useMint must be used inside MintProvider");
  return ctx;
}
