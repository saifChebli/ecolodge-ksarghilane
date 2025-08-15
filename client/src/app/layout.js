import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter , Allura } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Toaster } from "react-hot-toast";
import ScrollFollowingButton from "@/components/ScrollFollowingButton";

const inter = Inter({
  weight: "400",
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  variable: "--font-allura-sans",
  subsets: ["latin"],
});
export const metadata = {
  title: "Ecolodge Ksar Ghilane",
  description:
    "Experience an authentic desert getaway at Ecolodge Ksar Ghilane. Stay in eco-friendly lodges, enjoy local cuisine, camel rides, and unforgettable Sahara sunsets in Tunisia.",
  keywords: [
    "Ecolodge Ksar Ghilane",
    "Sahara Desert Hotel",
    "Tunisia Desert Stay",
    "Eco-friendly Accommodation",
    "Ksar Ghilane Lodge",
    "Desert Camping Tunisia",
    "Luxury Tent Tunisia",
  ],
  authors: [{ name: "Ecolodge Ksar Ghilane", url: "https://ecolodgeksarghilane.com.tn" }],
  openGraph: {
    title: "Ecolodge Ksar Ghilane | Desert Stay in Tunisia",
    description:
      "Escape to the Sahara at Ecolodge Ksar Ghilane — eco-lodges, desert tours, and unforgettable nights under the stars.",
    url: "https://ecolodgeksarghilane.com.tn",
    siteName: "Ecolodge Ksar Ghilane",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecolodge Ksar Ghilane | Desert Stay in Tunisia",
    description:
      "Eco-friendly desert lodging in Tunisia with camel rides, local cuisine, and Sahara adventures.",
  },
  icons: {
    icon: "/logo-icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${allura.variable} antialiased px-8`}>
        <Toaster />
        <Navbar />
        <ScrollFollowingButton />
        {children}
      </body>
    </html>
  );
}
