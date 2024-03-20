// "use client";
import Layout from "@/app/layout";
import { useSearchParams } from "next/navigation";
// const searchparams = useSearchParams();
// const slug = searchparams.get("slug");

export default function PostDetails() {
  return (
    <Layout showFooter={true} showNavbar={true}>
      <div className="pt-[115px] text-black">
        <div className="">My Post: Here</div>
      </div>
    </Layout>
  );
}
