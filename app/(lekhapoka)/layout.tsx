"use client"
import "../../app/globals.css";
import React from 'react';
import { Provider } from "react-redux";
import store, { RootState } from "@/lib/store";
// import { useDispatch, useSelector } from "react-redux";
// import { makeTrueFalse } from "@/lib/features/navbar-footer/showNavbarFooterSlice";
import { Metadata } from "next/types";
import localFont from "next/font/local";

import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";

import AudioPlayer from "@/components/musicbar/AudioPlayer";



const myFont = localFont({
  src: '../../public/assets/fonts/Tatsama.ttf'
})

const metadata: Metadata = {
  title: "লেখার পোকা",
  description: "লাইভ টেকনোলজিস",
};

interface LayoutProps {
  children: React.ReactNode;

}

export default function Layout({
  children,

}: LayoutProps) {
  // const footerNavbarShow = useSelector((state:RootState)=> state.navbarState.hideNavbarFooter)
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <main className={`${myFont.className}`}>
           <MyNavbar />
          <div>{children}</div>
         <MyFooter />
       <AudioPlayer />
        </main>
        </Provider>
      </body>
    </html>
  );
}
