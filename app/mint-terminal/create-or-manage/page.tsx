"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSwap } from "@/context/nft/SwapContext";
const CreateOrManagePage = () => {
  return (
    <>
      <div className="min-h-screen max-w-3xl mx-auto text-white p-6">
        {/* Back header */}
        <div className="flex items-center mb-8 cursor-pointer">
          <Link
            href="/mint-terminal/base"
            className="flex items-center text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Link>
          <span className="">Create NFT Drop</span>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mx-auto">
          {/* New Collection */}
          <Card className="bg-layer-01 min-h-[200px] border-none text-white rounded-lg">
            <CardHeader className="h-[100px] mb-6">
              <CardTitle className="text-lg">New Collection</CardTitle>
              <CardDescription className="text-gray-400">
                Create a Single Edition (ERC-1155) or a Unique Edition (ERC-721)
                collection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                Create New Collection
              </Button>
            </CardContent>
          </Card>

          {/* Existing Collections */}
          <Card className="bg-layer-01 min-h-[200px] border-none text-white rounded-lg">
            <CardHeader className="h-[100px] mb-6">
              <CardTitle className="text-lg">Existing Collections</CardTitle>
              <CardDescription className="text-gray-400">
                View your deployed collections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                Connect to EVM Wallet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CreateOrManagePage;
