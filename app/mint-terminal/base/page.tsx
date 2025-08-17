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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";
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

// --------------------- Mock Data ---------------------
const trendingCollections = [
  {
    id: 1,
    name: "OG Apes YC",
    creator: "0x45...cadc",
    price: 0.0055,
    minted: 9800,
    total: 10600,
    supplyLabel: "LE",
    participants: 2453,
    timeLeft: "1 hour",
    platform: "SeaDrop",
    status: "Live",
    previews: [
      "/images/ape1.png",
      "/images/ape2.png",
      "/images/ape3.png",
      "/images/ape4.png",
      "/images/ape5.png",
    ],
  },
  {
    id: 2,
    name: "Based Penguins",
    creator: "0x97...8d1d",
    price: 0.0077,
    minted: 10200,
    total: 10600,
    supplyLabel: "LE",
    participants: 2156,
    timeLeft: "1 hour",
    platform: "SeaDrop",
    status: "Live",
    previews: [
      "/images/peng1.png",
      "/images/peng2.png",
      "/images/peng3.png",
      "/images/peng4.png",
    ],
  },
];

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
function SidebarFilters({ open }: { open: boolean }) {
  return (
    <aside
      className={`$${
        open ? "block" : "hidden"
      } lg:block w-full lg:w-72 shrink-0`}
    >
      <div className="sticky top-4 rounded-2xl border bg-card p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
        </div>
        <Accordion type="multiple" className="w-full">
          {[
            "Quality Filter",
            "Mint Style",
            "Mint Status",
            "Mint Price",
            "Mint Volume",
            "Mint Count",
            "Percent Minted",
            "Mint Platform",
          ].map((title, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger className="text-left">{title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {["Any", "High", "Medium", "Low"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3">
                      <Checkbox id={`${title}-${opt}`} />
                      <Label htmlFor={`${title}-${opt}`}>{opt}</Label>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}

function TrendingHeader({
  onToggleSidebar,
  sidebarOpen,
  layout,
  setLayout,
}: {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
  layout: "grid" | "list";
  setLayout: (v: "grid" | "list") => void;
}) {
  const [range, setRange] = useState("1h");

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" onClick={onToggleSidebar} className="gap-2">
        <Filter className="h-4 w-4" /> Filter
      </Button>

      <div className="ml-auto flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 rounded-xl border p-1">
          {["10m", "1h", "6h", "24h"].map((t) => (
            <Button
              key={t}
              size="sm"
              variant={range === t ? "default" : "ghost"}
              className="rounded-lg"
              onClick={() => setRange(t)}
            >
              {t}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Rocket className="h-5 w-5" />
        </Button>
        <div className="flex items-center rounded-xl border p-1">
          <Toggle
            pressed={layout === "grid"}
            onPressedChange={() => setLayout("grid")}
            aria-label="Grid layout"
            className="rounded-lg"
          >
            <Grid2x2 className="h-4 w-4" />
          </Toggle>
          <Toggle
            pressed={layout === "list"}
            onPressedChange={() => setLayout("list")}
            aria-label="List layout"
            className="rounded-lg"
          >
            <Rows className="h-4 w-4" />
          </Toggle>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70" />
          <Input placeholder="Search collection" className="pl-9 rounded-xl" />
        </div>
        <Button className="rounded-xl gap-2">
          <Plus className="h-4 w-4" /> Create NFT Drop
        </Button>
      </div>
    </div>
  );
}

function TrendingList({ layout }: { layout: "grid" | "list" }) {
  return (
    <div className="space-y-6">
      {trendingCollections.map((c, index) => (
        <Card key={c.id} className="rounded-2xl border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-xl font-bold">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg">{c.name}</CardTitle>
                  <Badge variant="secondary">{c.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">By {c.creator}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <span className="opacity-70">Price:</span> <b>{c.price}</b>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                <span className="opacity-70">Minted:</span>{" "}
                <b>{c.minted.toLocaleString()}</b> / {c.total.toLocaleString()}{" "}
                <Badge className="ml-1" variant="outline">
                  {c.supplyLabel}
                </Badge>
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" /> {c.participants.toLocaleString()}
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> Ends: {c.timeLeft}
              </div>
              <Separator orientation="vertical" className="h-5" />
              <div className="flex items-center gap-1">
                Platform:{" "}
                <Badge variant="secondary" className="ml-1">
                  {c.platform}
                </Badge>
              </div>
              <Button size="sm" className="ml-2 rounded-xl">
                Mint Now
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* previews */}
            <div
              className={`grid gap-3 ${
                layout === "grid"
                  ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                  : "grid-cols-1"
              }`}
            >
              {c.previews.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square w-full rounded-xl bg-gradient-to-br from-blue-300/30 to-purple-300/30"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

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

export default function MinTerminalBasePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const [paused, setPaused] = useState(false);
  const [feedFilter, setFeedFilter] = useState<"All" | "Free" | "Paid">("All");

  return (
    <div className="mx-auto container px-4 py-6">
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
          <TrendingHeader
            onToggleSidebar={() => setSidebarOpen((s) => !s)}
            sidebarOpen={sidebarOpen}
            layout={layout}
            setLayout={setLayout}
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[18rem,1fr]">
            <SidebarFilters open={sidebarOpen} />
            <div className="space-y-6">
              <TrendingList layout={layout} />
            </div>
          </div>
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
