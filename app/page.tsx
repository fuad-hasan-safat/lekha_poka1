import Procchod from "@/components/procchod/Procchod";
import MyNavbar from "@/components/navbar/Navbar";
import MyFooter from "@/components/footer/Footer";
import Carousel1 from "@/components/slider/Carousel1";

import AudioPlayer from "@/components/musicbar/AudioPlayer";
import Layout from "@/components/layout/layout";

export default function Home() {

  const posts = [
    {
      id: "xyz",
      title: "তোমার জন্য স্বপ্ন আঁকি",
      caltion: "আফজাল হোসেনের প্রেমের কবিতা",
      image: '/sliderPics/woman1.png',
      discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
    },
    {
      id: "xyz",
      title: "অমৃতায়ন",
      caltion: "বিনয় দত্ত",
      image: '/sliderPics/omritayon.png',
      discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
    },
    {
      id: "xyz",
      title: "এখানে রবীন্দ্রনাথ কখনো আসেনি ",
      caltion: "কল্পকাহিনী",
      image: '/sliderPics/woman2.png',
      discription: `নারীর প্রেম তার কাব্যে ফেলেছে প্রভাব। হয়ে উঠেছেন একাধারে দ্রোহ ও প্রেমের কবি। তার জীবনে এসব প্রেমের ছোঁয়া বাংলা সাহিত্যকে দিয়েছে অনন্যমাত্রা| এসব কবিতায় রয়েছে মোহমুগ্ধতা, অনবদ্য সৌন্দর্য, বিরহ-যাতনা। `,
    },
    
  ];

  return (
    <>
      <Layout>
       
        <Carousel1 sliderPosts={posts} />
        <div>
          <AudioPlayer />
        </div>
        <Procchod />
        
      </Layout>

    </>

  )
}
