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
  title: "Xentra Pax ",
  description: "Xentra Pax ",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Xentra Pax ",
    description: "Xentra Pax ",
    siteName: "Xentra Pax",
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
        <div className="h-[84px] bg-white"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
