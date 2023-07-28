/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        marromclaro:'#8D4925',
        marromedio:'#5D2417',
        marromescuro:'#320000',
        marromescurohover:'#210505',
        bege:'#FFD9AB',
        begehover:'#D9B891',

      },

    },
  },
  plugins: [],
}
