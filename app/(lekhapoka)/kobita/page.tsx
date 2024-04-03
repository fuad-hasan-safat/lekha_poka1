import SobKobita from "@/components/kobita/sobKobita";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "কবিতা",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className=" text-black">
      <SobKobita />
    </div>
  );
}
