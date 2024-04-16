'use client'
import React, { useState, useEffect } from "react";
import LoginReg from "@/components/common/loginform";
import LoginSignInOtpLeftPartDesign from "../common/login-signup-otp-left-design";
import { arial } from "../fonts/arial";
import SignInOption from "../signInOption/SignInOption";
import DropDown from "../common/dropDown";
import { apiBasePath } from "@/utils/constant";
import { useRouter } from "next/navigation";

const RecoveryPage = () => {

    const router = useRouter();

    const [number, setnumber] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [isValidUser, setIsValidUser] = useState(false);

    const [state, setState] = useState({
        password: '',
        retypePassword: '',
        error: null,
        isDisabled: true, // Button initially disabled
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };




    const validate = () => {
        let isValid = true;
        setState((prevState) => ({ ...prevState, error: null }));


        if (!state.password) {
            setState((prevState) => ({ ...prevState, error: 'Password is required.' }));
            isValid = false;
        } else if (state.password.length < 8) {
            setState((prevState) => ({ ...prevState, error: 'Password must be at least 8 characters long.' }));
            isValid = false;
        }

        if (state.password !== state.retypePassword) {
            setState((prevState) => ({ ...prevState, error: 'Passwords do not match.' }));
            isValid = false;
        }

        setState((prevState) => ({ ...prevState, isDisabled: !isValid })); // Enable button if all validations pass
    };


    const handleNumberhange = (e) => {
        setnumber(e.target.value);
    };



    // function to call api for Number

    async function fetchData() {
        try {
            const response = await axios.get(`${apiBasePath}/`);
            setIsValidUser(true)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = () => {
        setIsSend(true)

        fetchData();

    };


    //  update password
    const handleUpdatePassword = async () => {

        validate(); // Perform validation before submitting

        if (!state.isDisabled) {
            try {
                const response = await axios.post(`${apiBasePath}/`, {
                    password: state.password,

                });
                // Handle successful signup response (e.g., redirect)
                router.push(`/`)
            } catch (error) {
                console.error('pasword recovery:', error);
                // Handle signup error (e.g., display error message)
            }
        }

    }


    return (
        <>
            <section className="all__post__sec__wrap">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={`flex ${arial.variable} font-arial`}>
                                <div className="flex flex-row  bg-[#FCF7E8] shadow-md">
                                    {/* left part */}
                                    <div className=" w-[640px]   ">
                                        <LoginSignInOtpLeftPartDesign />
                                    </div>
                                    {/* right part */}
                                    <div className="relative w-[640px]  bg-white rounded-l-[46px] text-black grid place-items-center ">

                                        <div className="grid place-items-center ">

                                            <div>
                                                <div className="text-[48px] mb-5  font-semibold text-yellow-500">
                                                    Recover Password
                                                </div>
                                                <div className="  grid place-items-center">
                                                    {!isSend && <div className="mb-4 ">
                                                        <input
                                                            onChange={handleNumberhange}
                                                            value={number}
                                                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                            id="phone"
                                                            type="number"
                                                            placeholder="Enter Number"
                                                            required
                                                        />
                                                    </div>
                                                    }
                                                    {!isSend &&
                                                        <button
                                                            type="button"
                                                            onClick={handleSubmit}
                                                            className=" mt-8 px-5 bg-[#F9A106] rounded-full text-[35px] text-white w-[368px] h-[75px] "
                                                        >
                                                            Send Number
                                                        </button>

                                                    }

                                                    {/* after send number */}


                                                    {isValidUser &&
                                                        <>

                                                            <div className="mb-5">

                                                                <input
                                                                    id="password"
                                                                    type="password"
                                                                    name="password"
                                                                    placeholder="Password"
                                                                    value={state.password}
                                                                    onChange={handleChange}
                                                                    onBlur={validate}
                                                                    className="w-[559px] h-[62px] p-4 bg-[#FCF7E8]  rounded-2xl   text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                                                    required
                                                                />

                                                            </div>
                                                            <div className="mb-5">

                                                                <input
                                                                    type="password"
                                                                    name="retypePassword"
                                                                    placeholder="Retype Password"
                                                                    value={state.retypePassword}
                                                                    onChange={handleChange}
                                                                    onBlur={validate}
                                                                    className="w-[559px] h-[62px] p-4 bg-[#FCF7E8]  rounded-2xl   text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                                                    required
                                                                />
                                                                {state.error && <p className="error">{state.error}</p>}

                                                            </div>
                                                            <button
                                                                onClick={handleUpdatePassword}
                                                                className=" mt-8 px-5 bg-[#F9A106] rounded-full text-[35px] text-white w-[368px] h-[75px] "
                                                            >
                                                                Update Password
                                                            </button>

                                                        </>
                                                    }
                                                    {
                                                        !isValidUser && isSend && <>
                                                        <div>
                                                            <p>Sorry Your Phone number is not registred</p>
                                                            <p>Kindly use a valid phone number</p>
                                                        </div>
                                                        <div className="pt-5">
                                                        <a
                                                        href="/recoverpassword"
                                                        className=" bg-[#F9A106] rounded-2xl text-[25px] text-white px-5 py-2"
                                                        >Recover Password</a>

                                                        </div>
                                                       
                                                        </>
                                                    }




                                                </div>
                                            </div>

                                        </div>
                                        <div className="absolute top-7 right-0 pr-2">
                                            <DropDown />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecoveryPage;
