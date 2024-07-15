
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
        backfaceVisibility:"hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      
      boxShadow: {
        'custom': '0 5px 5px 5px rgba(13, 110, 253, 0.6)',
      },
    },
    fontFamily: {
      fontFamily:{
        'Raleway':["Raleway", 'sans-serif'],
       'Fredericka': ["Fredericka the Great", 'serif'] ,
      },
    },
  },
  plugins: [Myclass],
};

