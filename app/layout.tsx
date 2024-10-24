import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Strahinja Zlatanovic",

  authors: [
    {
      name: "Strahinja Zlatanovic",
      url: "https://www.linkedin.com/in/strahinja-zlatanovic/",
    },
  ],
  description:
    "Tech enthusiast who builds and improves web apps that people love to use.",
  openGraph: {
    title: "Strahinja Zlatanovic",
    description:
      "Fullstack Engineer with lots of hands on experience and mission to secure your success in no time. Contact me today, and wake up happier tomorrow!",
    url: "https://www.zlatanovics.com/",
    siteName: "Strahinja's portfolio",
    images: [
      {
        url: "https://www.zlatanovics.com/mewarmer.jpg/",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden bg-gray-950 text-gray-400`}
      >
        <Analytics />
        <Navbar />
        {children}
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "0.75rem",
              backgroundColor: "#111827",
              padding: "1.5rem 3rem",
              gap: 10,
              color: "#d1d5db",
            },
            duration: 1500,
          }}
        />
        {/* <div className="fixed inset-0 bg-gradient-to-t from-black/40 pointer-events-none to-transparent"></div> */}
      </body>
    </html>
  );
}
