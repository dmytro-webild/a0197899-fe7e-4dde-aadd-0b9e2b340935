import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Oké Poké Bowl Casablanca | Fresh & Flavorful Poké Bowls',
  description: 'Experience the best poké bowls in Casablanca. Fresh ingredients, customizable options, and healthy meals delivered to your door. Order now!',
  openGraph: {
    "title": "Oké Poké Bowl Casablanca",
    "description": "Fresh & Flavorful Poké Bowls in Casablanca. Healthy, customizable meals for delivery and takeout.",
    "url": "https://okepokebowl.ma",
    "siteName": "Oké Poké Bowl",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/assortment-healthy-sea-food_23-2148926809.jpg",
        "alt": "Delicious Fresh Poké Bowl"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Oké Poké Bowl Casablanca | Fresh & Flavorful Poké Bowls",
    "description": "Experience the best poké bowls in Casablanca. Fresh ingredients, customizable options, and healthy meals delivered to your door. Order now!",
    "images": [
      "http://img.b2bpic.net/free-photo/assortment-healthy-sea-food_23-2148926809.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
