"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { useTrending } from "@/context/nft/TrendingContext";
import { Filter, Grid2x2, Plus, Rocket, Rows, Search } from "lucide-react";
import { useState } from "react";

export default function TrendingHeader() {
  const {
    isSidebarOpen,
    setSidebarOpen,
    layout,
    setLayout,
    resetFilters,
    isDefault,
  } = useTrending();
  const [range, setRange] = useState("1h");

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      <Button
        aria-label="Toggle filter"
        onClick={() => setSidebarOpen((s) => !s)}
        className={`gap-2 px-4 rounded-md bg-button-dimmed data-[state=on]:bg-button-dimmed-active
          ${isSidebarOpen ? "bg-button-dimmed-active" : ""}
          `}
      >
        <Filter className="h-4 w-4" /> Filter
      </Button>
      {!isDefault && (
        <Button
          variant="outline"
          onClick={resetFilters}
          className="gap-2 border-none bg-button-dimmed"
        >
          Clear Filters
        </Button>
      )}

      <div className=" flex items-center gap-x-[1px]">
        <Toggle
          pressed={layout === "grid"}
          onPressedChange={() => setLayout("grid")}
          aria-label="Grid layout"
          className="rounded-l-md px-4 bg-white/5 data-[state=on]:bg-button-dimmed-active"
        >
          <Grid2x2 className="h-6 w-6" />
        </Toggle>
        <Toggle
          pressed={layout === "list"}
          onPressedChange={() => setLayout("list")}
          aria-label="List layout"
          className="rounded-r-md px-4 bg-white/5 data-[state=on]:bg-button-dimmed-active"
        >
          <Rows className="h-6 w-6" />
        </Toggle>
      </div>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        <Input
          placeholder="Search collection"
          className="pl-9 rounded-md bg-transparent border-[1px] border-primary-border font-medium text-white/90 placeholder:text-white/30"
        />
      </div>

      <Toggle
        aria-label="Toggle filter"
        onPressedChange={() => {}}
        className="gap-2 rounded-md bg-button-dimmed data-[state=on]:bg-button-dimmed-active"
      >
        <Rocket className="h-5 w-5" />
      </Toggle>

      <div className="hidden md:flex items-center gap-[1px] rounded-md overflow-hidden">
        {["10m", "1h", "6h", "24h"].map((t, i, arr) => {
          const isFirst = i === 0;
          const isLast = i === arr.length - 1;

          return (
            <Toggle
              key={t}
              pressed={range === t}
              onPressedChange={() => setRange(t)}
              aria-label={`Time range ${t}`}
              className={`
                px-4 py-2 bg-white/5 data-[state=on]:bg-button-dimmed-active
                ${isFirst ? "rounded-l-md" : "rounded-none"}
                ${isLast ? "rounded-r-md" : "rounded-none"}
              `}
            >
              {t}
            </Toggle>
          );
        })}
      </div>

      {/* <Button className="rounded-xl gap-2">
          <Plus className="h-4 w-4" /> Create NFT Drop
        </Button> */}
    </div>
  );
}
