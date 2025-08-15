import React from "react";
import { ModeToggle } from "./ModeToggle";
import { CiChat1 } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
const Footer = () => {
  return (
    <div className="sticky bottom-0 left-0 bg-white dark:bg-[#100c18] w-full z-10 h-[40px] border-t border-primary-border">
      <div className="px-4 h-full">
        <div className="flex justify-between h-full">
          <div className="flex items-center gap-x-4 ">
            <span className="flex items-center gap-x-1">
              <SiSolana className="text-[#9945FF]" />
              <span className="tracking-tight text-xs text-[#f2f2f3]">
                $194.64
              </span>
            </span>
            <span className="flex items-center gap-x-1">
              <FaBitcoin className="text-[#F7931A]" />
              <span className="tracking-tight text-xs text-[#f2f2f3]">
                $118,464
              </span>
            </span>
            <span className="flex items-center gap-x-1">
              <FaEthereum className="text-[#8C8C8C]" />
              <span className="tracking-tight text-xs text-[#f2f2f3]">
                $4,622.23
              </span>
            </span>
          </div>
          <div className="flex divide-x divide-primary-border">
            <ModeToggle />
            <div className="px-4 flex items-center">
              <span className="flex items-center gap-x-2">
                <CiChat1 />
                <span className="text-xs text-[#D3D3D3]">Support</span>
              </span>
            </div>
            {/* <div className="px-4 flex items-center">
              <span className="flex items-center gap-x-2"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
