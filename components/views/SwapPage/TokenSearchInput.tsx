// TokenSearchInput.tsx
"use client";

import { useState } from "react";

interface Props {
  onSearch?: (value: string) => void;
}

export default function TokenSearchInput({ onSearch }: Props) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search name or symbol"
        value={value}
        onChange={handleChange}
        className="w-full bg-[#2A2635] text-sm px-3 py-2 rounded-md outline-none placeholder-gray-500"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>
  );
}
