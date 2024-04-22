import React from 'react'
import UserProfile from '@/components/userprofile/UserProfile'



export const metadata= {
  title: "প্রোফাইল",
  description: "লেখার পোকা",
};

export default function Home(context) {
  const {slug} = context.params;
  return (
    <>
    <UserProfile slug={slug}/>
    </>
  )
}
