import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2A3C44",
        backgroundTransparent: "#1A282F",
        red:{
          light:"#FF575F",
          normal:"#FF464F",
          extreme:"#623A42"
        },
        orange:{
          normal:"#FF8A34",
          light:"#FF974A",
          extreme:"#624D3B"
        },
        yellow:{
          normal:"#FFBC25",
          light:"#FFC542",
          extreme:"#625B39"
        },
        lighBlue:{
          normal:"#25C685",
          light:"#3DD598",
          extreme:"#286053"
        },
        blue:{
          normal:"#005DF2",
          light:"#0062FF",
          extreme:"#163E72"
        },
        perple:{
          normal:"#6952DC",
          light:"#755FE2",
          extreme:"#393D69"
        },
        grey:{
          normal:"#475E69",
          light:"#96A7AF",
          extreme:"#30444E"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
