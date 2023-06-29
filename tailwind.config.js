/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: {"min":"0px", "max":"767px"},

      md: {"min":"768px", "max":"1024px"},
      // => @media (min-width: 768px) { ... }

      lg:{"min": "1024px", "max": "2000px"},
      // => @media (min-width: 1024px) { ... }
      xl:{"min":"768px", "max":"2000px"}

    },
    extend: {
      backgroundImage:{
        "womenm":"url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/M_index_woman.jpg?t=20230620020706')",
        "women":"url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/D_index_woman.jpg?t=20230620020706')",
        "men": "url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/D_index_man.jpg?t=20230620020706')",
        "teen": "url('https://static.bershka.net/4/static/itxwebstandard/images/worldwide/D_index_bskteen.jpg?t=20230620020706')"
      },
      backgroundPosition: {
        "top-4":"center top 25%",
      },       
      fontFamily:{
        "Whyte":['Whyte', "sans-serif"],
        "BlinkMacSystemFont":["BlinkMacSystemFont", "sans-serif"],
        "apple-system":["apple-system", "sans-serif"]
      },
  },
  plugins: [],
}

}