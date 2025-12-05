"use client";

import { companyName } from "@/libs/data";
import Image from "next/image";

const RepairGallery = ({ company = companyName }) => {
    const images = [
        {
            src: "/static/technician-fixing.png",
            alt: "Expert Technician Fixing Appliance",
            caption: "Expert Diagnostics",
        },
        {
            src: "/static/happy-family.png",
            alt: "Happy Family in Kitchen",
            caption: "Restoring Home Comfort",
        },
        {
            src: "/static/repair-tools.png",
            alt: "Professional Repair Tools",
            caption: "Precision Tools",
        },
        {
            src: "/static/emergency-van.png",
            alt: "Emergency Service Van",
            caption: "Fast Response",
        },
    ];

    return (
        <section className="w-full py-20 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Excellence in Action
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how we bring quality and reliability to every repair job.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RepairGallery;
