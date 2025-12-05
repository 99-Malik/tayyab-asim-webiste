import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ title, desc, imgUrl, slug, company = companyName }) => {
  return (
    <div className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 gap-4">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-3">
          <Link
            href={`/#${slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <CallAndWhatsappButton company={company} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
