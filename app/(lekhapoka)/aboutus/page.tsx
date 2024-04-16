import Image from "next/image";

export const metadata = {
  title: "আমাদের কথা",
  description: "লেখার পোকা",
};
export default function Home() {
  return (
    <>
      <section>
        <section className="all__post__sec__wrap">
          <div>
            <Image
              src={'/images/pages-banner-svg/aboutus.svg'}
              height={380}
              width={1920}
              alt={"kobita banner"}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              </div>
            </div>
          </div>
        </section>

        <section className="py-[54px]">
          <div className="container">
            <div >

              <p className=" text-center text-gray-700 [word-spacing:8px] text-[28px]">লেখার পোকা  হলো কবিতা, গান, প্রবন্ধ গল্প এবং জীবনী লেখা প্রকাশের একটি ওয়েব <br/> সাইট।
                  যেটা অভিব্যক্তির একটি সুন্দর রূপ যা ব্যক্তিদের তাদের চিন্তাভাবনা, আবেগ এবং <br/> 
                  অভিজ্ঞতা সৃজনশীল এবং শৈল্পিক উপায়ে প্রকাশ করতে দেয়। </p>

            </div>
          </div>
        </section>

        <section >
          <div className="container">
            <div className="flex flex-row">
              <div className="columns-6">
                  My name
              </div>
              <div className="columns-6">
                    your name
              </div>
            </div>
          </div>
        </section>

      </section>
    </>
  );
}
