import { redirect } from "next/navigation";

export const dynamic = "force-static";
export const revalidate = 3600;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const metadata = {
  title: 'Global Import-Export Products Directory (A-Z) | Exim Trade Data',
  description:
    'Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.',
  keywords: [
    'Global import-export directory',
    'Import export products A to Z',
    'International trade products',
    'Global trade directory',
    'Import export product list',
    'Alphabetical list of export items',
    'Import export product information',
    'Global trade data',
  ],
  alternates: {
    canonical: 'https://eximtradedata.com/global-products',
  },
  openGraph: {
    title: 'Global Import-Export Products Directory (A-Z) | Exim Trade Data',
    description:
      'Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.',
    url: 'https://eximtradedata.com/global-products',
    type: 'website',
    siteName: 'Exim Trade Data',
    images: [
      {
        url: 'https://eximtradedata.com/images/logo.png',
        alt: 'Exim Trade Data Logo',

      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // better visibility
    title: 'Global Import-Export Products Directory (A-Z) | Exim Trade Data',
    description:
      'Explore Exim’s global import-export product directory from A to Z with detailed trade information for international businesses.',
    site: '@eximtradedata',
    creator: '@eximtradedata',
    url: 'https://eximtradedata.com/global-products',
    images: ['https://eximtradedata.com/images/logo.png'],
  },
};

export default async function Page() {
  // 🔥 Redirect the user immediately
  redirect("/global-products/product-a/country-vietnam/type-import/pg-1");
}