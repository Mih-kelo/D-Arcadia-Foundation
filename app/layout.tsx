import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D Arcadia Foundation - Empowering Communities",
  description: "Creating sustainable change through education, healthcare, and economic empowerment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClass = geistSans.variable + " " + geistMono.variable;
  
  return (
    <html lang="en">
      <body className={bodyClass}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
