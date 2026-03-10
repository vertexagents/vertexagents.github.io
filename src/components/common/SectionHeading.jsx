function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="font-tech text-xs uppercase tracking-[0.28em] text-vertex-gold/85">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance text-vertex-text sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-vertex-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
