import LoginPage from "../../components/login/login";
import "../../public/assets/css/globals.css";
export default function Home() {

    return (
        <>
            <main>
                <div className="h-screen flex items-center justify-center ">
                    <LoginPage />
                </div>
            </main>

        </>

    )
}