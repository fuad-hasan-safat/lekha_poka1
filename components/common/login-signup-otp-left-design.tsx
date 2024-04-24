'use client'
export default function LoginSignInOtpLeftPartDesign() {
  return (
    <>
      <div className="">
        <div className="login__logo">
          <img
            src="/images/svgs/lekhapokaBlack.svg"
            height={72}
            width={205}
            alt="logo"
          />
        </div>
        <div className="login__lft__dsc grid place-items-center">
          <div className="login__lft__text text-black text-6xl">
            <h2 className="pt-[30px]">Enjoy The world of <span className="text-[#F9A106]">Poem</span> anytime !</h2>
          </div>

          <div>
            <img
              src="/images/svgs/loginPageImage.svg"
              height={546}
              width={346}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
