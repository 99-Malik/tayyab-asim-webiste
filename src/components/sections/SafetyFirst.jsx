"use client";

import { Shield, UserCheck, Lock } from "lucide-react";

const SafetyFirst = () => {
    return (
        <section className="w-full py-16 bg-secondary/5">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Safety First</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                            Your Safety is Our Priority
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We take every precaution to ensure a safe and secure service experience. Our technicians are rigorously vetted and trained to follow strict safety protocols.
                        </p>

                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <UserCheck className="w-8 h-8 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground text-lg">Background Checked Staff</h3>
                                    <p className="text-muted-foreground">Every technician undergoes a thorough background check before joining our team.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-foreground text-lg">Fully Insured Service</h3>
                                    <p className="text-muted-foreground">We carry comprehensive liability insurance for your protection and peace of mind.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-30" />
                        <div className="relative bg-card border border-border p-8 rounded-3xl shadow-xl">
                            <Lock className="w-16 h-16 text-primary mb-6" />
                            <h3 className="text-2xl font-bold text-foreground mb-4">Secure & Reliable</h3>
                            <p className="text-muted-foreground mb-6">
                                When you invite us into your home, we treat it with the utmost respect. We use protective gear and clean up after every job.
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                <span>✓ ID Verified</span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                <span>✓ Uniformed Staff</span>
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                <span>✓ Health Protocols</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyFirst;
