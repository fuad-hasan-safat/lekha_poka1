"use client";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";

const MyFooter: React.FC = () => {
  const icon: string = "";
  return (
    <div className=" bg-black ">
      <div className="flex  h-[477]  items-center pt-16">
        <div className="p-40 pt-1">
          <Logo
            icon="/images/image.png"
            width={202}
            height={70}
            alt="footer logo"
          />
        </div>

        <div className="flex space-x-11">
          <div className="text-white font-kongsa-Mj ">
            <FooterLink
              title="গুরুত্বপূর্ণ লিঙ্ক"
              links={[
                { url: "https://example.com", label: "গল্প" },
                { url: "https://docs.example.com", label: "কবিতা" },
                { url: "https://docs.example.com", label: "প্রবন্ধ" },
              ]}
            />
          </div>

          <div className="text-white">
            <FooterLink
              title="গুরুত্বপূর্ণ লিঙ্ক"
              links={[
                { url: "https://example.com", label: "প্রাইভেসি" },
                { url: "https://docs.example.com", label: "শর্তাবলি" },
                { url: "https://docs.example.com", label: "সাইটম্যাপ" },
              ]}
            />
          </div>

          <div className="text-white">
            <FooterLink
              title="যোগাযোগ"
              links={[
                { url: "", label: "ফোনঃ +৮৮০ ১৩৬৫৪৭৬৫৪" },
                { url: "", label: "ইমেইলঃ xyz@gmail.com" },
                { url: "", label: "ঠিকানাঃ ঢাকা, বাংলাদেশ" },
              ]}
            />
          </div>
        </div>

        <div className="items-center">
          <div className="text-white ml-36">
            <SocialLink
              title="Social"
              links={[
                { label: "ri-facebook-fill" },
                { label: "ri-instagram-line" },
                { label: "ri-twitter-line" },
                { label: "ri-youtube-line" },
                { label: "ri-wordpress-line" },
              ]}
            />
          </div>
        </div>
        
      </div>
      <div className="grid justify-center">
        <div className="text-white mb-24 pt-12"> © 2024 Lekhapoka | All Rights Reserved </div>
      </div>
     
     
     

    </div>
  );
};

export default MyFooter;
