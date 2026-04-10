import { ReactNode } from "react";
import Link from "next/link";

/* ─── Button ─────────────────────────────────────────────────────────── */
type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-dark shadow-sm",
  secondary:
    "bg-transparent text-primary border border-sage-dark hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-gray hover:text-dark",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

/* ─── Section ────────────────────────────────────────────────────────── */
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  bg?: "ivory" | "cream" | "white" | "sage" | "charcoal";
}

const bgClasses: Record<string, string> = {
  ivory: "bg-surface",
  cream: "bg-surface-alt",
  white: "bg-white",
  sage: "bg-surface-alt",
  charcoal: "bg-dark text-white",
};

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  bg = "ivory",
}: SectionProps) {
  return (
    <Tag id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">{children}</div>
    </Tag>
  );
}

/* ─── SectionHeader ──────────────────────────────────────────────────── */
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: SectionHeaderProps) {
  const align = center ? "text-center mx-auto" : "";
  return (
    <div className={`mb-12 md:mb-16 max-w-2xl ${align}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] text-muted uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-semibold text-dark leading-tight mb-4"
        style={{ fontFamily: "Playfair Display, Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-gray leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────── */
interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Icon Wrapper ───────────────────────────────────────────────────── */
interface IconWrapperProps {
  children: ReactNode;
  size?: "sm" | "md";
}

export function IconWrapper({ children, size = "md" }: IconWrapperProps) {
  const s = size === "sm" ? "w-10 h-10 text-xl" : "w-14 h-14 text-2xl";
  return (
    <div
      className={`${s} rounded-xl bg-surface-alt text-primary flex items-center justify-center mb-4`}
    >
      {children}
    </div>
  );
}
