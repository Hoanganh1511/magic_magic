"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const timeRanges = ["10m", "1h", "6h", "1d", "7d", "30d"];

export default function FilterBar() {
  const [selectedTime, setSelectedTime] = useState("7d");
  const [badged, setBadged] = useState(true);
  const [usd, setUsd] = useState(false);

  return (
    <div className="flex items-center justify-between w-full ">
      {/* Left */}
      <div className="flex items-center gap-3">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-not-allowed">
                <Star className="w-4 h-4 mr-1 text-white/70" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-[#1a1a28] text-gray-200 border-none">
              Log in to see your watchlist
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="size-full flex items-center justify-center gap-x-1.5 py-2.5 px-4 transition bg-button-dimmed-active text-primary cursor-default rounded-full font-semibold text-sm h-8">
          Top
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="font-medium text-white/50">Badged</span>
            <Switch checked={badged} onCheckedChange={setBadged} />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="font-medium text-white/50">USD</span>
            <Switch checked={usd} onCheckedChange={setUsd} />
          </div>

          <div className="flex items-center gap-[2px] rounded-md ">
            {timeRanges.map((t) => (
              <Button
                key={t}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTime(t)}
                className={cn(
                  "px-4 text-sm rounded-none text-gray-300 bg-white/5 hover:bg-white/10",
                  selectedTime === t && "bg-white/15 text-white",
                  "first:rounded-l-md last:rounded-r-md [&:not(:first-child):not(:last-child)]:rounded-none"
                )}
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-5 h-fit rounded-md">
            See all
          </Button>
        </div>
      </div>
    </div>
  );
}
