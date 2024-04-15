"use client";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";

const MyFooter = () => {
  const icon: string = "";
  return (
    <div className={`bg-black pt-36`}>
      <section className="all__post__sec__wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="flex flex-row space-x-28  mt-[100px]  ">
                <div className="">
                  <Logo
                    icon="/images/image.png"
                    width={202}
                    height={70}
                    alt="footer logo"
                  />
                </div>
                <div className="flex  h-[477]  justify-center  space-x-36">
                  <div className="flex flex-row space-x-20">
                    <div className="text-white font-kongsa-Mj ">
                      <FooterLink
                        title="গুরুত্বপূর্ণ লিঙ্ক"
                        links={[
                          { url: "/golpo", label: "গল্প" },
                          { url: "/kobita", label: "কবিতা" },
                          { url: "/probondho", label: "প্রবন্ধ" },
                        ]}
                      />
                    </div>

                    <div className="text-white">
                      <FooterLink
                        title="গুরুত্বপূর্ণ লিঙ্ক"
                        links={[
                          { url: "/privacy", label: "প্রাইভেসি" },
                          { url: "/conditions", label: "শর্তাবলি" },
                          { url: "/sitemaps", label: "সাইটম্যাপ" },
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
                    <div className="text-white">
                      <SocialLink
                        title="Social"
                        links={[
                          { label: "/images/footer/fb.svg" },
                          { label: "/images/footer/ig.svg" },
                          { label: "/images/footer/tweet.svg" },
                          { label: "/images/footer/youtube.svg" },
                          { label: "/images/footer/wordpress.svg" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="grid justify-center">
                  <hr
                    className={` my-12 h-[0.3px] w-[1073px] border-t-0 bg-gray-400  dark:bg-white/10 justify-center content-center`}
                  />
                </div>
                <div className="grid justify-center">
                  <div className="text-white pb-24 pt-3">
                    {" "}
                    © 2024 Lekhapoka | All Rights Reserved{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFooter;
