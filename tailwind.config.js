/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/dist/flowbite.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#993AE2",
        primaryDark: "#662797",
        success50: "#ECFDF3",
        success700: "#027A48",
        ebonClay: "#1D2939",
        modernGray900: "#121926",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
