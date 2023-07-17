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
      <body
        className={`${robotoFlex.variable} font-sans dark bg-gradient-to-b dark:bg-gradient-to-b from-brown-200 via-brown-100 to-brown-200 dark:from-brown-900 dark:via-orange-900 dark:to-brown-900`}
      >
        {children}
      </body>
    </html>
  );
}
