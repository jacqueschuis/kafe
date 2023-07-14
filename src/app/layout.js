import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Head from "next/head";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-rf",
});

export const metadata = {
  title: "kafe",
  description: "get the best brew",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#331800" />
      </Head>
      <body className={`${robotoFlex.variable} font-sans`}>{children}</body>
    </html>
  );
}
