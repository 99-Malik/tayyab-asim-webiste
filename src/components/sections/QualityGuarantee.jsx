"use client";

import { Award, CheckCircle2, ThumbsUp } from "lucide-react";

const QualityGuarantee = () => {
    return (
        <section className="w-full py-16 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Promise</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        100% Satisfaction Guarantee
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We are committed to providing the highest quality repair services. If you're not happy, we're not done.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-colors duration-300 group">
                        <Award className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold text-foreground mb-3">90-Day Warranty</h3>
                        <p className="text-muted-foreground">
                            We stand by our parts and labor with a comprehensive 90-day warranty.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-colors duration-300 group">
                        <CheckCircle2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold text-foreground mb-3">Genuine Parts</h3>
                        <p className="text-muted-foreground">
                            We use only original manufacturer parts to ensure long-lasting repairs.
                        </p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-colors duration-300 group">
                        <ThumbsUp className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-xl font-bold text-foreground mb-3">Expert Technicians</h3>
                        <p className="text-muted-foreground">
                            Our team is fully trained, certified, and experienced in all major brands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityGuarantee;
