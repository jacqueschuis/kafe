import "./globals.css";
import { Roboto_Flex } from "next/font/google";

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
      <body className={`${robotoFlex.variable} font-sans dark`}>
        {children}
      </body>
    </html>
  );
}
