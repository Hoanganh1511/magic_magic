// TokenSelector.tsx
"use client";

import { Token } from "@/types";
import TokenList from "./TokenList";
import TokenSearchInput from "./TokenSearchInput";
import { IoMdArrowBack } from "react-icons/io";
import { useSwap } from "@/context/nft/SwapContext";
interface TokenSelectorProps {
  mode: "pay" | "receive";
  selectedToken: Token | null;
  onSelect: (t: Token) => void;
  tokens: Token[];
}

export default function TokenSelector({
  mode,
  selectedToken,
  onSelect,
  tokens,
}: TokenSelectorProps) {
  const { setSelectMode } = useSwap();
  return (
    <div className=" rounded-xl  w-full">
      <div className="flex justify-between items-center mb-3">
        <h2 className="flex items-center gap-3">
          <IoMdArrowBack
            onClick={() => setSelectMode(null)}
            className="cursor-pointer w-[24px] h-[24px] text-gray-400 hover:text-white transition-colors"
          />{" "}
          <span className="text-[22px] pb-[4px] font-semibold">
            {mode === "pay" ? "You Pay" : "You Receive"}
          </span>
        </h2>
        {mode === "receive" && (
          <select className="bg-[#2A2635] text-sm px-2 py-1 rounded-md">
            <option>24h Volume (Vol)</option>
            <option>Market Cap</option>
            <option>Price</option>
          </select>
        )}
      </div>

      <TokenSearchInput />

      <TokenList mode={mode} tokens={tokens} onSelect={onSelect} />
    </div>
  );
}
