import Image from "next/image";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

const MainBanner = ({ company = "" }) => {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/happy-family.png"
          alt="Home Appliance Repair"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-8">
        <div className="space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase border border-primary/20 backdrop-blur-sm">
            Expert Home Appliance Repair
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Restoring Comfort <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
              One Repair at a Time
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fast, reliable, and professional repair services for all your household appliances.
            We bring your home back to life with quality workmanship you can trust.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <CallAndWhatsappButton className="w-full sm:w-auto" />
        </div>

        {/* Features / Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-4xl border-t border-border/50 pt-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-foreground">24/7</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Support</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-foreground">100%</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Satisfaction</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-foreground">1hr</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Response</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl font-bold text-foreground">50+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Experts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
