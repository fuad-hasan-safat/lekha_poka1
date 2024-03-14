
type logreg = {
    logreg: string;
    btntext: string;
}

export default function LoginReg({ logreg, btntext }: logreg) {
    return (
        <>
            <div className="bg-white">
                <div className="text-[48px] font-semibold text-yellow-500 h-[28px] w-[302.34px] pt-5 mb-[100px]">{logreg}</div>
                <div className="mb-3 w-[559px] h-[62px] pt-4">

                    <input className="w-[559px] bg-red-100 border rounded-2xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" required />
                </div>
                <div className="w-[559px] h-[62px]">

                    <input className="w-[559px] bg-red-100 border rounded-2xl  py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Mobile Number" required />

                </div>

                <button
                    className="bg-yellow-400 w-[368px] h-[75px] justify-center items-center rounded-3xl text-[36px] text-white"
                >
                    {btntext}
                </button>

            </div>
        </>
    );
}