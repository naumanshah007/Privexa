import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "destructive" | "outline" | "ghost" | "gradient";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, disabled, asChild, ...props }, ref) => {
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
      {
        // Primary - Animated gradient with glow
        "bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 text-white hover:from-primary-500 hover:via-primary-400 hover:to-cyan-400 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 hover:scale-105 active:scale-100": variant === "default" || variant === "primary",
        
        // Gradient - Enhanced gradient button
        "bg-gradient-to-r from-cyan-500 via-primary-500 to-purple-500 text-white hover:from-cyan-400 hover:via-primary-400 hover:to-purple-400 shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-100 animate-gradient bg-[length:200%_200%]": variant === "gradient",
        
        // Secondary - Glassmorphism
        "glass border-2 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-700 hover:scale-105 active:scale-100": variant === "secondary",
        
        // Destructive
        "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60 hover:scale-105 active:scale-100": variant === "destructive",
        
        // Outline - Enhanced border with hover fill
        "border-2 border-primary-300 dark:border-primary-700 bg-transparent text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-400 dark:hover:border-primary-600 hover:scale-105 active:scale-100 transition-all": variant === "outline",
        
        // Ghost - Subtle background on hover
        "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 active:scale-100": variant === "ghost",
      },
      {
        "h-10 px-6 py-2": size === "default",
        "h-9 px-4 text-xs": size === "sm",
        "h-12 px-8 text-base": size === "lg",
      },
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className="relative z-10">{children}</span>
        {/* Shine effect on hover for gradient buttons */}
        {(variant === "gradient" || variant === "default" || variant === "primary") && (
          <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}
      </>
    );

    // Handle asChild pattern for Next.js Link
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(buttonClasses, (children as React.ReactElement).props?.className),
        ...props,
      });
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
