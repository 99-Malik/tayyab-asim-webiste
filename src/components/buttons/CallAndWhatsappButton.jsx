"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { PhoneCall, MessageCircle } from "lucide-react";

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  return (
    <div className={cn("flex items-center gap-3 text-nowrap", className)}>
      <a
        href={`tel:${dialPhone}`}
        className="flex-1 min-w-[120px] border border-primary/30 hover:border-primary text-primary hover:bg-primary/5 transition-all ease-in duration-200 h-10 px-4 rounded-lg flex items-center gap-2 justify-center font-medium"
      >
        <PhoneCall className="w-4 h-4" />
        <span>Call Now</span>
      </a>
      <a
        href={`https://wa.me/${dialPhone}?text=${sendMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-w-[120px] bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all ease-in duration-200 h-10 px-4 rounded-lg flex items-center gap-2 justify-center font-medium shadow-sm hover:shadow-md"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default CallAndWhatsappButton;
