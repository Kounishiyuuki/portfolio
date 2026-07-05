import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectAppIconProps = {
  icon: {
    src: string;
    alt: string;
  };
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectAppIcon({
  icon,
  className,
  priority = false,
  sizes = "8rem",
}: ProjectAppIconProps) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-[1.35rem] border border-white/70 bg-white shadow-[0_18px_38px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </div>
  );
}
