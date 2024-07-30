import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idm Clone by Muhammad Ishaq", 
  description: "Search your favorite movies and tv shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Providers>
        <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <Navbar/>
        {children}
        </Suspense>
        </Providers>
        
        </body>
    </html>
  );
}
