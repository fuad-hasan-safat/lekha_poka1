import SobJiboni from "@/components/jiboni/sobJiboni";
import SobKobita from "@/components/kobita/sobKobita";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "জিবনী",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className=" text-black">
      <SobJiboni />
    </div>
  );
}
