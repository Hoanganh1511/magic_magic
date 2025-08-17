"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  SiSolana,
  SiBitcoin,
  SiEthereum,
  SiMonero,
  SiFantom,
  SiRipple,
  SiTether,
  SiPolygon,
} from "react-icons/si";
import { FaShapes } from "react-icons/fa";
import SearchPanelTable from "./SearchPanelTable";
import {
  CategoryItem,
  CollectionItem,
  fetchCategories,
  fetchCollectionsByCategory,
} from "@/services/nftServices";
const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  all: FaShapes,
  solana: SiSolana,
  bitcoin: SiBitcoin,
  ethereum: SiEthereum,
  monero: SiMonero,
  fantom: SiFantom,
  ripple: SiRipple,
  tether: SiTether,
  polygon: SiPolygon,
};

const SearchPanel = () => {
  const [activeId, setActiveId] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftBlur, setShowLeftBlur] = useState(false);
  const [showRightBlur, setShowRightBlur] = useState(false);

  //
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [collections, setCollections] = useState<CollectionItem[]>([]);
  //
  useEffect(() => {
    const loadCategories = async () => {
      const res = await fetchCategories();
      // Thêm "all" category
      setCategories([
        { id: "all", name: "All Chains", description: "All NFT collections" },
        ...res.data,
      ]);
    };
    loadCategories();
  }, []);

  // Load collections khi activeId thay đổi
  useEffect(() => {
    const loadCollections = async () => {
      if (activeId === "all") {
        // giả lập: load tất cả collections bằng cách fetch nhiều category
        const promises = categories
          .filter((c) => c.id !== "all")
          .map((c) => fetchCollectionsByCategory(c.id));
        const results = await Promise.all(promises);
        setCollections(results.flatMap((r) => r.data));
      } else {
        const res = await fetchCollectionsByCategory(activeId);
        setCollections(res.data);
      }
    };
    if (categories.length > 0) {
      loadCollections();
    }
  }, [activeId, categories]);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftBlur(scrollLeft > 40);
    setShowRightBlur(scrollLeft + clientWidth < scrollWidth - 30);
  };

  useEffect(() => {
    checkScroll(); // check initial
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="z-[9] absolute top-[calc(100%+8px)] w-full   rounded-md overflow-hidden border border-primary-border ">
      <div className="relative bg-[#191523]">
        <div
          ref={containerRef}
          className="relative w-full overflow-x-auto no-scrollbar border-b border-primary-border"
        >
          <div className="flex">
            {categories.map((cat, i) => {
              console.log(cat.id, iconMap[cat.id]);
              const Icon = iconMap[cat.id] || FaShapes;
              return (
                <li
                  key={i}
                  onClick={() => setActiveId(cat.id)}
                  className={`group p-[10px] flex-shrink-0 flex items-center justify-center  text-white  cursor-pointer
                     ${
                       activeId === cat.id
                         ? "bg-gray-100/10 hover:bg-gray-100/15 "
                         : ""
                     } `}
                >
                  <div className="px-3 gap-x-[10px] flex items-center relative">
                    <Icon
                      size={18}
                      className="text-gray-100/70 group-hover:text-gray-100/50"
                    />

                    {activeId === cat.id && (
                      <span className="text-white text-sm font-semibold leading-none mb-[2px]">
                        {cat.name}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </div>
        </div>
        <div
          className={`${
            showLeftBlur ? "opacity-100" : "opacity-0"
          } pointer-events-none duration-300 absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-primaryBg to-transparent`}
        />

        <div
          className={`${
            showRightBlur ? "opacity-100" : "opacity-0"
          } pointer-events-none duration-300 absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-primaryBg to-transparent`}
        />
      </div>

      {/* Table search */}
      <SearchPanelTable collections={collections} />
    </div>
  );
};

export default SearchPanel;
