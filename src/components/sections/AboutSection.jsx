"use client";

import { companyName } from "@/libs/data";
import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const AboutSection = ({ company = companyName }, route) => {
  const pathname = usePathname();
  const displayCompany =
    route !== "/" && company !== "Repair Site 6" ? company : "";

  // Define services for water-heater and general cases
  const waterHeaterServices = [
    "Solar Water Heater Repair",
    "Leaking Pipes and Connections",
    "Faulty Temperature Sensors",
    "Improper Installation Issues",
    "Blocked or Clogged Pipes",
    "Circulation Pump Not Working",
  ];

  const generalServices = [
    `${displayCompany} Washing Machine Repair`,
    `${displayCompany} Dryer Repair`,
    `${displayCompany} Dishwasher Repair`,
    `${displayCompany} Stove/Cooker Repair`,
    `${displayCompany} Gas Oven Repair`,
    `${displayCompany} Fridge Repair`,
  ];

  // Determine which services to display
  const services =
    pathname === "/companies/water-heater"
      ? waterHeaterServices
      : generalServices;

  return (
    <section id="about" className="w-full py-20 bg-secondary/20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/static/technician-fixing.png"
              alt="About Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Dedicated to Excellence in Repair
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We are dedicated to providing exceptional home appliance repair
              services with a focus on quality and customer satisfaction. Our team
              of skilled technicians is experienced in diagnosing and fixing a
              wide range of appliances, ensuring your home runs smoothly.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Services We Offer:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <CallAndWhatsappButton company={company} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
