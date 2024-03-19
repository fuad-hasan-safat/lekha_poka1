"use client"
import React, { useState } from 'react';
import { arial } from "../fonts/arial";

const ContactForm = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        message: ''
    });

    // Handle input change
    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Do something with the form data, for example, send it to an API
        console.log('Form data submitted:', formData);
        // Reset form fields after submission
        setFormData({
            fullName: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className='space-y-5'>
                <div className={`${arial.variable} font-arial`}>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder='Full Name'
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className='bg-[#FCF7E8] w-[559px] h-[62px] rounded-3xl p-3'
                    />
                </div>
                <div className={`${arial.variable} font-arial`}>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder='Phone Number'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        className='bg-[#FCF7E8] w-[559px] h-[62px] rounded-3xl p-3'
                    />
                </div>
                <div className={`${arial.variable} font-arial`}>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Your Message...'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className='bg-[#FCF7E8] w-[559px] h-[257px] rounded-3xl p-3'
                    />
                </div>
                <button
                    type="submit"
                    className={`${arial.variable} font-arial bg-[#F9A106] w-[559px] h-[75px] rounded-3xl text-[36px] text-white`}
                >
                    Send
                </button>
            </div>

        </form>
    );
};

export default ContactForm;