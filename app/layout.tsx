import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niranjan Dabhade",
  description: "This is the portfolio of Niranjan Dabhade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        height:'screen'
      }}>
        <NavBar></NavBar>
        {children}</body>
    </html>
  );
}
