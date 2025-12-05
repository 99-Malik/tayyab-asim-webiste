"use client";
import { companyName } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Repair Site 5" : company;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 mx-auto">
        <div className="flex items-center gap-2">
          {dynamicCompany === "Siemens" ? (
            <Link href="/companies/siemens">
              <Image
                src="/static/siemens.svg"
                width={120}
                height={40}
                alt="Siemens"
                className="brightness-0 invert"
              />
            </Link>
          ) : dynamicCompany === "Bosch" ? (
            <Link href="/companies/bosch">
              <Image
                src="/static/bosch.svg"
                width={120}
                height={40}
                alt="Bosch"
                className="brightness-0 invert"
              />
            </Link>
          ) : dynamicCompany === "Samsung" ? (
            <Link href="/companies/samsung">
              <Image
                src="/static/samsung.svg"
                width={100}
                height={40}
                alt="Samsung"
                className="brightness-0 invert"
              />
            </Link>
          ) : dynamicCompany === "Lg" ? (
            <Link href="/companies/lg">
              <Image src="/static/lg.svg" width={80} height={40} alt="LG" className="brightness-0 invert" />
            </Link>
          ) : dynamicCompany === "Repair Site 5" ? (
            <Link href="/companies/water-heater" className="text-xl font-bold text-primary">
              {dynamicCompany}
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
              {dynamicCompany}
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <NavLink title="Home" href="/" />
            <NavLink title="About" href="/#about" />
            <ServicesDropdown company={dynamicCompany} />
            <NavLink title="Contact" href="/#contact" />
          </nav>
          <div className="flex items-center gap-4">
            <CallAndWhatsappButton />
          </div>
        </div>

        <div className="md:hidden">
          <Sidebar company={dynamicCompany} />
        </div>
      </div>
    </header>
  );
};

export default Header;
