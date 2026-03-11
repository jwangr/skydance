import {
  Aboreto,
  Arimo,
  Bebas_Neue,
  EB_Garamond,
  Geist,
  Geist_Mono,
  Marcellus,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/NavBar/NavBar2";
import { Metadata } from "next";

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const arimo = Arimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

export const metadata = {
  metadataBase: new URL("https://skydancestudio.com.au"),
  verification: {
    google: "Ku8kZIazKbR8HrZVwUkVx3mi3Fum7wXmcZ_Nj1COThQ",
  },

  title: {
    default: "Sky Dance Studio | Dance Classes in Auburn, Sydney NSW",
    template: "%s | Sky Dance Studio",
  },

  description:
    "Sky Dance Studio in Auburn, Sydney offers dance classes for kids and adults including RAD ballet, jazz, lyrical, hip hop, K-pop, Chinese dance and acrobatics. Join a supportive community and build confidence through dance.",

  keywords: [
    "Sky Dance Studio",
    "dance studio Sydney",
    "dance classes Auburn NSW",
    "ballet classes Sydney",
    "RAD ballet Auburn",
    "kids dance classes Sydney",
    "adult dance classes Sydney",
    "hip hop dance classes Sydney",
    "Kpop dance classes Sydney",
    "Chinese dance Sydney",
    "acrobatics classes Sydney",
  ],

  openGraph: {
    title: "Sky Dance Studio",
    description:
      "Professional dance studio in Auburn, Sydney offering ballet, jazz, hip hop, K-pop and Chinese dance classes for children and adults.",
    url: "https://skydancestudio.com.au",
    siteName: "Sky Dance Studio",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1000,
        height: 600,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${aboreto.variable} ${arimo.variable} ${bebas.variable} ${ebGaramond.variable} ${geistSans.variable} ${geistMono.variable} ${marcellus.variable} ${montserrat.variable}`}
    >
      <body className="font-body" style={{ backgroundColor: "var(--bg2)" }}>
        <Navbar2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
