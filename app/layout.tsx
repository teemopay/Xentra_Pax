import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HORIZONTETECH SpA ",
  description: "HORIZONTETECH SpA ",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HORIZONTETECH SpA ",
    description: "HORIZONTETECH SpA ",
    siteName: "HORIZONTETECH SpA",
    images: [
      {
        url: "https://www.horizoninvest.cl/favicon.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head />
        {children}
        {/* 公共footer */}
        <Footer />
      </body>
    </html>
  );
}
