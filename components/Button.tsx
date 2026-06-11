import { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";

type Variant = "coral" | "outline-light" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const SIZE: Record<Size, CSSProperties> = {
  sm: { padding: "10px 18px", fontSize: 13 },
  md: { padding: "14px 24px", fontSize: 15 },
  lg: { padding: "18px 32px", fontSize: 17 },
};

const VARIANT: Record<Variant, CSSProperties> = {
  coral: {
    background: "var(--coral-500)",
    color: "white",
    border: "none",
    boxShadow: "0 4px 0 var(--coral-400), 0 8px 24px -8px var(--coral-500)",
  },
  "outline-light": {
    background: "transparent",
    color: "white",
    border: "1.5px solid rgba(255,255,255,0.4)",
  },
  outline: {
    background: "transparent",
    color: "var(--ink-900)",
    border: "1.5px solid var(--ink-900)",
  },
  ghost: {
    background: "transparent",
    color: "var(--ink-700)",
    border: "none",
  },
  white: {
    background: "white",
    color: "var(--coral-500)",
    border: "none",
  },
};

export default function Button({
  variant = "coral",
  size = "md",
  children,
  className = "",
  style,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        ...SIZE[size],
        ...VARIANT[variant],
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        whiteSpace: "nowrap",
        borderRadius: 9999,
        cursor: "pointer",
        gap: 10,
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
