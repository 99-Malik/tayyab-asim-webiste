"use client";

import { companyName } from "@/libs/data";

const StatsSection = ({ company = companyName }) => {
    const stats = [
        { label: "Years Experience", value: "15+" },
        { label: "Repairs Completed", value: "25k+" },
        { label: "Happy Customers", value: "20k+" },
        { label: "Expert Technicians", value: "50+" },
    ];

    return (
        <section className="w-full py-16 bg-primary text-primary-foreground">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-foreground/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-4xl md:text-6xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm md:text-base font-medium uppercase tracking-wider opacity-90">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
