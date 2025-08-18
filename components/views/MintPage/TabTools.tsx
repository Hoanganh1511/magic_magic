import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLiveFeed } from "@/context/nft/LiveFeedContext";
import { Pause, Play } from "lucide-react";
import React from "react";
import { GoMute, GoUnmute } from "react-icons/go";
const filters = ["All", "Free", "Paid"] as const;
const TabTools = () => {
  const { isPlaying, setIsPlaying, isMuted, setIsMuted, filter, setFilter } =
    useLiveFeed();
  return (
    <div className="flex items-center">
      <div className="ml-auto flex items-center gap-[10px] rounded-md ">
        <div className="flex items-center gap-2 rounded-xl ">
          <div className="mx-2 flex items-center gap-2">
            <span className="relative inline-flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-500">Live</span>
          </div>
          <Separator orientation="vertical" className="h-6" />
        </div>
        <Button
          size="sm"
          className="rounded-md bg-button-dimmed"
          onClick={() => setIsPlaying((p: boolean) => !p)}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>
        <Button
          size="sm"
          className="rounded-md bg-button-dimmed"
          onClick={() => setIsMuted((p: boolean) => !p)}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <GoUnmute className="h-5 w-5" />
          ) : (
            <GoMute className="h-5 w-5" />
          )}
        </Button>
        <div className="flex gap-x-[1px]">
          {filters.map((t, i, array) => {
            const isActive = filter === t;
            return (
              <Button
                key={t}
                size="sm"
                onClick={() => setFilter(t)} // OK vì t đã là FilterType
                className={`
                     px-[16px] rounded-none 
                     ${i === 0 ? "rounded-l-md" : ""}
                     ${i === array.length - 1 ? "rounded-r-md" : ""}
                     ${
                       isActive
                         ? "bg-button-dimmed-active text-white"
                         : "bg-button-dimmed text-white/60"
                     }
              `}
              >
                {t}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabTools;
