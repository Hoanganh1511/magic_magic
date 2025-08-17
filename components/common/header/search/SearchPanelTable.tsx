"use client";
import Image from "next/image";

import React from "react";
import { CollectionItem } from "@/services/nftServices";
import { FaCertificate, FaCheck } from "react-icons/fa";

type SearchPanelTableProps = {
  collections: CollectionItem[];
};

const SearchPanelTable = ({ collections }: SearchPanelTableProps) => {
  return (
    <div className=" bg-primaryBg shadow max-h-[500px] overflow-y-auto search-panel-scrollbar">
      {/* Header */}
      <div className="grid grid-cols-[55%,20%,25%] px-4 py-2 sticky top-0 bg-primaryBg z-10 border-b border-primary-border">
        <div className="text-gray-500">Collections</div>
        <div className="text-right text-gray-500">Floor</div>
        <div className="text-right text-gray-500">Total Volume</div>
      </div>

      {/* Rows */}
      {collections.map((c, i) => (
        <div
          key={i}
          className="grid grid-cols-[55%,20%,25%] px-4 py-2 border-b border-primary-border/20"
        >
          {/* Collection name */}
          <div className="flex items-center gap-3 font-medium">
            <Image
              src={c.image || "/assets/images/avatars/avatar-default.jpg"}
              alt={c.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="flex items-center gap-x-1">
              <span className="truncate">{c.name}</span>

              <div className="ml-[2px] size-[15px]">
                <div className="relative inline-block">
                  {/* Nền badge */}
                  <FaCertificate className="text-pink-500 w-[15px] h-[15px]" />
                  {/* Tick chồng lên */}
                  <FaCheck className="text-white size-[8px]  absolute inset-0 m-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Floor */}
          <div className="text-right text-sm">
            <span className="font-medium">{c.floorPrice}</span>{" "}
            <span className="text-gray-400">ETH</span>
          </div>

          {/* Volume */}
          <div className="text-right text-sm">
            <span className="font-medium">{c.volume}</span>{" "}
            <span className="text-gray-400">ETH</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchPanelTable;
