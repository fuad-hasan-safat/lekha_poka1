import localFont from "next/font/local";
export const kangsa = localFont({
  src: [
    {
      path: "../../public/assets/fonts/KongshoMJ.ttf",
      weight: "400",
    },
  ],
  variable: "--font-kangsa",
});