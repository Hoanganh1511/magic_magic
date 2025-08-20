"use client";

import React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Trending from "@/components/views/MintPage/Trending";
import LiveFeed from "@/components/views/MintPage/LiveFeed";
import { useMint } from "@/context/nft/MintContext";
import TabTools from "@/components/views/MintPage/TabTools";
import Link from "next/link";

export default function Page() {
  const {} = useMint();
  const [activeTab, setActiveTab] = useState("trending");
  return (
    <div className="mx-auto container max-w-screen  h-full sm:px-4 lg:px-7 py-6">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        defaultValue="trending"
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <TabsList className="rounded-2xl flex items-center gap-x-6">
            <TabsTrigger
              value="trending"
              className="relative text-[16px] text-white/50 font-semibold data-[state=active]:text-[24px] data-[state=active]:text-white data-[state=active]font-bold data-[state=active]text-white p-0 
              data-[state=active]:after:absolute  data-[state=active]:after:top-[calc(100%+6px)] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[4px] data-[state=active]:after:rounded-[8px] data-[state=active]:after:bg-primaryPink
              "
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="live"
              className="relative text-[16px] text-white/50 font-semibold data-[state=active]:text-[24px] data-[state=active]:text-white data-[state=active]font-bold data-[state=active]text-white p-0 
              data-[state=active]:after:absolute  data-[state=active]:after:top-[calc(100%+6px)] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[4px] data-[state=active]:after:rounded-[8px] data-[state=active]:after:bg-primaryPink
              "
            >
              Live Feed
            </TabsTrigger>
          </TabsList>
          <div>
            {activeTab === "trending" && (
              <>
                <Link href="/mint-terminal/create-or-manage"></Link>
              </>
            )}
            {activeTab === "live" && (
              <>
                <TabTools />
              </>
            )}
          </div>
        </div>

        {/* TRENDING */}
        <TabsContent value="trending" className="space-y-6">
          <Trending />
        </TabsContent>

        {/* LIVE FEED */}
        <TabsContent value="live" className="space-y-6">
          <LiveFeed />
        </TabsContent>
      </Tabs>
    </div>
  );
}
