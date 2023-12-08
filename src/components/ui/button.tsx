import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        transparent:
          "bg-white bg-opacity-10 text-white duration-300 hover:ring-white/30 hover:ring-1 transition-all ",
        transparentDark:
          "bg-black bg-opacity-10 text-black duration-300 hover:ring-black/30 hover:ring-1 transition-all ",
        nuit2007:
          "bg-red-500 hover:bg-red-600 border border-red-600 border-dashed",
        nuit2008:
          "bg-gradient-to-r from-green-500 to-green-700 ring-1 ring-green-600 hover:ring-green-500 transition-all duration-300",
        nuit2009: "bg-amber-500 hover:bg-amber-600 ring-1 ring-amber-600",
        nuit2010:
          "relative bg-gradient-to-r from-pink-500 to-blue-700 hover:from-pink-600 hover:to-blue-800 before:content-['🚗'] before:absolute before:-right-5 overflow-hidden hover:before:right-full before:transition-all before:duration-150 before:text-xl",
        nuit2011:
          "bg-green-500 ring-1 ring-red-600 text-amber-400 hover:bg-amber-500 hover:ring-amber-600 tranistion-all duration-300 before:content-['🎁'] relative before:absolute before:-bottom-5 overflow-hidden before:transition-all before:duration-300 hover:before:bottom-2 hover:before:text-lg",
        nuit2012:
          "relative bg-amber-500 before:content-['☁️'] before:absolute before:-top-2 before:-left-5 before:text-2xl ring-1 ring-amber-600 hover:bg-amber-600 hover:ring-amber-500 after:content-['☁️'] after:absolute after:text-2xl after:-right-4 after:-bottom-1",
        nuit2013:
          "bg-gradient-to-b from-blue-300 to-blue-700 rounded-full via-blue-950 overflow-hidden hover:from-blue-400",
        nuit2014: "bg-teal-400 hover:bg-teal-500 ring-1 ring-teal-600",
        nuit2015:
          "relative before:content-['🍵'] before:absolute before:top-0 before:-translate-y-6 before:text-2xl ring-1 ring-amber-600 hover:bg-amber-900 hover:ring-amber-500",
        nuit2016:
          "relative bg-amber-400 before:content-['💡'] before:absolute before:top-0 before:-translate-y-6 before:text-2xl ring-1 ring-amber-600 after:h-10 after:w-10 after:scale-0 after:blur-sm after:absolute after:bg-amber-400/20 after:-top-7 after:-z-10 after:rounded-full hover:after:h-10 hover:after:w-10 after:translate-all after:duration-300 hover:after:scale-100",
        nuit2017:
          "relative bg-green-400 before:content-['🎊'] before:absolute before:top-0 before:-translate-y-6 before:text-2xl ring-1 ring-green-600 hover:bg-pink-500 hover:ring-pink-600",
        nuit2018:
          "relative bg-amber-800 before:content-['👒'] before:absolute before:top-0 before:text-3xl before:-translate-y-7 hover:before:-translate-y-9 before:transition hover:bg-amber-700",
        nuit2019:
          "bg-white text-violet-600 before:-inset-1 relative before:absolute before:bg-violet-400 before:-z-10 before:rounded-md after:-inset-2 relative after:absolute after:bg-fuchsia-800 after:-z-20 after:rounded-md before:transition-all before:duration-150 hover:before:inset-0 after:transition-all after:duration-150 hover:after:inset-0",
        nuit2020:
          "bg-green-500 hover:bg-green-600 ring-1 ring-lime-600 hover:ring-lime-500 transition-all duration-300",
        nuit2021:
          "bg-white text-blue-600 before:w-full before:h-full before:bg-cyan-400 before relative before:absolute before:-z-10 before:rounded-md before:-top-1 before:-left-1 after:w-full after:h-full after:bg-pink-600 relative after:absolute after:-z-10 after:rounded-md after:-bottom-1 after:-right-1 before:transition-all before:duration-150 hover:before:left-0 hover:before:top-0 after:transition-all after:duration-150 hover:after:right-0 hover:after:bottom-0",

        nuit2022:
          "bg-white/70 before:w-10 before:rounded-full before:h-10 before:absolute relative before:-top-3 before:bg-pink-400/90 before:-left-2 before:-z-10 before:blur-sm ring-1 ring-white/10 after:w-10 after:h-10 after:rounded-full after:absolute after:-bottom-3 after:-right-2 after:bg-sky-400/90 after:blur-sm after:-z-10 hover:bg-white/60 transition-all duration-300 hover:before:blur-md before:transition-all before:duration-300 hover:after:blur-md after:transition-all after:duration-300",
        nuit2023:
          "bg-gradient-to-r from-sky-950 to-cyan-950 ring-1 ring-amber-200 ring-offset-amber-200/50 hover:ring-offset-amber-200/30 hover:ring-amber-200/30 hover:ring-1 transition-all duration-300 font-Pixel",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
