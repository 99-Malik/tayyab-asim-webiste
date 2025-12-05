import { cn } from "@/lib/utils";
import Link from "next/link";

const NavLink = ({ title, href, className }) => {
  return (
    <Link className={cn("group relative w-fit text-foreground/80 hover:text-primary transition-colors", className)} href={href}>
      <span>{title}</span>
      <span className="w-0 absolute bottom-0.5 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-primary"></span>
    </Link>
  );
};

export default NavLink;
