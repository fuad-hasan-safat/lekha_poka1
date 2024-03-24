import "../app/globals.css";
import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";
import { Metadata } from "next/types";
import localFont from "next/font/local";
import AudioPlayer from "@/components/musicbar/AudioPlayer";
import { useEffect, useState } from "react";

const myFont = localFont({ src: '../public/assets/fonts/Tatsama.ttf' })

export const metadata: Metadata = {
  title: "লেখার পোকা",
  description: "লাইভ টেকনোলজিস",
};

interface LayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export default function Layout({
  children,
  showNavbar = false,
  showFooter = false,
}: LayoutProps) {


  return (
    <html lang="en">
      <body>
        <main className={`${myFont.className}`}>
        {!showNavbar && <MyNavbar />}
        <div>{children}</div>
        {!showFooter && <MyFooter />}
        {!showFooter &&<AudioPlayer />}
        </main>
      </body>
    </html>
  );
}
