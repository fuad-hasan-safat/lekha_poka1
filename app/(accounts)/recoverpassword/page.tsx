import RecoveryPage from "../../../components/recoverypage/RecoveryPage";
import "../../../app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "পাসওয়ার্ড রিকভারি",
  description: "লেখার পোকা",
};


export default function Home() {

  return (
    <div className="h-screen flex items-center justify-center ">
      <RecoveryPage />
    </div>
  );
}
