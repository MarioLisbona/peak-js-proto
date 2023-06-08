"use client";
import "./globals.css";
import { Providers } from "@/app/providers";
import Footer from "./components/Footer";
import { Metadata } from "next";
import NavbarTemplate from "./components/Navbar/NavbarTemplate";
import Navbar from "./components/Navbar/OldIndex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
