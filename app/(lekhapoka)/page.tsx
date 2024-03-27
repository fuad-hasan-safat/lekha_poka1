"use client"
import Procchod from "@/components/procchod/Procchod";
import Carousel1 from "@/components/slider/Carousel1";
import { sliderPosts } from "@/public/demo-data/data";
import axios from "axios";
import { useEffect, useState } from "react";


// export const metadata: Metadata = {
//   title: "প্রচ্ছদ",
//   description: "লেখার পোকা",
// };
export default function Home() {

  const [data, setData] = useState(sliderPosts); // State to store fetched data
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(``); // Replace with your API endpoint
        setData(response.data); // Set the fetched data in state
      } catch (error: any) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function on component mount
  }, []); 


  return (
    <>
        <Carousel1 sliderPosts={sliderPosts} />
        <Procchod />
    </>
  );
}
