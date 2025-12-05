"use client";

import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const ContactSection = ({ company = companyName }) => {
    return (
        <section id="contact" className="w-full py-20 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                                We're Here to Help
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Have a question or need to schedule a repair? Contact us today for a free quote.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                                    <p className="text-muted-foreground mb-2">24/7 Emergency Support</p>
                                    <a href={`tel:${dialPhone}`} className="text-lg font-bold text-primary hover:underline">
                                        {dialPhone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">Working Hours</h3>
                                    <p className="text-muted-foreground">Monday - Sunday: 24 Hours</p>
                                </div>
                            </div>
                        </div>

                        <CallAndWhatsappButton company={company} />
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 234 567 890"
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Service Needed</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                                    <option>Washing Machine Repair</option>
                                    <option>Refrigerator Repair</option>
                                    <option>Oven/Stove Repair</option>
                                    <option>Dishwasher Repair</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    placeholder="Describe your issue..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
