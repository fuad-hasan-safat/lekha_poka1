"use client"

import { apiBasePath } from "@/utils/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type logreg = {
    logreg: string;
    btntext: string;
}

interface SignupState {
    fullName: string;
    mobileNumber: string;
    password: string;
    retypePassword: string;
    error: string | null;
    phoneError: string | null;
    isDisabled: boolean;
}
export default function SigninForm({ logreg, btntext }: logreg) {
    const router = useRouter()
    const [state, setState] = useState<SignupState>({
        fullName: '',
        mobileNumber: '',
        password: '',
        retypePassword: '',
        error: null,
        phoneError: null,
        isDisabled: true, // Button initially disabled
    });

    const [numberPrefix, setNumberPrefix] = useState('88');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    // validate phone number 
    const validateMobileNumber = (mobileNumber: string) => {
        const regex = /^01\d{9}$/; // Regex to match '01' followed by 9 digits
        return regex.test(mobileNumber);
    };

    const validate = () => {
        console.log(`--------------->>>>>>SSSS ${numberPrefix}${state.password}`)
        let isValid = true;
        setState((prevState) => ({ ...prevState, error: null, phoneError: null }));

        if (!state.mobileNumber) {
            setState((prevState) => ({ ...prevState, phoneError: 'Mobile number is required.' }));
            isValid = false;
        } else if (!validateMobileNumber(state.mobileNumber)) {
            setState((prevState) => ({ ...prevState, phoneError: 'Mobile number must start with 01 and be 11 digits long.' }));
            isValid = false;
        }

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

    const handleSubmit = async () => {
        validate(); // Perform validation before submitting

        if (!state.isDisabled) {

            try {
                const response = await axios.post(`${apiBasePath}/register`, {
                    name: state.fullName,
                    phone: `${numberPrefix}${state.mobileNumber}`,
                    password: state.password,
                    usertype: "user",
                });
                // Handle successful signup response (e.g., redirect)
                router.push(`/`)
            } catch (error: any) {
                console.error('Signup error:', error);
                // Handle signup error (e.g., display error message)
                alert(error.message);
            }
        }
    };

    return (
        <>
            <div >

                <div className="text-[48px] mb-5  font-semibold text-yellow-500">
                    {logreg}
                </div>
                <div className="  grid place-items-center">
                    <div className="mb-4 ">

                        <input
                            id="username"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={state.fullName}
                            onChange={handleChange}
                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4 ">

                        <input
                            id="phonenumber"
                            type="number"
                            name="mobileNumber"
                            placeholder="Enter Phone Number (01-XXXXXXXXX)"
                            value={state.mobileNumber}
                            onChange={handleChange}
                            onBlur={validate}
                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                       {state.phoneError && state.mobileNumber && <p className="error text-red-500">{state.phoneError}</p>}
                    </div>
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
                    <div className="">

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
                        onClick={handleSubmit}
                        className=" mt-8 px-5 bg-[#F9A106] rounded-full text-[35px] text-white w-[368px] h-[75px] "
                    >
                        {btntext}
                    </button>

                </div>
            </div>
        </>
    );
}