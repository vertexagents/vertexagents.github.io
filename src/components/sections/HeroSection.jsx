import { motion as Motion, useReducedMotion } from "framer-motion";
import heroBackgroundDark from "../../assets/hero.webp";
import heroBackgroundLight from "../../assets/hero_white.webp";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  x: (index * 11 + 7) % 100,
  y: (index * 17 + 13) % 100,
  duration: 4.5 + (index % 4),
  delay: index * 0.25,
}));

function HeroSection({ theme = "dark" }) {
  const isLight = theme === "light";
  const shouldReduceMotion = useReducedMotion();

  return (
    // Hero is now a pure visual anchor so the image becomes the first impression.
    <section
      id="hero"
      className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:min-h-screen md:aspect-auto"
    >
      {/* Full-bleed hero background image (desktop-first) with layered contrast. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={isLight ? heroBackgroundLight : heroBackgroundDark}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-contain object-center md:object-cover"
        />
        {!isLight && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,21,0.2)_0%,rgba(15,17,21,0.38)_40%,rgba(15,17,21,0.66)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(255,106,61,0.22),transparent_35%),radial-gradient(circle_at_24%_18%,rgba(200,164,106,0.16),transparent_40%)]" />
          </>
        )}
      </div>

      {/* Floating particles add subtle cinematic motion without heavy rendering costs. */}
      {!shouldReduceMotion && (
        <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block">
          {particles.map((particle) => (
            <Motion.span
              key={particle.id}
              className="absolute h-1.5 w-1.5 rounded-full bg-vertex-gold/70 blur-[1px]"
              style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
              animate={{ y: [0, -14, 0], opacity: [0.2, 0.9, 0.2] }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t to-transparent ${
          isLight
            ? "h-20 from-white/90 via-white/50 sm:h-32"
            : "h-12 from-vertex-bg sm:h-24"
        }`}
      />
      {isLight && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_70%)] sm:h-32" />
      )}
    </section>
  );
}

export default HeroSection;
