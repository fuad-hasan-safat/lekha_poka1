import Link from "next/link";



export default function UnauthorizeUser(){
    return(
        <>
        <div className="pt-[130px] pb-10 w-full place-content-center text-black">
              <div className="text-center text-7xl text-red-600">
                <div>you are not authorized to visit this page</div>
                <div className="text-4xl text-purple-900 underline hover:text-blue-500">
                  <Link href="/login">Log in to get access</Link>
                </div>
              </div>
            </div>
        </>
    )
}