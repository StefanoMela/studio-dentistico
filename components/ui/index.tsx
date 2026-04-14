import { ReactNode } from "react";
import Link from "next/link";

/* ─── Button ─────────────────────────────────────────────────────────── */
type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30",
  secondary:
    "bg-accent text-dark hover:bg-accent-hover shadow-md shadow-accent/20",
  outline:
    "bg-transparent text-primary border-2 border-primary/30 hover:border-primary hover:bg-primary/5",
  ghost: "bg-transparent text-gray hover:text-dark hover:bg-surface-alt",
};

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ariaLabel,
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

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
  bg?: "ivory" | "cream" | "white" | "warm" | "charcoal";
}

const bgClasses: Record<string, string> = {
  ivory: "bg-surface",
  cream: "bg-surface-alt",
  white: "bg-white",
  warm: "bg-surface-warm",
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
    <Tag id={id} className={`py-20 md:py-28 ${bgClasses[bg]} ${className}`}>
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
    <div className={`mb-14 md:mb-18 max-w-2xl ${align}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark leading-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray leading-relaxed text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────── */
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 border border-border ${
        hover ? "card-hover" : "shadow-sm"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Icon Wrapper ───────────────────────────────────────────────────── */
interface IconWrapperProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "accent";
}

const iconSizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "w-10 h-10 text-lg",
  md: "w-14 h-14 text-xl",
  lg: "w-16 h-16 text-2xl",
};

const iconVariantClasses: Record<"default" | "primary" | "accent", string> = {
  default: "bg-surface-alt text-primary",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent",
};

export function IconWrapper({
  children,
  size = "md",
  variant = "default",
}: IconWrapperProps) {
  return (
    <div
      className={`${iconSizeClasses[size]} ${iconVariantClasses[variant]} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
    >
      {children}
    </div>
  );
}

/* ─── Feature Card ───────────────────────────────────────────────────── */
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`group bg-white rounded-2xl p-6 md:p-8 border border-border card-hover ${className}`}
    >
      <IconWrapper variant="primary">{icon}</IconWrapper>
      <h3 className="font-serif text-lg font-semibold text-dark mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray leading-relaxed">{description}</p>
    </div>
  );
}

/* ─── Stat Card ──────────────────────────────────────────────────────── */
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border text-center card-hover">
      <p className="font-serif text-3xl md:text-4xl font-semibold gradient-text mb-2">
        {value}
      </p>
      <p className="text-xs text-gray leading-snug">{label}</p>
    </div>
  );
}

/* ─── Badge ──────────────────────────────────────────────────────────── */
interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "accent";
}

const badgeVariants: Record<"default" | "primary" | "accent", string> = {
  default: "bg-surface-alt text-gray",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/10 text-accent-hover",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
}
