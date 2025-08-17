"use client";

import React from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  Filter,
  Grid2x2,
  Rows,
  Search,
  Rocket,
  Plus,
  Pause,
  Play,
  Clock,
  Zap,
  Users,
} from "lucide-react";
import Trending from "@/components/views/MintPage/Trending";

// --------------------- Mock Data ---------------------

const liveFeedItems = [
  {
    id: "lf-1",
    title: "Rodeo posts",
    creator: "0x49...f20c",
    edition: "Open Edition",
    totalMinted: 1,
    price: 0.0001,
    endsIn: "N/A",
    desc: "No Description",
    status: null,
    isFree: false,
  },
  {
    id: "lf-2",
    title: "33 Below",
    creator: "0x51...a7ce",
    edition: "Limited Edition",
    totalMinted: 4000,
    price: 0.0004,
    endsIn: "N/A",
    desc: "No Description",
    status: null,
    isFree: false,
  },
  {
    id: "lf-3",
    title: "Little Apes YC",
    creator: "0x40...41f3",
    edition: "Limited Edition",
    totalMinted: 9386,
    supply: 10000,
    price: 0.0002,
    endsIn: "1 hour",
    desc: "No Description",
    status: "Ending Soon",
    isFree: true,
  },
  {
    id: "lf-4",
    title: "Monad Mystery pass V2",
    creator: "0xa6...5a04",
    edition: "Limited Edition",
    totalMinted: 1,
    supply: 333,
    price: 0.00128,
    endsIn: "6 days",
    desc: "No Description",
    status: null,
    isFree: false,
  },
];

// --------------------- Components ---------------------

function LiveFeedHeader({ paused, setPaused, filter, setFilter }: any) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 rounded-xl border p-1">
        <div className="mx-2 flex items-center gap-2">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium">Live</span>
        </div>
        <Separator orientation="vertical" className="h-6" />
        <Button
          size="icon"
          variant="ghost"
          className="rounded-xl"
          onClick={() => setPaused((p: boolean) => !p)}
          aria-label={paused ? "Resume" : "Pause"}
        >
          {paused ? (
            <Play className="h-5 w-5" />
          ) : (
            <Pause className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="ml-auto flex items-center gap-2 rounded-xl border p-1">
        {["All", "Free", "Paid"].map((t) => (
          <Button
            key={t}
            size="sm"
            variant={filter === t ? "default" : "ghost"}
            className="rounded-lg"
            onClick={() => setFilter(t)}
          >
            {t}
          </Button>
        ))}
      </div>
    </div>
  );
}

function LiveFeedGrid({ filter }: { filter: "All" | "Free" | "Paid" }) {
  const filtered = liveFeedItems.filter((i) => {
    if (filter === "All") return true;
    if (filter === "Free") return i.isFree;
    return !i.isFree;
  });

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {filtered.map((i) => (
        <Card key={i.id} className="rounded-2xl border shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <CardTitle className="text-base">{i.title}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  Creator: {i.creator}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                {i.status && (
                  <Badge variant="destructive" className="w-fit">
                    {i.status}
                  </Badge>
                )}
                {i.isFree && <Badge variant="secondary">FREE</Badge>}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{i.edition}</Badge>
              {typeof i.totalMinted !== "undefined" && (
                <span className="opacity-80">
                  Total Minted: <b>{i.totalMinted.toLocaleString()}</b>
                  {i.supply ? "/" + i.supply.toLocaleString() : ""}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="opacity-80">
                Mint Price: <b>{i.isFree ? "FREE" : `${i.price} ETH`}</b>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="opacity-80">
                Ends In: <b>{i.endsIn}</b>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{i.desc}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-xl">View</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function Page() {
  const [paused, setPaused] = useState(false);
  const [feedFilter, setFeedFilter] = useState<"All" | "Free" | "Paid">("All");

  return (
    <div className="mx-auto container max-w-screen h-full sm:px-4 lg:px-7 py-6">
      <Tabs defaultValue="trending" className="space-y-6">
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
        </div>

        {/* TRENDING */}
        <TabsContent value="trending" className="space-y-6">
          <Trending />
        </TabsContent>

        {/* LIVE FEED */}
        <TabsContent value="live" className="space-y-6">
          <LiveFeedHeader
            paused={paused}
            setPaused={setPaused}
            filter={feedFilter}
            setFilter={setFeedFilter}
          />
          <LiveFeedGrid filter={feedFilter} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
