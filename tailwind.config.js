/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      width: {
        'moblie-w': '343px',
      },
      colors: {
        'regal-black': 'rgba(151, 151, 151, 1)',
        'regal-black-100': 'rgba(216, 216, 216, 1)',
        'regal-black-200': 'rgba(51, 51, 51, 1)',
        'regal-black-300': 'rgba(227, 229, 238, 1)',
        'regal-black-400': 'rgba(214, 225, 230, 1)',
        'regal-gary': 'rgba(96, 98, 102, 1)',
        'regal-gary-100': 'rgba(242, 247, 254, 1)',
        'regal-gary-200': 'rgba(226, 227, 227, 1)',
        'regal-gary-300': 'rgba(230, 230, 230, 1)',
        'regal-green': 'rgba(80, 211, 148, 1)',
        'regal-blue': 'rgba(0, 111, 255, 1)',
        'regal-blue-3': 'rgba(0, 111, 255, 0.3)',
        'regal-blue-4': 'rgba(77, 154, 255, 1)',
      },
      backgroundImage: {
        banner: "url('/img/home_banner.png')",
        'liner-blue': 'linear-gradient( 270deg, rgba(0,111,255,0) 0%, rgba(0,111,255,0.1) 100%)',
        'liner-blue-reverse': 'linear-gradient( 270deg, rgba(0,111,255,0.1) 0%, rgba(0,111,255,0)  100%);'
      },
      backgroundPosition: {
        'center-7': '70%',
        'left-66-center': 'left 66% center',
        'left-82-center': 'left 82% center',
        'left-8-center': 'left 8% center',
        'left-86-center': 'left 86% center',
      },
      boxShadow: {
        'regal-xl': '0 21px 15px -22px rgba(0, 0, 0, 0.11)',
        'regal-2xl': '0 30px 20px -14px rgba(9, 3, 73, 0.08)',
        'regal-3xl': '0px 76px 51px -36px rgba(9, 3, 73, 0.08)',
        'regal-4': '0px 32px 24px -25px rgba(0, 14, 77, 0.06)',
      },
      borderRadius: {
        '4xl': '36px',
      },
    },
  },
  plugins: [],
};
