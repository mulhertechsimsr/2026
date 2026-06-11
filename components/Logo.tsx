import Image from "next/image";
import { edicao2026 } from "@/themes/edicao-2026";

interface Props {
  size?: number;
  chip?: boolean;
}

export default function Logo({ size = 56, chip = false }: Props) {
  const pad = chip ? Math.round(size * 0.08) : 0;
  return (
    <div
      className="relative inline-flex items-center justify-center rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: chip ? "#fff" : "transparent",
        padding: pad,
        boxShadow: chip ? "0 2px 10px rgba(0,0,0,0.12)" : "none",
      }}
    >
      <Image
        src={edicao2026.logoSrc}
        alt={edicao2026.logoAlt}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
