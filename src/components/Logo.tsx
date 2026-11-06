type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[1.05rem]",
  md: "text-[1.2rem]",
  lg: "text-[1.55rem]",
};

export function Logo({
  variant = "dark",
  className = "",
  size = "md",
}: LogoProps) {
  const tone = variant === "light" ? "text-white" : "text-forest";

  return (
    <span
      className={`inline-block font-sans font-medium tracking-[-0.04em] leading-none ${sizes[size]} ${tone} ${className}`}
      aria-label="SeraHome"
    >
      SeraHome
    </span>
  );
}
