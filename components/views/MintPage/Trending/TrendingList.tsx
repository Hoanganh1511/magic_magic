"use client";
import Image from "next/image";
import Logo from "@/components/common/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Users } from "lucide-react";

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
    type: 4,
    previews: [
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
      "/assets/images/collections/gif_demo_2.webp",
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
    type: 2,
    previews: [
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
      "/assets/images/collections/gif_demo_1.webp",
    ],
  },
  {
    id: 3,
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
    type: 3,
    previews: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  },
  {
    id: 4,
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
    type: 1,
    previews: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  },
];
export default function TrendingList({ layout }: { layout: "grid" | "list" }) {
  return (
    <div className="flex-1 space-y-6 duration-500">
      {trendingCollections.map((c, index) => (
        <Card
          key={c.id}
          className="w-full rounded-md border-none bg-layer-01 hover:bg-layer-03 shadow-sm"
        >
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
          <CardContent className="">
            <div className="w-full ">
              <div className="flex flex-no-wrap overflow-x-scroll no-scrollbar gap-3">
                {c.type === 1 &&
                  c.previews.map((src, i) => (
                    <div
                      key={i}
                      className="
                      relative aspect-square min-w-[150px] rounded-md overflow-hidden
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      flex items-center justify-center
                      before:absolute before:top-0 before:left-0 before:w-full before:h-full
                      before:bg-gradient-to-tr from-white/50 via-white/10 to-white/50
                      before:opacity-0 before:animate-shimmer
                      "
                    >
                      <Image src={src} alt="" fill />
                      <Logo size={34} className="relative z-10" />
                    </div>
                  ))}
                {(c.type === 2 || c.type === 4) &&
                  c.previews.map((src, i) => (
                    <div
                      key={i}
                      className="
                      relative aspect-square min-w-[150px] rounded-md overflow-hidden
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      flex items-center justify-center
                      before:absolute before:top-0 before:left-0 before:w-full before:h-full
                      before:bg-gradient-to-tr from-white/50 via-white/10 to-white/50
                      before:opacity-0 before:animate-shimmer
                      "
                    >
                      <Image src={src} alt="" fill />
                      <Logo size={34} className="relative z-10" />
                    </div>
                  ))}
                {c.type === 3 &&
                  c.previews.map((src, i) => (
                    <div
                      key={i}
                      className="
                        relative aspect-square min-w-[150px] rounded-md overflow-hidden
                        bg-white/10 backdrop-blur-lg border border-white/20
                        flex items-center justify-center
                        shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                      "
                    >
                      {/* highlight góc trên-trái */}
                      <div
                        className="
                          absolute -top-10 -left-10 w-32 h-32
                          bg-gradient-to-tr from-white/50 via-white/0 to-white/0
                          rounded-full
                          opacity-40
                          animate-pulse
                        "
                      />

                      {/* highlight góc dưới-phải */}
                      <div
                        className="
                          absolute -bottom-10 -right-10 w-32 h-32
                          bg-gradient-to-bl from-white/30 via-white/0 to-white/0
                          rounded-full
                          opacity-30
                          animate-pulse
                        "
                      />

                      {/* Logo ở foreground */}
                      <Logo size={34} className="relative z-10" />
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
