import LoginPage from "../../components/login/login";
import "../../app/globals.css";
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