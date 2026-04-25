import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RouteLoader } from "@/components/RouteLoader";
import { Chatbot } from "@/components/chatbot";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ChefStation | Contemporary Restaurant",
    template: "%s | ChefStation",
  },
  description:
    "ChefStation — seasonal plates, wood-fired favorites, and crafted cocktails in a warm, refined dining room.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 font-sans text-stone-900 antialiased">

        {/* ✅ WRAP EVERYTHING HERE */}
        <RouteLoader>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </RouteLoader>
      <Chatbot />  
      </body>
    </html>
  );
}