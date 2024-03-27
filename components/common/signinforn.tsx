"use client"

import axios from "axios";
import { useState } from "react";

type logreg = {
    logreg: string;
    btntext: string;
}

export default function SigninForm({ logreg, btntext }: logreg) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const validatePhoneNumber = (number: any) => {
        const tenDigitRegex = /^\d{10}$/;
        const thirteenDigitRegex = /^88\d{11}$/;

        if (!tenDigitRegex.test(number) && !thirteenDigitRegex.test(number)) {
            setErrorMessage('Invalid phone number format. Please enter a 10-digit number starting with 1 or a 13-digit number starting with 88.');
            return false;
        } else if (tenDigitRegex.test(number) && number[0] !== '1') {
            setErrorMessage('10-digit phone number must start with 1.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const validatePassword = (password: any) => {
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must be at least 8 characters and contain at least one uppercase letter.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!validatePhoneNumber(phoneNumber) || !validatePassword(password)) {
            return;
        }

        const data = {
            fullName,
            phoneNumber,
            password,
        };

        try {
            const response = await axios.post('http://your-backend-api-url/signup', data);
            console.log('Signup response:', response.data);
        } catch (error) {
            console.error('Signup error:', error);
            setErrorMessage('An error occurred during signup. Please try again later.');
        }

        // Reset input fields (optional)
        setFullName('');
        setPhoneNumber('');
        setPassword('');
    };


    return (
        <>
            <div >

                <div className="text-[48px] mb-5  font-semibold text-yellow-500">
                    {logreg}
                </div>
                <div className="  grid place-items-center">
                    {errorMessage && <div className="p-6  text-lg">{errorMessage}</div>}

                    <div className="mb-4 ">

                        <input
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}

                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Full Name"
                            required />
                    </div>
                    <div className="mb-4 ">

                        <input
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}

                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phonenumber"
                            type="tel"
                            placeholder="Phone Number"
                            required />
                    </div>
                    <div className="">

                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-[559px] h-[62px] p-4 bg-[#FCF7E8]  rounded-2xl   text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="password"
                            required />

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