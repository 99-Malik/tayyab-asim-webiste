import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

const OneService = ({
  title,
  description,
  commonProblems = [],
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <div
      id={slug}
      className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white text-center px-4">{title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6 flex-grow">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="bg-secondary/50 rounded-xl p-5 border border-border/50">
          <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
            <AlertCircle className="w-5 h-5 text-primary" />
            <span>Common Problems</span>
          </div>
          <ul className="space-y-2">
            {commonProblems.map((problem, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <p className="text-sm text-muted-foreground mb-4 italic">
            Facing these issues? We can help!
          </p>
          <CallAndWhatsappButton
            company={company}
            className="w-full justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default OneService;
