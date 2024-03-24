import ContactUs from "@/components/contactus/contactus";
import Layout from "../layout";

export default function Home() {
    return (
            // <Layout showFooter={true} showNavbar={true}>
                <div className="pt-[125px] text-black">
                    <ContactUs />
                </div>
            // </Layout>
    )
}