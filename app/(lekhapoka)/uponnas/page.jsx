import SobUponnas from '@/components/uponnas/sobUponnas'

export const metadata = {
  title: "উপন্যাস",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <div className=" text-black">
      <SobUponnas/>
    </div>
  );
}
