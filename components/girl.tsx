type GirlProps = {
  className?: string;
  title?: string;
};

export function Girl({ className, title }: GirlProps) {
  return (
    <img
      src="/character/red-haired-girl.png"
      width={541}
      height={927}
      className={`object-contain ${className ?? ""}`}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
    />
  );
}
