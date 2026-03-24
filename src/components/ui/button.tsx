import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-accent text-accent-foreground shadow-glow hover:bg-accent/92",
  secondary:
    "border border-white/10 bg-white/5 text-foreground glass-muted hover:bg-white/9",
  ghost:
    "border border-transparent bg-transparent text-muted-foreground hover:bg-white/5 hover:text-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "inline-flex w-fit items-center justify-center gap-2 rounded-pill font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200",
    "surface-hairline whitespace-nowrap",
    "focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:transform-none",
    "active:scale-[0.99]",
    sizeClasses[size],
    variantClasses[variant],
    className
  );
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "primary",
      size = "md",
      href,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        className={buttonClassName(variant, size, className)}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={buttonClassName(variant, size, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
