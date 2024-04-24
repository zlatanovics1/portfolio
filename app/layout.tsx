import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Strahinja Zlatanovic",
  description: "Pixel Perfect Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-gray-950 text-gray-400 pt-10`}
      >
        <Navbar />
        {children}
        <Footer />
        <div className="fixed inset-0 bg-gradient-to-t from-black/40 pointer-events-none to-transparent"></div>
      </body>
    </html>
  );
}
