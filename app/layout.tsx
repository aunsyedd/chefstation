import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Caveat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RouteLoader } from "@/components/RouteLoader";
import { Chatbot } from "@/components/chatbot";
import "react-phone-input-2/lib/style.css";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chef Station | Desi Food in Aziziyah, Jeddah",
    template: "%s | Chef Station",
  },
  description:
    "Chef Station — desi food, fast bites and full meals at great prices. BBQ, karahi, handi, rolls and more on Prince Majid Road, Aziziyah, Jeddah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${script.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <Navbar />
        <RouteLoader>
          <main className="flex-1">{children}</main>
        </RouteLoader>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
