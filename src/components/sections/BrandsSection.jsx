"use client";

import Image from "next/image";

const BrandsSection = () => {
    const brands = [
        { name: "Samsung", src: "/static/samsung.svg" },
        { name: "LG", src: "/static/lg.svg" },
        { name: "Bosch", src: "/static/bosch.svg" },
        { name: "Siemens", src: "/static/siemens.svg" },
        // Reusing existing logos for demo purposes, in a real scenario we'd have more
        { name: "Samsung", src: "/static/samsung.svg" },
        { name: "LG", src: "/static/lg.svg" },
        { name: "Bosch", src: "/static/bosch.svg" },
        { name: "Siemens", src: "/static/siemens.svg" },
    ];

    return (
        <section className="w-full py-12 bg-background border-y border-border overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 md:px-8 mb-8 text-center">
                <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">Trusted by Leading Brands</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap gap-16 items-center">
                    {brands.map((brand, index) => (
                        <div key={index} className="relative w-32 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {brands.map((brand, index) => (
                        <div key={`dup-${index}`} className="relative w-32 h-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
