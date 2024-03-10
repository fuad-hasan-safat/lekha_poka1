import Divider from "../common/divider"
import Jonopriyo from "./jonopriyo/Jonopriyo"
import Lekhok from "./lekhok/Lekhok"
import Login from "./login/Login"
import Samprotik from "./samprotik/Samprotik"
import Somosamoyik from "./somosamoyik/Somosamoyik"
export default function Sidebar() {


    return (
        <div>
            <div className="bg-white shadow-md rounded pl-8">
                {/* <h1 className="text-3xl">This is Sidebar</h1> */}
                <div className="pl-16">
                    <Login />
                </div>
                <Divider />
                <div>
                    <Somosamoyik />
                </div>
                <Divider />
                <div>
                    <Samprotik />
                </div>
                <Divider />
                <div>
                    <Jonopriyo />
                </div>
                <Divider />
                <div>
                    <Lekhok/>
                </div>
            </div>
        </div>
    )
}