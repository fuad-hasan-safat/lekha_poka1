"use client"
import Sidebar from "@/components/sidebar/Sidebar";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import FullPost from '@/components/common/fullContent'
import { fetchData } from '@/app/api/api'


export default function PostDetails(context) {
  const { slug } = context.params;
  console.log('----slug-------', slug)

  const [data, setData] = useState([]); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors
 


  useEffect(() => {
    console.log('in side use effect')


    async function fetchDataAsync() {
      try {
        const result = await fetchData(`http://192.168.88.248:3002/getpost/${slug}`);
        console.log('result         ->>>>>>>>>>>>>>>>', result.object)
        setData(result.object);
      } catch (error) {
        // Handle error
      }
    }

    fetchDataAsync();


    // fetch(`http://192.168.88.248:3002/getpost/${slug}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data.object[0]);
    //     //setHTML({ __html: data.object.content })
    //     console.log('----get single post-------', data.object)
    //   })
    //   .catch(error => console.error("Error fetching data:", error));

  }, []);
 
  //console.log('----DDDDDDDDD AAAAAAAAA TTTTTTTT AAAAAAAAAAA-------', data)

  return (
    <div className="flex flex-col pt-[115px]">
      <div>
        <Image
          src={'/images/pages-banner-svg/jiboni.png'}
          height={380}
          width={1920}
          alt={"kobita banner"}
        />
      </div>
      <div className="flex flex-row">
        
      <FullPost content={data.content} title={data.title} writer={data.writer} />
       
        <div className="w-sidebarwidth">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
