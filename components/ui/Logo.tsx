"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "full" | "icon" | "horizontal";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showText?: boolean;
  href?: string;
  onClick?: () => void;
}

const sizeMap = {
  sm: { full: 32, icon: 24, horizontal: { width: 120, height: 32 } },
  md: { full: 48, icon: 32, horizontal: { width: 160, height: 40 } },
  lg: { full: 64, icon: 48, horizontal: { width: 200, height: 48 } },
  xl: { full: 96, icon: 64, horizontal: { width: 300, height: 72 } },
  "2xl": { full: 128, icon: 80, horizontal: { width: 400, height: 96 } },
};

export function Logo({
  variant = "full",
  size = "md",
  className,
  showText = false,
  href = "/",
  onClick,
}: LogoProps) {
  const router = useRouter();

  const logoUrl = siteConfig.logo.src;
  const dimensions = sizeMap[size][variant];

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(href);
    }
  };

  const isHorizontal = variant === "horizontal";
  const width = isHorizontal ? (dimensions as { width: number; height: number }).width : (dimensions as number);
  const height = isHorizontal ? (dimensions as { width: number; height: number }).height : (dimensions as number);

  const logoElement = (
    <div
      className={cn(
        "flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          src={logoUrl}
          alt={siteConfig.logo.alt}
          width={width}
          height={height}
          priority
          className="object-contain transition-all duration-300 group-hover:opacity-90"
        />
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-primary-500/20 -z-10" />
      </div>
      {showText && variant !== "horizontal" && (
        <div className="flex flex-col ml-3">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {siteConfig.name}
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {siteConfig.tagline}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <Link href={href} className="block">
      {logoElement}
    </Link>
  );
}
