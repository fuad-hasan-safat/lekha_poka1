import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'w-1920': '1920px',
        'footerWidth': '1920px',
        'footerLineHeight': '1073px',
        'sidebarwidth': '29.1666%',
        'maincontainwidth': '70.833%',

      },
      height: {
        'h-102': '102px',
        'footerHeight': '477px',
        'mainbodyHeight': '3790px',
        '108': '108px',
        '812': '812px',
      },
      colors: {
        primary: "#505050"
      },
       fontFamily: {
        kangsa: ['var(--font-kangsa)'],
        arial:['var(--font-Arimo)'],
      }
    },

  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")]
}
export default config
