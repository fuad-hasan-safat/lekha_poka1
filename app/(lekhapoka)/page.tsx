
import Procchod from "@/components/procchod/Procchod";
import Carousel1 from "@/components/slider/Carousel1";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "প্রচ্ছদ",
  description: "লেখার পোকা",
};
export default function Home() {

  return (
    <>
        <Carousel1 />
        <Procchod />
    </>
  );
}
