"use client";

import { ShieldCheck, Star, Clock, ThumbsUp } from "lucide-react";

const TrustHighlights = () => {
    const highlights = [
        {
            icon: ShieldCheck,
            title: "Licensed & Insured",
            description: "Fully certified professionals for your peace of mind."
        },
        {
            icon: Star,
            title: "5-Star Rated",
            description: "Trusted by thousands of happy customers."
        },
        {
            icon: Clock,
            title: "Same Day Service",
            description: "Fast response times to get you back on track."
        },
        {
            icon: ThumbsUp,
            title: "Satisfaction Guarantee",
            description: "We stand behind our work with a solid warranty."
        }
    ];

    return (
        <section className="w-full py-12 bg-background border-y border-border">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-3 group">
                            <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustHighlights;
