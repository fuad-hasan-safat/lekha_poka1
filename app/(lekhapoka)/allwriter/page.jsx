import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import AllWriterList from '@/components/allwriterlist/AllWriterList'


export const metadata = {
    title: "লেখক তালিকা",
    description: "লেখার পোকা",
  };

export default function () {
  return (
    <section>
        <div className='container'>
            <div className='flex flex-row'>
                <div className='w-[70%]'>
                    <AllWriterList/>

                </div>
                <div className='w-[30%]'>
                    <Sidebar/>
                </div>
            </div>
        </div>
    </section>
  )
}
