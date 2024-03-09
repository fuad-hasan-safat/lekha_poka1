import Login from "./login/Login"
import Somosamoyik from "./somosamoyik/Somosamoyik"
export default function Sidebar() {

    const samprotik = {
        images: ['/images/writerimage/Jibanananda_Das.jpg', 
        '/images/writerimage/Jibanananda_Das.jpg', 
        '/images/writerimage/Jibanananda_Das.jpg', 
        '/images/writerimage/Jibanananda_Das.jpg', 
    '/images/writerimage/Jibanananda_Das.jpg'],
        links: ['', '', '' , '', ''],
        titles: ['নাম তার বনলতা সেন',
        'নাম তার বনলতা সেন',
        'নাম তার বনলতা সেন',
        'নাম তার বনলতা সেন',
        'নাম তার বনলতা সেন'],
        authors:['জীবনানন্দ দাশ',
        'জীবনানন্দ দাশ',
        'জীবনানন্দ দাশ',
        'জীবনানন্দ দাশ',
        'জীবনানন্দ দাশ']
    }

    return (
        <div>
            <div className="bg-white shadow-md rounded pl-8">
                {/* <h1 className="text-3xl">This is Sidebar</h1> */}
                <div className="pl-16">
                    <Login />
                </div>
                
                <div className="pb-4 dividerwidth">
                    <hr className="my-12 h-0.5 border-t-0 bg-yellow-500 dark:bg-white/10 " />
                </div>
                <div>
                    <Somosamoyik />
                </div>
            </div>
        </div>
    )
}