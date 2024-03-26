

type logreg = {
    logreg: string;
    btntext: string;
}

export default function LoginForm({ logreg, btntext }: logreg) {
    return (
        <>
            <div >

                <div className="text-[48px] mb-5  font-semibold text-yellow-500">
                    {logreg}
                </div>
                <div className="  grid place-items-center">

                    <div className="mb-4 ">

                        <input className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" required />
                    </div>
                    <div className="">

                        <input className="w-[559px] h-[62px] p-4 bg-[#FCF7E8]  rounded-2xl   text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mobile Number" required />

                    </div>

                    <button
                        className=" mt-8 px-5 bg-[#F9A106] rounded-full text-[35px] text-white w-[368px] h-[75px] "
                    >
                        {btntext}
                    </button>

                </div>
            </div>
        </>
    );
}