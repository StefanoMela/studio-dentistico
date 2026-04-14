interface PhotoPlaceholderProps {
  /** Short label shown as the "slot name" (e.g. "Hero – Studio") */
  label: string;
  /** Longer suggestion for the photographer / content editor */
  hint: string;
  /** Aspect-ratio class, e.g. "aspect-[4/3]" or "aspect-square" */
  aspect?: string;
  /** Extra Tailwind classes to override width, rounding, etc. */
  className?: string;
  /** When true, renders a small horizontal pill instead of a tall box */
  compact?: boolean;
}

/**
 * PhotoPlaceholder
 * A visually distinct placeholder that communicates exactly which photo
 * should be placed in each position.  It uses only design-token colours so
 * it stays coherent with the rest of the site.
 */
export function PhotoPlaceholder({
  label,
  hint,
  aspect = "aspect-[4/3]",
  className = "",
  compact = false,
}: PhotoPlaceholderProps) {
  if (compact) {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-surface-alt px-4 py-3 ${className}`}
        role="img"
        aria-label={`Spazio per foto: ${label}`}
      >
        {/* Camera icon */}
        <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <CameraIcon size={16} className="text-primary" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-primary leading-tight truncate">{label}</p>
          <p className="text-[11px] text-muted leading-snug mt-0.5">{hint}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl border-2 border-dashed border-primary/20 bg-surface-alt overflow-hidden group ${className}`}
      role="img"
      aria-label={`Spazio per foto: ${label}`}
    >
      {/* Subtle teal wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Corner accent lines */}
      <span aria-hidden="true" className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary/30 rounded-tl-md" />
      <span aria-hidden="true" className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary/30 rounded-tr-md" />
      <span aria-hidden="true" className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary/30 rounded-bl-md" />
      <span aria-hidden="true" className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary/30 rounded-br-md" />

      {/* Centred content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <CameraIcon size={26} className="text-primary/70" />
        </div>

        <div className="space-y-1.5">
          <p className="text-sm font-semibold text-primary leading-tight">{label}</p>
          <p className="text-xs text-muted leading-relaxed max-w-[220px]">{hint}</p>
        </div>

        {/* Photo-type badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-primary/10 text-[11px] font-medium text-primary/80 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
          Sostituire con foto reale
        </span>
      </div>
    </div>
  );
}

/* ─── Minimal inline camera SVG ─────────────────────────────────────── */
function CameraIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
