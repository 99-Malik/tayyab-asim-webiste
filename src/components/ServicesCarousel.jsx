"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { companyName, getData } from "@/libs/data";
import { getSolarData } from "@/libs/solardata"; // Import solar data
import { usePathname } from "next/navigation";

const ServicesCarousel = ({ company = companyName }) => {
  const pathname = usePathname();

  const services =
    pathname === "/companies/water-heater"
      ? getSolarData(company) // Use solar data for water-heater route
      : getData(company); // Use general data for other routes

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              className="lg:basis-1/2"
              key={service.slug}
            >
              <ServiceCard
                imgUrl={service.imgUrl}
                title={service.title}
                desc={service.description}
                company={company}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
