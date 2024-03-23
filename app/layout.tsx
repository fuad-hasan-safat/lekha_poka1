import "../app/globals.css";
import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";
import { Metadata } from "next/types";
import localFont from "next/font/local";

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
      <body className={`${myFont.className}`}>
        {showNavbar && <MyNavbar />}
        <main>{children}</main>
        {showFooter && <MyFooter />}
      </body>
    </html>
  );
}
