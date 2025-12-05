"use client";

import { getData, companyName } from "@/libs/data";
import { getSolarData } from "@/libs/solardata";
import OneService from "./OneService";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ServiceDetails = ({ company = companyName }) => {
  const pathname = usePathname();

  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company)
      : getData(company);

  return (
    <section
      id="service-details"
      className="w-full py-20 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Detailed Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Service Highlights & Common Issues
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover a wide array of repair services designed to meet the unique
            needs of your home appliances.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <OneService
              key={service.slug}
              title={service.title}
              description={service.description}
              commonProblems={service.commonProblems}
              slug={service.slug}
              company={company}
              imgUrl={service.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
