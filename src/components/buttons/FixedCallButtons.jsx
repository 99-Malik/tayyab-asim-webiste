"use client";

import { dialPhone, phoneNumber, sendMessage } from "@/libs/data";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function FixedCallButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-0 right-0 z-[100] flex justify-center pointer-events-none transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <div className="flex items-center gap-4 bg-background/80 backdrop-blur-md border border-border/50 p-2 rounded-full shadow-2xl pointer-events-auto hover:scale-105 transition-transform duration-300">
        <button
          onClick={dialPhone}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 overflow-hidden"
          aria-label="Call Us"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <Phone className="w-6 h-6 animate-pulse" />
        </button>

        <div className="h-8 w-[1px] bg-border/50" />

        <button
          onClick={sendMessage}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-all duration-300 overflow-hidden"
          aria-label="WhatsApp Us"
        >
          <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
