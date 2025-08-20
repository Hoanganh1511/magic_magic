import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Zap } from "lucide-react";
import Image from "next/image";

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
  {
    id: "lf-5",
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
  {
    id: "lf-6",
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
  {
    id: "lf-7",
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
  {
    id: "lf-8",
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
export default function LiveFeedGrid({
  filter,
}: {
  filter: "All" | "Free" | "Paid";
}) {
  const filtered = liveFeedItems.filter((i) => {
    if (filter === "All") return true;
    if (filter === "Free") return i.isFree;
    return !i.isFree;
  });

  return (
    <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {filtered.map((i) => (
        <Card
          key={i.id}
          className="rounded-lg bg-layer-02 shadow-sm border-none p-4"
        >
          <CardContent className="p-0  text-sm">
            <div className="flex items-center gap-[12px] mb-2">
              <div className="relative overflow-hidden min-w-[100px] aspect-square bg-white/10 rounded-md">
                <Image
                  src="/assets/images/collections/gif_demo_live_feed_1.webp"
                  fill
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[16px] font-medium text-white">
                  Early Monad Punk Badge
                </span>
                <span className="text-xs flex items-center text-gray-500">
                  Creator: <span className="text-white pl-1">{i.creator}</span>
                </span>
              </div>
            </div>
            {/* --- */}
            <div className="flex justify-between items-start rounded-md mb-2  p-2 bg-layer-04 text-sm text-white">
              {/* Cột trái */}
              <div className="flex flex-col gap-2">
                <span className=" text-xs">Limited Edition</span>
                <span className="text-xs text-gray-500">
                  Ends In:{" "}
                  <span className="font-semibold text-xs text-white">
                    20 days
                  </span>
                </span>
              </div>

              {/* Cột phải */}
              <div className="flex flex-col gap-2 text-right">
                <span className="text-gray-500 text-xs">
                  Total Minted: <span className="pl-1 text-white">1/100K</span>
                </span>
                <span className="text-gray-500 text-xs">
                  Mint Price: <span className="pl-1 text-white">0.005 ETH</span>
                </span>
              </div>
            </div>
            {/*  */}
            <p className="text-xs text-gray-500">
              In the vast expanse of the blockchain, the Genesis Kitties were
              born from primal code. But no creature can exis🎙️
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
