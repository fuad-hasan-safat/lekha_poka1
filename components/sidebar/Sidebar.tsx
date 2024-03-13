import Divider from "../common/divider"
import Jonopriyo from "./jonopriyo/Jonopriyo"
import Lekhok from "./lekhok/Lekhok"
import Login from "./login/Login"
import Samprotik from "./samprotik/Samprotik"
import Somosamoyik from "./somosamoyik/Somosamoyik"
export default function Sidebar() {


    return (
        <div>
            <div className="bg-white rounded  pt-12">
                <div className=" shadow-md pl-8">
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
                        <Lekhok />
                    </div>
                </div>
                {/* <h1 className="text-3xl">This is Sidebar</h1> */}

            </div>
        </div>
    )
}