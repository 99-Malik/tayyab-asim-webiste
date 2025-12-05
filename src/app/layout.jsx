import "./globals.css";
import { companyName } from '../libs/data';
import { Nunito } from "next/font/google";
import { cn } from "@/lib/utils";
import FixedCallButtons from "@/components/buttons/FixedCallButtons";
import Script from "next/script";


const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: companyName,
  description: "Home Appliance Repair Services Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16843132430" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-16843132430');
        ` }} />


      </head>
    
      <body className={cn(font.className, "flex flex-col w-full")}>
        {children}
        <FixedCallButtons />
      </body>
    </html>
  );
}
