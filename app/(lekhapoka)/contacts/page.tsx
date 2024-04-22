import ContactUs from "@/components/contactus/contactus";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className=" text-black">
      <ContactUs />
    </div>
  );
}
