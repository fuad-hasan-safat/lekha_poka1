import LoginPage from "../../components/login/login";
import "../../app/globals.css";
import Layout from "../layout";
export default function Home() {

    return (
        
        <Layout showNavbar={false} showFooter={false}>
                <div className="h-screen flex items-center justify-center ">
                    <LoginPage />
                </div>
        </Layout>
           
    )
}