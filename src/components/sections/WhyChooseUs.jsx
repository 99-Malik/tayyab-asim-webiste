import { companyName } from "@/libs/data";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { UserCheck, Wrench, Banknote, Clock, ShieldCheck, Headphones } from "lucide-react";

const WhyChooseUs = ({ company = companyName }) => {
  const features = [
    {
      icon: UserCheck,
      title: "Skilled Professionals",
      description: "Our certified experts stay up-to-date with the latest repair methods to deliver dependable results every time."
    },
    {
      icon: Wrench,
      title: "Top-Notch Repairs",
      description: "We use premium-quality parts and tools to restore your appliances to peak performance."
    },
    {
      icon: Banknote,
      title: "Honest Pricing",
      description: "Expect clear, upfront pricing with no surprises—so you’ll always know what you’re paying for."
    },
    {
      icon: Clock,
      title: "Convenient Scheduling",
      description: "We offer flexible appointment options, including same-day and emergency services, to fit your schedule."
    },
    {
      icon: ShieldCheck,
      title: "Satisfaction Guaranteed",
      description: "All repairs are backed by a warranty, giving you confidence and peace of mind."
    },
    {
      icon: Headphones,
      title: "Reliable Support",
      description: "Our friendly customer care team is always ready to answer your questions and address your concerns."
    }
  ];

  return (
    <section id="why-choose-us" className="w-full py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The Trusted Choice for Appliance Repair
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecting the right appliance repair company is essential. Here’s what sets us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CallAndWhatsappButton company={company} className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
