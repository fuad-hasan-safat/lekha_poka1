type SignInOptionProps = {
title: string;
icon1: string;
icon2: string;
icon3: string;
lowermessege1: string;
lowermessege2: string;
}

export default function SignInOption({title, icon1, icon2, icon3, lowermessege1, lowermessege2}: SignInOptionProps) {
    return (
        <>

            {/* divider  */}
            <div>
                <div
                    className=" w-[270px] my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p
                        className="mx-4 mb-0 text-center text-xs">
                        {title}
                    </p>
                </div>
            </div>

            {/* end divider */}
            <div className="pt-4 flex space-x-6 pl-6">
                {/* <!-- Social login buttons --> */}
                <a
                    className="mb-3 flex  w-[67px] h-[43px] items-center justify-center rounded text-center text-sm font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"

                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                        <img
                        src={icon1}
                        width={300}
                        height={300}
                        alt="fac"
                        className="w-[44px] h-[22px]"
                        />
                   
                </a>
               
                <a
                    className="mb-3 flex  w-[67px] h-[43px] items-center justify-center rounded  text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    {/* <!-- X --> */}
                     {/* <!-- Facebook --> */}
                     <img
                        src={icon2}
                        width={300}
                        height={300}
                        alt="fac"
                        className="w-[44px] h-[22px]"
                        />
                </a>

                <a
                    className="mb-3 flex  w-[67px] h-[43px] items-center justify-center rounded text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    {/* <!-- X --> */}
                    <img
                        src={icon3}
                        width={300}
                        height={300}
                        alt="fac"
                        className="w-[44px] h-[22px]"
                        />
                </a>

            </div>

            <div className="flex pt-4">
                <p className="pl-6  text-gray-500">{lowermessege1}</p> <a className="ml-3 text-black" href="#">{lowermessege2}</a>
            </div>
        </>

    );
}