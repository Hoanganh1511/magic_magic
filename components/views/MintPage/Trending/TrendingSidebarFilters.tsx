"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useTrending } from "@/context/nft/TrendingContext";
import { X } from "lucide-react";

export default function TrendingSidebarFilters({ open }: { open: boolean }) {
  const { isSidebarOpen, setSidebarOpen, layout, setLayout } = useTrending();

  return (
    <aside className={`${open ? "block" : "hidden"} w-full lg:w-72 shrink-0`}>
      <div className="bg-card p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <X onClick={() => setSidebarOpen(false)} className="cursor-pointer" />
        </div>
        <Accordion type="multiple" className="w-full">
          {[
            "Quality Filter",
            "Mint Style",
            "Mint Status",
            "Mint Price",
            "Mint Volume",
            "Mint Count",
            "Percent Minted",
            "Mint Platform",
          ].map((title, idx) => (
            <AccordionItem
              value={`item-${idx}`}
              key={idx}
              className="border-b-[1px] border-white/5"
            >
              <AccordionTrigger className="text-left text-white/85 ">
                {title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  {["Any", "High", "Medium", "Low"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3">
                      <Checkbox id={`${title}-${opt}`} />
                      <Label htmlFor={`${title}-${opt}`}>{opt}</Label>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}
