import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiPlayCircle } from "react-icons/fi";
import Container from "../common/Container";
import GlowButton from "../common/GlowButton";
import { heroContent } from "../../data/siteContent";

function HeroIntroSection() {
  const highlight = heroContent.highlightText || "";
  const headlineParts =
    highlight && heroContent.headline.includes(highlight)
      ? heroContent.headline.split(highlight)
      : [heroContent.headline];

  return (
    // Core hero messaging relocated below the visual hero for a cleaner first fold.
    <section className="section-shell pt-14 sm:pt-16">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-tech text-xs uppercase tracking-[0.3em] text-vertex-gold/85">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              {headlineParts.map((part, index, array) => (
                <span key={`${part}-${index}`}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-gradient-warm">{highlight}</span>
                  )}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-vertex-muted sm:text-lg">
              {heroContent.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <GlowButton href="#contact" className="gap-2">
                {heroContent.primaryAction}
                <FiArrowUpRight />
              </GlowButton>
              <GlowButton
                href="#workflow"
                variant="secondary"
                className="gap-2"
              >
                <FiPlayCircle />
                {heroContent.secondaryAction}
              </GlowButton>
            </div>
          </Motion.div>

          <Motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="glass-panel rounded-[1.2rem] border-vertex-gold/30 p-6"
          >
            <p className="font-tech text-[11px] uppercase tracking-[0.26em] text-vertex-gold/85">
              New Agency Advantage
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-vertex-text">
              Fast Execution, Direct Collaboration
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-vertex-muted">
              Work directly with our core team for faster approvals, tighter
              alignment, and marketing output built around your actual goals.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl2 border border-vertex-line bg-vertex-bgSoft/75 p-4">
                <p className="font-tech text-[10px] uppercase tracking-[0.22em] text-vertex-gold/85">
                  Response Window
                </p>
                <p className="mt-2 text-2xl font-semibold text-vertex-text">
                  24 Hrs
                </p>
              </div>
              <div className="rounded-xl2 border border-vertex-line bg-vertex-bgSoft/75 p-4">
                <p className="font-tech text-[10px] uppercase tracking-[0.22em] text-vertex-gold/85">
                  Focus Model
                </p>
                <p className="mt-2 text-2xl font-semibold text-vertex-text">
                  Quality First
                </p>
              </div>
            </div>
          </Motion.aside>
        </div>
      </Container>
    </section>
  );
}

export default HeroIntroSection;
