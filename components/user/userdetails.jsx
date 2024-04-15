'use client'




export default function UserDetails({ sex = 'পুরুষ', birthdate = '০৩ মে ১৯৮৬', location = 'ঢাকা, বাংলাদেশ', mail = 'abcd@gmail.com', phone = '০১৯৫৬৮৭৪৫২' }) {

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
            <button>Edit Profile</button>
        </div>
    </div>
}