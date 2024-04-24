import LoginPage from "../../../components/login/login";
import "../../../app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "লগ ইন",
  description: "লেখার পোকা",
};


export default function Home() {

  return (
    <div className="">
      <LoginPage />
    </div>
  );
}
