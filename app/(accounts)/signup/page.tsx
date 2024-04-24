import SignUpPage from "@/components/signup/SignUpPage";
import "../../../app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "সাইন ইন",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
      <div>
        <SignUpPage />
      </div>
  );
}
