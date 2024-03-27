import SobOnuGolpo from "@/components/onugolpo/sobOnugolpo";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "অণুগল্প",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className="pt-[125px] text-black">
      <SobOnuGolpo />
    </div>
  );
}
