import ContactUs from "@/components/contactus/contactus";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className="pt-[125px] text-black">
      <ContactUs />
    </div>
  );
}
