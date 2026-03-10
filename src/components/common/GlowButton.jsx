const variantClasses = {
  primary:
    "border border-vertex-orange/70 bg-vertex-orange text-white shadow-glowOrange hover:-translate-y-0.5 hover:bg-[#ff7d58]",
  secondary:
    "border border-vertex-gold/60 bg-vertex-gold/10 text-vertex-text shadow-glowGold hover:-translate-y-0.5 hover:bg-vertex-gold/20",
};

function GlowButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default GlowButton;
