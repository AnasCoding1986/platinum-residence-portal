
import { ButtonHTMLAttributes, forwardRef, ElementType } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "gold" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
  as?: ElementType;
  href?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = "primary", 
    size = "md", 
    fullWidth = false,
    as: Component = "button",
    href,
    ...props 
  }, ref) => {
    // If href is provided and Component is still "button", switch to "a"
    if (href && Component === "button") {
      Component = "a";
    }

    return (
      <Component
        href={href}
        className={cn(
          "relative overflow-hidden rounded-md font-medium transition-all duration-300 ease-out",
          "before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" && "bg-luxury-darkblue text-white before:bg-luxury-blue focus:ring-luxury-blue",
          variant === "outline" && "border border-luxury-blue text-luxury-blue hover:text-white before:bg-luxury-blue focus:ring-luxury-blue",
          variant === "gold" && "bg-gradient-gold text-white before:bg-gradient-to-r before:from-gold-400 before:to-gold-600 focus:ring-gold-400",
          variant === "ghost" && "text-luxury-darkblue hover:bg-platinum-100 focus:ring-platinum-200",
          variant === "link" && "bg-transparent underline-offset-4 hover:underline text-luxury-darkblue focus:ring-platinum-200",
          size === "sm" && "text-xs px-3 py-1.5",
          size === "md" && "text-sm px-6 py-3",
          size === "lg" && "text-base px-8 py-4",
          fullWidth && "w-full",
          className
        )}
        ref={Component === "button" ? ref : undefined}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Component>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
