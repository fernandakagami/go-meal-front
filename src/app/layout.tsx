import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { NavBar } from "@/shared/NavBar";
import { Footer } from "@/shared/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Go Meal",
  description: "A delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased`}
      >
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
