"use client";

import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import Image from "next/image";

const EmergencyService = ({ company = companyName }) => {
    return (
        <section className="w-full py-20 bg-background relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/static/emergency-van.png"
                    alt="Emergency Repair Van"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
            </div>

            <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 w-fit">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-red-500 text-sm font-bold uppercase tracking-wider">Emergency Service Available</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                            Appliance Breakdown? <br />
                            <span className="text-primary">We're On The Way!</span>
                        </h2>

                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Don't let a broken appliance ruin your day. Our emergency response team is ready to deploy immediately. Fast, reliable, and just a phone call away.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <CallAndWhatsappButton company={company} className="w-full sm:w-auto" />
                        </div>
                    </div>

                    {/* Stat Card */}
                    <div className="bg-card border border-border p-8 rounded-2xl shadow-2xl max-w-sm w-full backdrop-blur-sm bg-card/80">
                        <div className="text-center space-y-2">
                            <span className="text-5xl font-bold text-primary">60</span>
                            <p className="text-xl font-semibold text-foreground">Minutes</p>
                            <p className="text-muted-foreground">Average response time for emergency calls in your area.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyService;
