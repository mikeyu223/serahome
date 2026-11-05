import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SeraHome — Home cleaning in the East Bay",
  description:
    "Calm, plant-based cleaning for East Bay homes. Same cleaner every visit, nothing missed, and a re-clean guarantee. Oakland, Berkeley, Alameda, and nearby.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-forest">
        {children}
      </body>
    </html>
  );
}
