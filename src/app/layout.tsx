import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Blog App",
  description: "Developed by Ahmed Noorani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#E8E1B1] dark:bg-slate-800 text-gray-900 dark:text-slate-50 ${geistSans.variable} ${geistMono.variable}`}
      >
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content area */}
        <main className="max-w-4xl mx-auto p-6 min-h-screen">{children}</main>
        
        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
