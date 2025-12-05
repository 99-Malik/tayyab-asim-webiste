"use client";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import React from "react";
import ServiceCard from "../ServiceCard";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const OurServices = ({ company = companyName }) => {
  const pathname = usePathname();

  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : getData(company);

  return (
    <section id="services" className="w-full py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Professional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of repair services for all major home appliances.
            Our certified technicians are ready to help you get back to your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imgUrl={service.imgUrl}
              title={service.title}
              desc={service.description}
              slug={service.slug}
              company={company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
