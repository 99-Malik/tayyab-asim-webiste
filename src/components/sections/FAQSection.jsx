"use client";

import { companyName } from "@/libs/data";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQSection = ({ company = companyName }) => {
    const faqs = [
        {
            question: "How quickly can you come to repair my appliance?",
            answer: "We offer same-day service for most calls booked before 12 PM. Our technicians are locally based to ensure a fast response time, typically within 2-4 hours."
        },
        {
            question: "Do you offer a warranty on your repairs?",
            answer: "Yes, we provide a comprehensive 90-day warranty on both parts and labor. If the same issue recurs within this period, we will fix it for free."
        },
        {
            question: "What brands of appliances do you repair?",
            answer: "We repair all major brands including Samsung, LG, Bosch, Siemens, Whirlpool, GE, and many more. Our technicians are trained on the latest models."
        },
        {
            question: "Is there a service call fee?",
            answer: "We have a standard service call fee which is WAIVED if you proceed with the repair. You only pay for the repair itself."
        },
        {
            question: "Do you use genuine parts?",
            answer: "Absolutely. We use only high-quality, genuine manufacturer parts to ensure the longevity and performance of your appliance."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="w-full py-20 bg-secondary/10">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Common Questions</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-primary" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "px-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden",
                                    openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
