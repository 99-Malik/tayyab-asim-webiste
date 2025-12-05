"use client";

import { companyName } from "@/libs/data";
import { CalendarCheck, Wrench, Smile } from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const HowItWorks = ({ company = companyName }) => {
    const steps = [
        {
            icon: CalendarCheck,
            title: "1. Book Your Service",
            description: "Contact us via phone or WhatsApp to schedule a convenient time. We offer flexible slots and same-day service.",
        },
        {
            icon: Wrench,
            title: "2. Expert Repair",
            description: "Our certified technician arrives fully equipped to diagnose and fix the issue on the spot with genuine parts.",
        },
        {
            icon: Smile,
            title: "3. Relax & Enjoy",
            description: "Your appliance is back to perfect working order. Enjoy peace of mind with our service warranty.",
        },
    ];

    return (
        <section className="w-full py-20 bg-secondary/30">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Simple Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Getting your appliance fixed shouldn't be complicated. We've made it as easy as 1-2-3.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-background border-4 border-secondary flex items-center justify-center mb-6 shadow-lg group-hover:border-primary transition-colors duration-300 relative z-10">
                                <step.icon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <CallAndWhatsappButton company={company} />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
