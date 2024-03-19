import type { Metadata } from "next";
import "../../app/globals.css";
import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";
import { kangsa } from "../fonts/kangsa";




export const metadata: Metadata = {
  title: "লেখার পোকা",
  description: "লাইভ টেকনোলজিস",
};



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kangsa.variable} font-kangsa`}>
        <MyNavbar />
        <main>{children}</main>
        <MyFooter />
      </body>
    </html>
  );
}
