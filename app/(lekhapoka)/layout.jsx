"use client";
import "../../app/globals.css";
import React from "react";
import { Provider } from "react-redux";
import store, { RootState } from "@/lib/store";
import localFont from "next/font/local";
import 'remixicon/fonts/remixicon.css'

import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";

const myFont = localFont({
  src: "../../public/assets/fonts/Tatsama.ttf",
});

// interface LayoutProps {
//   children: React.ReactNode;
// }

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <main className={`${myFont.className}`}>
            <MyNavbar />
            <div className="pt-[95px]">{children}</div>
            <MyFooter />
          </main>
        </Provider>
      </body>
    </html>
  );
}
