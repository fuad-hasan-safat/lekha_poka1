import LoginReg from "@/components/common/login-reg";

const LoginPage = () => {
    return (
        <>
            <div className="flex bg-red-100 w-[1280px] h-[832px]  mt-[390px] mb-[280px] z-0">
                <div className="flex flex-row space-x-[150px]">
                    {/* left part */}
                    <div className="flex flex-col pl-[120px] space-y-12">
                        <div  >
                            <img
                                src="/images/svgs/lekhapokaBlack.svg"
                                height={72}
                                width={205}
                                alt="logo"
                                className="pt-[81px]"
                            />
                        </div>
                        <div className="text-4xl">
                            <h1>Enjoy The world of</h1>
                            <h1><norb className="text-yellow-500">Poem</norb> anytime !</h1>
                        </div>
                        <div >
                            <img
                                src="/images/svgs/loginPageImage.svg"
                                height={506}
                                width={326}
                                alt="logo"
                            />
                        </div>


                    </div>
                    {/* right part */}
                    <div className=" w-[690px] h-[832px] bg-white rounded-l-3xl pl-[80px] pt-[200px]">
                        <LoginReg
                        logreg="Log In"
                        btntext="Sign In"
                         />
                    </div>

                </div>

            </div>
        </>
    );
}

export default LoginPage;