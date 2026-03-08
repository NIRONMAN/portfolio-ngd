import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import NavBar from "@/components/NavBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Niranjan Dabhade | Portfolio",
  description: "Portfolio of Niranjan Dabhade, full-stack developer and AI enthusiast.",
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

      <body className={`${manrope.variable} ${cormorant.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
