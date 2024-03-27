import SobProbondho from "@/components/probondho/sobProbondho";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "প্রবন্ধ",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className="pt-[125px] text-black">
      <SobProbondho />
    </div>
  );
}
