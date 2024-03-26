import SobGolpo from "@/components/golpo/sobGolpo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "গল্প",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
      <div className="pt-[125px] text-black">
        <SobGolpo />
      </div>
  );
}
