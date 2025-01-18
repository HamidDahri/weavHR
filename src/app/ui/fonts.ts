import { Outfit } from "next/font/google";

const outfit_init = Outfit({
  style: ["normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--outfit",
});

export const GoogFonts = {
  Outfit: outfit_init,
};
