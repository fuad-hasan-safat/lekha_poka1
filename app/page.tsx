import Procchod from "@/app/procchod/page";
import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";
import Carousel from "@/components/slider/Carousel";
import Carousel1 from "@/components/slider/Carousel1";
// import Slider from "@/components/slider/MySlider";
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import BootstrapSlider from "@/components/slider/BootsrtapSlider";

export default function Home() {
   const images = [
    '/sliderPics/woman.png',
    '/sliderPics/woman1.png',
    '/sliderPics/woman2.png',
  ];
  
const posts = [
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 1",
    caltion: "আফজাল হোসেনের প্রেমের কবিতা",
    image: '/sliderPics/woman.png',
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
  },
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 2",
    caltion: "আফজাল হোসেনের প্রেমের কবিতা",
     image: '/sliderPics/woman1.png',
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
  },
  {
    id: "xyz",
    title: "তোমার জন্য স্বপ্ন আঁকি 3",
    caltion: "আফজাল হোসেনের প্রেমের কবিতা",
     image: '/sliderPics/woman2.png',
    discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
  },
];
  return (
    <main>
      <MyNavbar/>
      <Carousel1 images={images} sliderPosts={posts}/>
      {/* <Carousel/> */}
      {/* <MusicBar/> */}
      
      <Procchod/>
      <MyFooter/>
    </main>
  )
}
