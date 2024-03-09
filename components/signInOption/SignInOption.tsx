

export default function SignInOption() {
    return (
        <>

            {/* divider  */}
            <div>
                <div
                    className=" w-[270px] my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                    <p
                        className="mx-4 mb-0 text-center text-xs">
                        অথবা সাইন ইন করুন
                    </p>
                </div>
            </div>

            {/* end divider */}
            <div className="pt-4 flex space-x-6 pl-6">
                {/* <!-- Social login buttons --> */}
                <a
                    className="mb-3 flex  w-16 h-12 items-center justify-center rounded px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"

                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    {/* <!-- Facebook --> */}
                    <span
                        className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-5 [&>svg]:w-5">
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_1008)">
                                <path d="M24.0975 13.1728C24.0975 12.1819 24.0171 11.4588 23.8431 10.709H12.5281V15.1814H19.1697C19.0359 16.2928 18.3128 17.9667 16.7059 19.0914L16.6834 19.2411L20.261 22.0127L20.5088 22.0374C22.7852 19.9351 24.0975 16.8418 24.0975 13.1728Z" fill="#4285F4" />
                                <path d="M12.5281 24.9566C15.782 24.9566 18.5136 23.8853 20.5089 22.0374L16.706 19.0914C15.6883 19.8011 14.3224 20.2966 12.5281 20.2966C9.3412 20.2966 6.63632 18.1943 5.67211 15.2886L5.53078 15.3006L1.81073 18.1796L1.76208 18.3148C3.74387 22.2516 7.81461 24.9566 12.5281 24.9566Z" fill="#34A853" />
                                <path d="M5.67205 15.2886C5.41764 14.5388 5.2704 13.7353 5.2704 12.9051C5.2704 12.0748 5.41764 11.2714 5.65867 10.5216L5.65193 10.3619L1.88526 7.43665L1.76203 7.49526C0.945237 9.12893 0.476562 10.9635 0.476562 12.9051C0.476562 14.8467 0.945237 16.6812 1.76203 18.3149L5.67205 15.2886Z" fill="#FBBC05" />
                                <path d="M12.5281 5.5134C14.7911 5.5134 16.3176 6.49091 17.188 7.30779L20.5892 3.98691C18.5003 2.04528 15.782 0.853516 12.5281 0.853516C7.81461 0.853516 3.74387 3.55839 1.76208 7.49519L5.65872 10.5215C6.63632 7.61575 9.3412 5.5134 12.5281 5.5134Z" fill="#EB4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_1008">
                                    <rect width="24.1861" height="24.1861" fill="white" transform="translate(0.476562 0.853516)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </span>
                </a>
                <a
                    className="mb-3 flex  w-16 h-12 items-center justify-center rounded  px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    {/* <!-- X --> */}
                    <span className="me-2 fill-white [&>svg]:h-6 [&>svg]:w-6">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7269 22.1439C23.4415 22.1439 24.0209 21.6126 24.0209 20.9574V1.83166C24.0209 1.17622 23.4414 0.645142 22.7269 0.645142H1.86682C1.15193 0.645142 0.572693 1.1763 0.572693 1.83166V20.9573C0.572693 21.6126 1.15193 22.1438 1.86682 22.1438H22.7269V22.1439ZM16.7516 22.1439V13.8184H19.7995L20.2558 10.5738H16.7515V8.50228C16.7515 7.56289 17.036 6.92275 18.5053 6.92275L20.3792 6.92195V4.02C20.0551 3.98053 18.9426 3.89217 17.6486 3.89217C14.9468 3.89217 13.097 5.4042 13.097 8.18105V10.5738H10.0413V13.8184H13.097V22.1438H16.7516V22.1439Z" fill="#0F2E68" />
                        </svg>

                    </span>
                </a>

                <a
                    className="mb-3 flex  w-16 h-12 items-center justify-center rounded  px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-yellow-400 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    href="#!"
                    role="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    {/* <!-- X --> */}
                    <span className="me-2 fill-white [&>svg]:h-6 [&>svg]:w-6">
                        <svg width="24" height="29" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3466 13.1612C17.336 11.2529 18.2111 9.81256 19.9822 8.75183C18.9912 7.35311 17.4942 6.58356 15.5175 6.43277C13.6462 6.28718 11.601 7.5091 10.8525 7.5091C10.0618 7.5091 8.2485 6.48477 6.82527 6.48477C3.88394 6.53156 0.758118 8.79862 0.758118 13.4107C0.758118 14.7731 1.01114 16.1822 1.51717 17.6329C2.19188 19.5412 4.62718 24.2209 7.1679 24.1429C8.49624 24.1117 9.43452 23.2121 11.1635 23.2121C12.8397 23.2121 13.7095 24.1429 15.1907 24.1429C17.7525 24.1065 19.9558 19.8531 20.5989 17.9397C17.1621 16.3434 17.3466 13.2599 17.3466 13.1612ZM14.3631 4.62328C15.8021 2.93859 15.6703 1.40468 15.6282 0.853516C14.3578 0.926311 12.8872 1.70626 12.049 2.6682C11.1266 3.69774 10.5836 4.97166 10.6996 6.40677C12.0754 6.51077 13.3299 5.81401 14.3631 4.62328Z" fill="black" />
                        </svg>


                    </span>
                </a>

            </div>

            <div className="flex pt-4">
                <p className="pl-6  text-gray-500">একাউন্ট নেই?</p> <a className="ml-3 text-black" href="#">একাউন্ট তৈরী করুন </a>
            </div>
        </>

    );
}