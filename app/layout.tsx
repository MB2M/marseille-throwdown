import "@/styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/mt24/header";
import { Footer } from "@/components/mt24/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const strasua = localFont({
  src: "./fonts/strasua.ttf",
  display: "swap",
  variable: "--font-strasua",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${strasua.variable}`}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
