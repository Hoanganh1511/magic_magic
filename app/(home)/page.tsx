"use client";
import TwoItemSlickCarousel from "@/components/views/HomePage/Carousel";
import CollectionSection from "@/components/views/HomePage/SectionCollection";
import TableTopUser from "@/components/views/HomePage/TableTopUser";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { date: "2025-08-10", sales: 400 },
  { date: "2025-08-11", sales: 300 },
  { date: "2025-08-12", sales: 500 },
  { date: "2025-08-13", sales: 200 },
  { date: "2025-08-14", sales: 700 },
  { date: "2025-08-15", sales: 600 },
];
const movers1 = [
  {
    id: 1,
    name: "La Mouch",
    image: "/assets/images/collections/collection_1.webp",
    verified: true,
    floorPrice: "159.9 MON",
    volumeChange: "707%",
  },
  {
    id: 2,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_2.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
  {
    id: 3,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_5.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
  {
    id: 4,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_7.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
  // ...
];
const movers2 = [
  {
    id: 1,
    name: "La Mouch",
    image: "/assets/images/collections/collection_1.webp",
    verified: true,
    floorPrice: "159.9 MON",
    volumeChange: "707%",
  },
  {
    id: 2,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_2.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
  {
    id: 3,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_3.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
  {
    id: 4,
    name: "Sealuminati Testnetooor",
    image: "/assets/images/collections/collection_4.avif",
    verified: true,
    floorPrice: "239.6 MON",
    volumeChange: "271%",
  },
];
export default function Home() {
  return (
    <div className="w-full  flex flex-col justify-between">
      <div className="absolute w-full h-[520px] pointer-events-none mt-[-120px] bg-center max-md:mt-[-60%] max-md:bg-[-580px] bg-no-repeat bg-[length:auto] bg-[url('https://img-cdn.magiceden.dev/f:webp/rs:fill:1376:748:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Fcarousel_bg_glow%2520(1).webp')]"></div>
      <div className="w-full flex flex-col pt-3 md:pt-6 mb-12 px-3 md:px-6 z-[1]">
        {/* Section 1 */}
        <div className="flex gap-x-6 mb-[24px]">
          <div className="flex-1 bg-sectionBg border-[1px] border-primary-border rounded-md h-[160px] md:h-[320px]">
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <TwoItemSlickCarousel />
        </div>

        {/* Table Top User */}
        <div className="mb-[40px]">
          <TableTopUser />
        </div>

        {/* Collection Section */}
        <div className="mb-[80px]">
          <CollectionSection
            title="Biggest Movers on Monad Testnet"
            items={[...movers1, ...movers2]}
          />
        </div>
        <div className="mb-[40px]">
          <CollectionSection
            title="Trending Collections"
            items={[...movers2, ...movers1]}
          />
        </div>
        <div className="bg-sectionBg rounded-md p-6 flex flex-col gap-y-4">
          <h1 className="text-lg md:text-2xl leading-7 md:leading-9 font-bold !text">
            Monad Testnet NFT Marketplace
          </h1>
          <p className="text-textColor-secondary text-sm leading-6 font-medium">
            Magic Magic is the leading EVM NFT Marketplace. Buy, sell, and
            discover Monad Testnet NFTs from top creators. Enjoy world class NFT
            minting experiences, collection trait offers, complete analytics,
            advanced chart views and many other features. Marketplace
            aggregation is also supported to ensure you never miss an
            opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
