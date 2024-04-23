"use client";
import React, { useState } from "react";
import Link from "next/link";

import Logo from "../common/Logo";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";

const MyFooter = () => {
  const icon: string = "";
  return (
    <div className={`bg-black pt-[65px]`}>
      <section className="all__post__sec__wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftr__main__content">
                <ul className="reset-list clearfix">
                  <li>
                    <div className="ftr__logo">
                      <Logo
                        icon="/images/image.png"
                        width={202}
                        height={70}
                        alt="footer logo"
                      />
                   </div>
                  </li>
                  <li>
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
                  </li>
                  <li>
                    <div className="text-white">
                      <FooterLink
                        title="গুরুত্বপূর্ণ লিঙ্ক"
                        links={[
                          { url: "/", label: "প্রচ্ছদ" },
                          { url: "/contacts", label: "যোগাযোগ" },
                          { url: "/aboutus", label: "আমাদের সম্পর্কে" },
                        ]}
                      />
                    </div>
                  </li>
                  <li>
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
                  </li>
                  <li>
                    <div className="ftr__socail__icon text-white">
                        <SocialLink
                          title="Social"
                          links={[
                            { label: "/images/footer/fb.svg",  url:'#' },
                            { label: "/images/footer/ig.svg", url:'#' },
                            { label: "/images/footer/tweet.svg",  url:'#' },
                            { label: "/images/footer/youtube.svg",  url:'#' },
                            { label: "/images/footer/wordpress.svg" ,  url:'#'},
                          ]}
                        />
                      </div>
                  </li>
                </ul>
              </div>
              <div className="ftr__btm text-white text-center">
                <p>© 2024 Lekhapoka | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFooter;
