"use client";

import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const ExpertiseSection = ({ company = companyName }) => {
    const benefits = [
        "Certified & Insured Technicians",
        "Genuine Manufacturer Parts",
        "90-Day Service Warranty",
        "Upfront Flat-Rate Pricing",
        "Eco-Friendly Repair Practices",
        "24/7 Customer Support",
    ];

    return (
        <section className="w-full py-20 bg-secondary/20">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why We Are The Best</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                                Unmatched Expertise in Appliance Repair
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We don't just fix appliances; we extend their lifespan. Our team combines years of experience with the latest diagnostic technology to provide repairs that last.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <CallAndWhatsappButton company={company} />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image
                            src="/static/repair-tools.png"
                            alt="Professional Repair Tools"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Success Rate</p>
                                    <p className="text-3xl font-bold text-foreground">98.5%</p>
                                </div>
                                <div className="h-10 w-[1px] bg-border" />
                                <div>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Happy Clients</p>
                                    <p className="text-3xl font-bold text-foreground">10k+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
