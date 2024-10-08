import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from 'next-themes';
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niranjan Dabhade",
  description: "This is the portfolio of Niranjan Dabhade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en" suppressContentEditableWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={inter.className} >
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>

        <NavBar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
