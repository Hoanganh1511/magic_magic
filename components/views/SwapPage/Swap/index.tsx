import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSwap } from "@/context/nft/SwapContext";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SwapTab() {
  const { selectMode, setSelectMode } = useSwap();
  return (
    <div className="h-full flex flex-col">
      {" "}
      {/* Pay */}
      <div className="bg-layer-03 rounded-lg overflow-hidden mt-3 border-[1px] border-primary-border">
        <div className="bg-layer-04 p-3">
          <label className="text-sm text-white/80 font-medium">Pay</label>
        </div>
        <div className="flex justify-between items-center p-3 mt-1">
          <div>
            <Input
              type="number"
              placeholder="0"
              className="bg-transparent border-none !text-[26px] font-semibold text-white p-0 focus-visible:ring-0"
            />
            <p className="text-[18px] text-gray-500">$0</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setSelectMode("pay")}
            className="bg-[#2A2635] text-white border-0 flex items-center"
          >
            SOL <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
      {/* Action row */}
      <div className="flex justify-between gap-2 mt-2">
        <Button
          size="sm"
          className="flex-1 bg-[#2A2635] text-white hover:bg-[#383247]"
        >
          <ArrowUpDown className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-[#2A2635] text-white hover:bg-[#383247]"
        >
          25%
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-[#2A2635] text-white hover:bg-[#383247]"
        >
          50%
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-[#2A2635] text-white hover:bg-[#383247]"
        >
          100%
        </Button>
      </div>
      {/* Receive */}
      <div className="bg-layer-03 rounded-lg overflow-hidden mt-2">
        <div className="bg-layer-04 p-3">
          <label className="text-sm text-white/80 font-medium">Receive</label>
        </div>
        <div className="flex justify-between items-center p-3 mt-1">
          <div>
            <p className="text-2xl font-semibold text-gray-500">0</p>
            <p className="text-xs text-gray-500">$0</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setSelectMode("receive")}
            className="bg-[#2A2635] text-white border-0 py-1 px-3 h-8 flex items-center"
          >
            Select <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
      {/* Login button */}
      {/* <Button className="w-full bg-pink-600 hover:bg-pink-700 mt-4">
        Log in to swap
      </Button> */}
      <p className="text-xs text-gray-500 mt-3 text-center">
        Swap services are available through{" "}
        <a href="#" className="underline">
          third party API partners
        </a>
      </p>
      <Button className="mt-auto  w-full bg-[#401E2E] text-pink-400 hover:bg-[#502537] ">
        Select Receiving Address
      </Button>
    </div>
  );
}
