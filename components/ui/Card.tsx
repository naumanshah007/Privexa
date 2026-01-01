import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient-border";
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    // For gradient-border, wrap in a container
    if (variant === "gradient-border") {
      return (
        <div
          className={cn(
            "relative rounded-xl p-[2px] bg-gradient-to-r from-primary-500 via-cyan-500 to-purple-500",
            hover && "hover:shadow-colored-lg transition-all duration-300"
          )}
        >
          <div
            ref={ref}
            className={cn(
              "rounded-xl bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 w-full h-full",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border text-gray-950 transition-all duration-300",
          {
            // Default - Enhanced shadows
            "border-gray-200 bg-white shadow-md hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50": variant === "default",
            
            // Glass - Glassmorphism effect
            "glass text-gray-900 dark:text-gray-50": variant === "glass",
          },
          hover && variant === "default" && "hover:shadow-colored hover:-translate-y-1",
          hover && variant === "glass" && "hover:bg-white/20 dark:hover:bg-gray-900/20 hover:scale-[1.02]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
