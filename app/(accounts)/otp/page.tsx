import OtpPage from "@/components/otp/otppage";
import "../../../app/globals.css";
import Layout from "../../(lekhapoka)/layout";
export default function Home() {
  return (
    // <Layout showNavbar={false} showFooter={false}>
      <div className="h-screen flex items-center justify-center ">
        <OtpPage />
      </div>
    // </Layout>
  );
}
