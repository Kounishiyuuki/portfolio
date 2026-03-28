"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InternalLink, isInternalHref } from "@/components/ui/internal-link";
import { getButtonFeedback } from "@/lib/motion";
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
  primary: cn(
    "border border-accent/22 text-accent-foreground",
    "bg-[linear-gradient(180deg,hsl(var(--color-accent))_0%,rgba(38,102,232,0.97)_100%)]",
    "shadow-[0_8px_20px_rgba(37,99,235,0.14),0_16px_36px_rgba(88,148,255,0.12),inset_0_1px_0_rgba(255,255,255,0.2)]",
    "hover:border-accent/28 hover:brightness-[1.015] hover:shadow-[0_10px_24px_rgba(37,99,235,0.16),0_18px_40px_rgba(88,148,255,0.14),inset_0_1px_0_rgba(255,255,255,0.24)]"
  ),
  secondary: cn(
    "border border-line/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,249,253,0.94))]",
    "text-foreground shadow-[0_8px_22px_rgba(27,44,74,0.06),inset_0_1px_0_rgba(255,255,255,0.74)]",
    "glass-muted hover:border-line-strong/90 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.985),rgba(244,247,252,0.97))] hover:shadow-[0_10px_26px_rgba(27,44,74,0.08),inset_0_1px_0_rgba(255,255,255,0.82)]"
  ),
  ghost: cn(
    "border border-transparent bg-transparent text-foreground/78 shadow-none",
    "hover:border-line/75 hover:bg-background/88 hover:text-foreground"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4.5 text-[13px]",
  md: "min-h-12 px-6 text-[14px]",
  lg: "min-h-14 px-7.5 text-[15px]",
};

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "relative inline-flex w-fit items-center justify-center rounded-pill font-medium leading-none tracking-[0.01em]",
    "whitespace-nowrap text-center select-none [font-feature-settings:'palt'_1]",
    "transition-[background-color,border-color,color,box-shadow,filter] duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:border-line/70 disabled:bg-[linear-gradient(180deg,rgba(249,250,252,0.84),rgba(241,244,248,0.72))] disabled:text-foreground/38 disabled:shadow-none disabled:brightness-100",
    sizeClasses[size],
    variantClasses[variant],
    className
  );
}

function ButtonContent({ children, disabled = false }: { children: ReactNode; disabled?: boolean }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const feedback = getButtonFeedback(prefersReducedMotion, disabled);

  return (
    <motion.span
      initial={false}
      animate={feedback.rest}
      whileHover={disabled ? undefined : feedback.hover}
      whileTap={disabled ? undefined : feedback.press}
      transition={feedback.transition}
      className="relative flex w-full items-center justify-center gap-2 self-stretch px-[0.02em]"
    >
      {children}
    </motion.span>
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

    if (isInternalHref(href)) {
      return (
        <InternalLink
          href={href}
          className={buttonClassName(variant, size, className)}
          {...linkProps}
        >
          <ButtonContent>{children}</ButtonContent>
        </InternalLink>
      );
    }

    return (
      <a
        href={href}
        className={buttonClassName(variant, size, className)}
        {...linkProps}
      >
        <ButtonContent>{children}</ButtonContent>
      </a>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    type = "button",
    disabled,
    ...buttonProps
  } = props as ButtonAsButtonProps;

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName(variant, size, className)}
      {...buttonProps}
    >
      <ButtonContent disabled={disabled}>{children}</ButtonContent>
    </button>
  );
}
