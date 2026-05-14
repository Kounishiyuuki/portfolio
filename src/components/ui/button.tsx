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
    "border border-foreground text-white",
    "bg-[linear-gradient(180deg,rgba(29,29,31,1)_0%,rgba(0,0,0,0.98)_100%)]",
    "shadow-[0_10px_24px_rgba(0,0,0,0.14),0_18px_42px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.16)]",
    "hover:border-black hover:brightness-[1.08] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16),0_20px_46px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.18)]"
  ),
  secondary: cn(
    "border border-line/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,246,247,0.94))]",
    "text-foreground shadow-[0_8px_22px_rgba(0,0,0,0.055),inset_0_1px_0_rgba(255,255,255,0.82)]",
    "glass-muted hover:border-line-strong/90 hover:bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(244,244,245,0.98))] hover:shadow-[0_10px_26px_rgba(0,0,0,0.075),inset_0_1px_0_rgba(255,255,255,0.88)]"
  ),
  ghost: cn(
    "border border-transparent bg-transparent text-foreground/78 shadow-none",
    "hover:border-line/75 hover:bg-background/88 hover:text-foreground"
  ),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-[12.5px] sm:min-h-11 sm:px-4.5 sm:text-[13px]",
  md: "min-h-11 px-5 text-[13.5px] sm:min-h-12 sm:px-6 sm:text-[14px]",
  lg: "min-h-12 px-5.5 text-[14px] sm:min-h-14 sm:px-7.5 sm:text-[15px]",
};

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "relative inline-flex max-w-full w-fit items-center justify-center rounded-pill font-medium leading-[1.2] tracking-[0.01em]",
    "whitespace-normal text-center select-none [font-feature-settings:'palt'_1] sm:whitespace-nowrap",
    "transition-[background-color,border-color,color,box-shadow,filter] duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/42 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:border-line/70 disabled:bg-[linear-gradient(180deg,rgba(249,249,250,0.84),rgba(241,241,242,0.72))] disabled:text-foreground/38 disabled:shadow-none disabled:brightness-100",
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
      className="relative flex w-full items-center justify-center gap-2 self-stretch will-change-transform px-[0.02em]"
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
