import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "next-themes";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SearchProvider } from "@/context/SearchContext";
import MainLayout from "@/components/layout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Magic Magic",
    template: "Magic Eden Clone",
  },
  description: "Magic Magic - Nền tảng trang web cá nhân ",
  icons: {
    icon: "/icon.png",
  },
  manifest: "/manifest.json",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
