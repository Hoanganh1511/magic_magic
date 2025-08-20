"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SwapTab from "@/components/views/SwapPage/Swap";
import HistoryTab from "@/components/views/SwapPage/History";
import { useSwap } from "@/context/nft/SwapContext";
import TokenSelector from "@/components/views/SwapPage/TokenSelector";
import { useState } from "react";

export default function SwapPage() {
  const { selectMode } = useSwap();
  const [activeTab, setActiveTab] = useState("swap");

  return (
    <div className="h-full min-h-[calc(100vh-144px)] flex items-center justify-center text-white">
      <Image
        src="/assets/images/decor/swap-glow.svg"
        fill
        className="z-[0] object-cover"
        alt=""
      />
      <Card className="relative z-[1] bg-layer-02 w-[480px] rounded-xl border-none shadow-lg p-0">
        {selectMode ? (
          <div className="p-4 h-[500px]">
            <TokenSelector
              mode={selectMode}
              selectedToken={null}
              onSelect={() => {}}
              tokens={[]}
            />
          </div>
        ) : (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-between items-center px-4 pt-4">
              <TabsList className="bg-transparent p-0 space-x-6">
                <TabsTrigger value="swap" className="relative text-[18px] p-0">
                  <div className="flex flex-col items-center">
                    <span>Swap</span>
                    {activeTab === "swap" && (
                      <div className="w-full h-[3px] bg-pink-600"></div>
                    )}
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="relative text-[18px] p-0"
                >
                  <div className="flex flex-col items-center">
                    <span>History</span>
                    {activeTab === "history" && (
                      <div className="w-full h-[3px] bg-pink-600"></div>
                    )}
                  </div>
                </TabsTrigger>
              </TabsList>

              <Button variant="ghost" size="sm" className="text-gray-400">
                Auto
              </Button>
            </div>

            {/* Swap content */}

            
            <TabsContent value="swap" className="h-[500px] px-4 pb-4">
              <SwapTab />
            </TabsContent>

            {/* History content */}
            <TabsContent
              value="history"
              className="h-[500px] px-4 py-6 text-center"
            >
              <HistoryTab />
            </TabsContent>
          </Tabs>
        )}
      </Card>
    </div>
  );
}
