import { Inter } from "next/font/google";
import "./globals.css";
import { GoogFonts } from "./ui/fonts";
const inter = Inter({ subsets: ["latin"] });
import "flowbite";
export const metadata = {
  title: "WEAVHR",
  description: "Streamlining HR with Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />

        <link
          rel="icon"
          href="/images/favicon/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/images/favicon/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>WEAVHR</title>
      </head>
      <body className={`${GoogFonts.Outfit.variable}`}>{children}</body>
    </html>
  );
}
