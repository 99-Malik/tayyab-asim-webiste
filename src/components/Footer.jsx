"use client";
import { companyName, getData } from "@/libs/data";
import NavLink from "./header/NavLink";
import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = ({ company = companyName }) => {
  const pathname = usePathname();

  return (
    <footer className="w-full bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-4">
            {company === "Siemens" ? (
              <Link href="/companies/siemens">
                <Image
                  src="/static/siemens.svg"
                  width={140}
                  height={45}
                  alt="Siemens"
                  className="brightness-0 invert"
                />
              </Link>
            ) : company === "Bosch" ? (
              <Link href="/companies/bosch">
                <Image
                  src="/static/bosch.svg"
                  width={140}
                  height={45}
                  alt="Bosch"
                  className="brightness-0 invert"
                />
              </Link>
            ) : company === "Samsung" ? (
              <Link href="/companies/samsung">
                <Image
                  src="/static/samsung.svg"
                  width={110}
                  height={45}
                  alt="Samsung"
                  className="brightness-0 invert"
                />
              </Link>
            ) : company === "Lg" ? (
              <Link href="/companies/lg">
                <Image src="/static/lg.svg" width={90} height={45} alt="LG" className="brightness-0 invert" />
              </Link>
            ) : (
              <Link href="/" className="text-2xl font-bold text-primary">
                {company}
              </Link>
            )}
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your trusted partner for professional home appliance repairs. We bring expertise and reliability to your doorstep.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <div className="flex flex-col gap-2">
              {getData(company).slice(0, 6).map((service, index) => (
                <Link
                  key={index}
                  href={`/#${service.slug}`}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link>
              <Link href="/#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link>
              <Link href="/#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <CallAndWhatsappButton company={company} />
              <p className="text-sm text-muted-foreground">
                Available 24/7 for emergency repairs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {company}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
