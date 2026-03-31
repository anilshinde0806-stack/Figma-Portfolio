import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anil Shinde Automobile Service Manager",
  description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products that balance user needs and business goals. 3+ years of industry experience.",
  keywords: [
    "Anil Shinde",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "WebHR Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Anil Shinde" }],
  creator: "Anil Shinde",
  publisher: "Anil Shinde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anilshinde0806.pythoanywhere.com",
    title: "Anil Shinde- Automobile Service Manager",
    description: "A self-taughtteam leader at Shreeji Automart ( TATA Passanger Car Service Dealer ). Creating meaningful and delightful digital products.",
    siteName: "Anil Shinde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Shinde- Automobile Service Manager",
    description: "A self-taughtteam leader at Shreeji Automart ( TATA Passanger Car Service Dealer ).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="#" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
