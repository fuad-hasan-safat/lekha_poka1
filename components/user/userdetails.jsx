'use client'
import React, { useState } from 'react';
import Classes from './profile.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { apiBasePath } from '@/utils/constant';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';
import moment from 'moment';



export default function UserDetails({ sex = '---', birthdate = '---', location = '---', mail = '---', phone = '---' , userID=''}) {

    const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());
    const [fullName, setFullName] = useState('');
    const [designation, setDesignation] = useState('');
    const [profileStatus, setProfileStatus] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [gender, setGender] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);


    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        const formattedDate = moment(startDate).format('DD-MM-YYYY');

        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('designation', designation);
        formData.append('profileStatus', profileStatus);
        formData.append('gender', gender);
        formData.append('dob', formattedDate);
        formData.append('address', address);
        formData.append('email', email);
        formData.append('phone', phoneNumber);
        formData.append('user_id', userID);
        // const token = JSON.parse(localStorage.getItem('token'));
        try {
            const response = await fetch(`${apiBasePath}/profile`, {
                method: 'POST',
                headers: {
                    // 'x-access-token': token,
                },
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Profile updated successfully:', data);
                router.push(`/user/${userID}`);
            } else {
                console.error('Failed to update profile:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Set preview image
            };
            reader.readAsDataURL(file);
        }
    };


    return <div>
        <div className="text-[28px] text-[#F9A106]">বিস্তারিত</div>
        <div className="text-[20px] text-[#737373] divide-y w-[200px] space-y-3 ">
            <div className="flex flex-row space-x-2">
                <img
                    src="/images/usericons/sexicon.svg"
                />
                <p>{sex}</p>
            </div>

            <div className="flex flex-row space-x-2 pt-2">
                <img
                    src="/images/usericons/birthdate.svg"
                />
                <p>{birthdate}</p>
            </div>
            <div className="flex flex-row space-x-2 pt-2">
                <img
                    src="/images/usericons/location.svg"
                />
                <p>{location}</p>
            </div>
            <div className="flex flex-row space-x-2 pt-2">
                <img
                    src="/images/usericons/email.svg"
                />
                <p>{mail}</p>
            </div>
            <div className="flex flex-row space-x-2 pt-2">
                <img
                    src="/images/usericons/phone.svg"
                />
                <p>{phone}</p>
            </div>
            <button
                className="bg-[#F9A106]  text-white py-2 px-4 rounded"
                onClick={toggleModal}>
                Edit Profile
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    <div className="bg-white rounded-lg z-999 w-500">
                        <div className={`${Classes.user__profile__wrap}`}>
                            <div className="flex justify-end">
                                <button className="text-gray-700 hover:text-gray-900" onClick={toggleModal}>
                                    Close
                                </button>
                            </div>
                            <div className='profile__image__upload'>
                                <div
                                    onDragEnter={(e) => setHighlight(true)}
                                    onDragLeave={(e) => setHighlight(false)}
                                    onDragOver={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onDrop={(e) => handleUpload(e)} className={`${Classes.upload}${highlight ? ' is-highlight' : ''}`} style={{ backgroundImage: `url(${preview || '/default-image.jpg'})` }}>
                                    <form className='my__form'>
                                        <div className='upload__button'>
                                            <input
                                                type='file'
                                                className='upload__file'
                                                accept='image/*'
                                                onChange={(e) => handleUpload(e)}
                                            />
                                            <button className='button'><i className='ri-camera-line'></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='profile__form__wrap'>
                                <form onSubmit={handleProfileUpdate}>
                                    <div className='profile__input'>
                                        <label>First name</label>
                                        <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' />
                                    </div>
                                    <div className='profile__input'>
                                        <label></label>
                                        <input type='text' value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder='Designation' />
                                    </div>
                                    <div className='profile__input'>
                                        <label></label>
                                        <input type='text' value={profileStatus} onChange={(e) => setProfileStatus(e.target.value)} placeholder='ProfileStatus' />
                                    </div>
                                    
                                    <div className='profile__input'>
                                        <label>Address</label>
                                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
                                    </div>
                                    <div className='profile__input'>
                                        <label>Phone Number</label>
                                        <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' />
                                    </div>
                                    <div className='profile__input'>
                                        <label>Email</label>
                                        <input type='text' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter Email' />
                                    </div>
                                    <div className='profile__input'>
                                        <label>Date</label>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className='edit__radio__btn clearfix'>
                                        <div className='radio-container' style={{ paddingLeft: '0' }}>
                                            <label>Gender</label>
                                        </div>
                                        <div className='radio-container'>
                                            <input type='radio' id='male' name='gender' className='custom-radio' value='male' onChange={(e) => setGender(e.target.value)} />
                                            <label htmlFor='male' className='custom-radio-label'>Male</label>
                                        </div>
                                        <div className='radio-container'>
                                            <input type='radio' id='female' name='gender' className='custom-radio' value='female' onChange={(e) => setGender(e.target.value)} />
                                            <label htmlFor='female' className='custom-radio-label'>Female</label>
                                        </div>
                                    </div>
                                    <div className='form__submit'>
                                        <button
                                        className='bg-[#F9A106] hover:bg-orange-600'
                                         type='submit'>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}