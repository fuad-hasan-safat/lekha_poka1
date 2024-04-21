'use client'
import { apiBasePath } from '@/utils/constant';
import React, { useState, useEffect } from 'react'
import LekhokDetails from '../common/lekhok';
import SidebarPostDivider from '../common/sidebarpostdivider';

export default function AllWriterList() {
    const [lekhokList, setLekhokList] = useState([]);


    useEffect(() => {
        fetch(`${apiBasePath}/writers`)
            .then((response) => response.json())
            .then((data) => {
                setLekhokList(data);
                console.log("-----------", data);
                console.log("-----------", setLekhokList);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className='container'>
            <div className='w-max mt-[50px]'>
                <div className='text-[26px] text-[#FCD200]'>
                    <p> লেখকদের তালিকা </p>
                    <hr className='bg-[#fcac00]'></hr>
                </div>
                <div className="pt-[23px] ">
                    {lekhokList.length &&
                        lekhokList.map((item, index) => (
                            <>
                                <div className="pb-3">
                                    <LekhokDetails
                                        key={index}
                                        image={`${apiBasePath}/${item.image}`}
                                        writer={item.name}
                                        id={item._id}
                                        lifeCycle={`${item.birth_date} - ${item.expiry_date}`}
                                    />
                                </div>
                                <div className="pb-3">
                                    {index <= lekhokList.length - 2 ? <SidebarPostDivider /> : ""}
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </div>
    )
}
