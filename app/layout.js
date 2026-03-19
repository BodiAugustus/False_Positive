import { Analytics } from "@vercel/analytics/next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "False Positive | A Southern Boy's Descent into the Global Drug War",
  description:
    "The explosive true story of Tristan Nettles. From Mississippi home invasions to death row in Thailand — one man's fight for justice. 100% of author proceeds help free Ashley Oosthuizen. Pre-order now and join the fight.",

  keywords: [
    "False Positive",
    "Tristan Nettles",
    "True Crime Memoir",
    "Global Drug War",
    "Ashley Oosthuizen",
    "Free Ashley",
    "Wrongful Imprisonment",
    "Thailand Prison",
    "Ukraine War",
    "War Against Russia",
    "War story",
    "Histria Books",
    "Simon & Schuster",
    "True Crime Book",
    "Ketamine, MDMA, LSD",
    "Party Drugs",
  ],

  openGraph: {
    title:
      "False Positive – The Explosive True Story of Tristan Nettles and Ashley Oosthuizen",
    description:
      "Ashley Oosthuizen's freedom is on the line. This gripping true-crime memoir is more than a book — it's a movement. Every pre-order helps fight for her freedom. #FreeAshleyOosthuizen",
    url: "https://FalsePositiveNovel.com", // ← change to your actual domain when ready
    siteName: "False Positive | Tristan Nettles",
    images: [
      {
        url: "/cover2.jpg",
        width: 1200,
        height: 1800,
        alt: "False Positive book cover – Tristan Nettles",
      },
      {
        url: "/images/banner2.webp",
        width: 1600,
        height: 900,
        alt: "False Positive collage banner – Southern Boy's Descent into the Global Drug War",
      },
    ],
    locale: "en_US",
    type: "book",
    book: {
      authors: ["https://www.tristannettles.com"],
      isbn: "9781592117772",
      releaseDate: "2026-10-20",
      tags: ["True Crime", "Memoir", "Drug War", "War Story", "Adventure"],
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "False Positive by Tristan Nettles – Pre-order Now",
    description:
      "Every copy helps free Ashley Oosthuizen from wrongful imprisonment. The raw, unflinching true story the world will be talking about.",
    images: ["/cover2.jpg"],
    creator: "@tristan_nettles",
  },

  alternates: {
    canonical: "https://FalsePositiveNovel.com", // ← update with your live domain
  },

  authors: [
    {
      name: "Tristan Nettles",
      url: "https://www.tristannettles.com",
    },
  ],

  publisher: "Histria Books / Simon & Schuster",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  metadataBase: new URL("https://FalsePositiveNovel.com"), // ← change to your real domain
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} font-sans bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
