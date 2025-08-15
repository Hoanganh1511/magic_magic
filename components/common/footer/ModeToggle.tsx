"use client";
import * as React from "react";
import { useTheme } from "next-themes";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { PiLaptopLight } from "react-icons/pi";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <ul className="flex items-center gap-x-[4px] px-4">
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`${
                theme === "dark" ? "bg-[#e5e3e8b3] dark:bg-white/10" : ""
              } bg-transparent hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer size-8 flex items-center justify-center rounded-[4px]`}
              onClick={() => setTheme("dark")}
            >
              <CiDark />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to Dark Mode</p>
          </TooltipContent>
        </Tooltip>
      </li>
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`${
                theme === "system" ? "dark:bg-[#e5e3e8b3] bg-black/10" : ""
              } bg-transparent hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer size-8 flex items-center justify-center rounded-[4px]`}
              onClick={() => setTheme("system")}
            >
              <PiLaptopLight />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to System Mode</p>
          </TooltipContent>
        </Tooltip>
      </li>
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className={`${
                theme === "light" ? "dark:bg-[#e5e3e8b3] bg-black/10" : ""
              } bg-transparent hover:bg-gray-200 dark:hover:bg-white/20  cursor-pointer size-8 flex items-center justify-center rounded-[4px]`}
              onClick={() => setTheme("light")}
            >
              <CiLight />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch to Light Mode</p>
          </TooltipContent>
        </Tooltip>
      </li>
    </ul>
  );
}
