"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, dialPhone, getData, phoneNumber } from "@/libs/data";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { phoneSvg } from "../icons";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus:outline-none">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-background border-l border-border w-[80%] sm:w-[350px]"
        >
          <SheetHeader>
            <SheetTitle className="py-5 text-left text-foreground">{company}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center bg-muted/50 rounded-xl mb-5 p-3 gap-3">
            <SheetClose asChild>
              <NavLink title="Home" href="/" />
            </SheetClose>
            <SheetClose asChild>
              <NavLink title="About" href="/#about" />
            </SheetClose>
            <div className="relative flex flex-col">
              <button
                className="text-start text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
              </button>
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all text-sm font-light ease-linear duration-200 pl-4 border-l border-border ml-1",
                  servicesDropdown
                    ? "my-2 py-2 h-auto opacity-100"
                    : "h-0 opacity-0 overflow-hidden"
                )}
              >
                {getData().map((service, index) => (
                  <Link key={index} href={`/#${service.slug}`} className="text-muted-foreground hover:text-primary">
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <SheetClose asChild>
              <NavLink title="Contact" href="/#contact" />
            </SheetClose>
          </div>
          <CallAndWhatsappButton />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
