'use client'
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

function ScrollFollowingButton() {
  const [top, setTop] = useState(500); // initial top position

  useEffect(() => {
    const handleScroll = () => {
      // Move button to follow scroll (add offset)
      setTop(window.scrollY + 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   const [open, setOpen] = useState(false);
   
  
  
  
  
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

  return (
    <>
    <ReservationForm open={open} onClose={onClose} />

    <button
    className="font-semibold bg-black flex items-center justify-center text-white p-4 rounded-full group  transition-all duration-300 overflow-hidden hover:px-5"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "60px",
        border: "none",
        cursor: "pointer",
        transition: "width 0.3s ease, padding 0.3s ease",
        overflow: "hidden",
        whiteSpace: "nowrap",
        zIndex:999
      }}
       onClick={showDrawer}

    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500">Reservation</span>
      <ArrowRightIcon />
    </button>
        </>

  );
}

export default ScrollFollowingButton;