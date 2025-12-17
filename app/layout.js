import './globals.css';
import { Roboto } from 'next/font/google';
import Header from "./components/Header";
import Footer from './components/Footer'
import Script from "next/script";
// import { Inter } from 'next/font/google';

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-inter',
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick what you need
});


export const metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
  description: "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",
  keywords: [
    "Global Import Export Trade Data",
    "Import Export Data",
    "Export Import Data",
    "Global Import Export Data Provider",
    "Global Import Export Database",
    "Import Data",
    "Export Data",
    "Shipments Data",
    "Customs Data",
    "Import Trade Data",
    "Export Trade Data",
    "Importers",
    "Exporters",
    "Buyers",
    "Suppliers"
  ],
  alternates: {
    canonical: "https://eximtradedata.com/"
  },
  openGraph: {
    title: "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
    description: "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",
    url: "https://eximtradedata.com/",
    siteName: "Exim Trade Data",
    type: "website",
    images: [
      {
        url: "/logo.png", // Replace with the actual OG image if different
        alt: "Exim Trade Data Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Exim Trade Data - Global Import Export Trade Data Provider | Import Export Data",
    description: "Get global import-export trade data from 200+ countries with Exim Trade Data to drive informed decisions, optimize supply chains, and boost sales.",
    site: "@eximtradedata",  // Replace with the actual Twitter handle if available
    creator: "@eximtradedata", // Replace with the actual Twitter handle if available
    images: ["/logo.png"], // Same as OpenGraph image
  },
  other: {
    "google-site-verification": "VSKuLBADMQzDxe8NHGirJ-TQgOMuWnw3ywzkGbQ-plQ",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="font-sans">

        <Script id="gtm-init" strategy="afterInteractive">
          {`...`}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WC3TFBQ989"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`...`}
        </Script>

        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
