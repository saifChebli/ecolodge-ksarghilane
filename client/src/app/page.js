'use client'
import HeroSection from "@/components/HeroSection";
import AboutUs from "../components/AboutUs";
import HotelBanner from "@/components/HotelBanner";
import Services from "@/components/Services";
import Rooms from "../components/Rooms";
import Suits from "@/components/Suits";
import EcoSection from "@/components/EcoSection";
import DesertBanner from "@/components/DesertBanner";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
    const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashDone(true);
    }, 3100); // Match SplashScreen duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {!isSplashDone && <SplashScreen />}
     {
      isSplashDone && (

        <div>

      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutUs /></div>
      <div id="hotel"><HotelBanner /></div>
      <div id="services"><Services /></div>
      <div id="rooms"><Rooms /></div>
      <div id="suits"><Suits /></div>
      <div id="eco"><EcoSection /></div>
      <div id="desert"><DesertBanner /></div>
      <Footer />
      </div>
    )
  }
    </>
  );
}

