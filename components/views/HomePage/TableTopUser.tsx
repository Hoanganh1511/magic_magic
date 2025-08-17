"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CollectionItem,
  fetchCollectionsByCategory,
} from "@/services/nftServices";
import { IoGrid } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import FilterBar from "./FilterTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/Logo";
const sizeRanges = [10, 25, 50, 100];
type SizeOption = (typeof sizeRanges)[number] | "grid";

export default function TableTopUser() {
  const [users, setUsers] = useState<CollectionItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(10);
  useEffect(() => {
    fetchCollectionsByCategory("all").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="bg-sectionBg text-white border-0  rounded-2xl flex flex-col gap-y-4 p-4">
      <div className="">
        <FilterBar />
      </div>
      {selectedSize === "grid" ? (
        // GRID VIEW
        <div className="grid grid-cols-3 gap-4">
          {users.map((item, i) => (
            <Card
              key={i}
              className="bg-[#1a1a28] border-none text-white flex items-center gap-3 p-4"
            >
              <img
                src={item.image}
                alt="logo"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold truncate">{item.name}</span>
                  <span className="text-sm text-gray-400">{item.volume}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Floor {item.floorPrice}</span>
                  <span
                    className={
                      item.change >= 0 ? "text-green-400" : "text-red-400"
                    }
                  >
                    {item.change >= 0 ? "▲" : "▼"} {Math.abs(item.change)}%
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        // TABLE VIEW
        <Table>
          <TableHeader>
            <TableRow className="text-gray-400 border-none">
              <TableHead>
                {" "}
                <Logo size={20} color="#ff007a" />
              </TableHead>
              <TableHead>#</TableHead>
              <TableHead>Collection</TableHead>
              <TableHead>Floor</TableHead>
              <TableHead>Top Offer</TableHead>
              <TableHead>Floor 7d %</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Listed</TableHead>
              <TableHead>Last 7d</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.slice(0, selectedSize).map((item, i) => (
              <TableRow
                key={i}
                className="relative [&>td]:relative [&>td]:z-10 row-user border-none [&>td]:py-2 [&>td]:border-none hover:bg-white/10 
              after:content-[''] after:absolute after:inset-0 
              after:bg-[url('/assets/images/bg-user-table.svg')] after:bg-no-repeat after:bg-center
              after:opacity-0 hover:after:opacity-100 after:animate-none hover:after:animate-float-up 
              after:z-0"
              >
                <TableCell>
                  <FaRegStar
                    size={20}
                    className="text-white/60 hover:text-[rgba(236,182,19,1)] cursor-pointer"
                  />
                </TableCell>
                <TableCell>{item.rank}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt="logo"
                    className="w-8 h-8 rounded-full"
                  />
                  {item.name}
                </TableCell>
                <TableCell>{item.floorPrice}</TableCell>
                <TableCell>{item.topOffer}</TableCell>
                <TableCell
                  className={
                    item.change >= 0 ? "text-green-400" : "text-red-400"
                  }
                >
                  <div className="flex items-center gap-1">
                    {item.change >= 0 ? (
                      <ArrowUp size={14} />
                    ) : (
                      <ArrowDown size={14} />
                    )}
                    {Math.abs(item.change)}%
                  </div>
                </TableCell>
                <TableCell>{item.volume}</TableCell>
                <TableCell>{item.sales}</TableCell>
                <TableCell>
                  <div>
                    {item.listed}
                    <div className="text-xs text-gray-500">
                      {item.listedDetail}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`w-16 h-6 rounded bg-${item.chart}-500/30`}>
                    Last
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="flex items-center gap-[12px] rounded-md ">
        <div className="text-sm text-white/50 font-semibold">Show top</div>
        <div className="flex items-center gap-[2px]">
          {sizeRanges.map((t) => (
            <Button
              key={t}
              variant="ghost"
              size="sm"
              onClick={() => setSelectedSize(t)}
              className={cn(
                "px-4 text-sm rounded-none text-gray-300 bg-white/5 hover:bg-white/10",
                selectedSize === t && "bg-white/15 text-white",
                "first:rounded-l-md last:rounded-r-md [&:not(:first-child):not(:last-child)]:rounded-none"
              )}
            >
              {t}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedSize("grid")}
            className={cn(
              "px-4 text-sm rounded-none text-gray-300 bg-white/5 hover:bg-white/10",
              selectedSize === "grid" && "bg-white/15 text-white",
              "last:rounded-r-md"
            )}
          >
            <IoGrid />
          </Button>
        </div>
      </div>
    </div>
  );
}
