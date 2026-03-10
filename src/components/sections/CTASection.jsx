import { motion as Motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Container from "../common/Container";
import GlowButton from "../common/GlowButton";
import { ctaContent } from "../../data/siteContent";

function CTASection() {
  return (
    // Final CTA converts interest into a direct engagement action.
    <section id="contact" className="section-shell pt-10">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-panel relative overflow-hidden rounded-[1.2rem] border-vertex-orange/35 px-6 py-12 text-center sm:px-10"
        >
          <div className="cta-ambient-motion pointer-events-none absolute inset-0" />

          <div className="relative mx-auto max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.28em] text-vertex-gold/90">
              CALL TO ACTION
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {ctaContent.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-vertex-muted">
              {ctaContent.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <GlowButton href="#hero" className="gap-2">
                {ctaContent.primaryAction}
                <FiArrowRight />
              </GlowButton>
              <GlowButton href="#services" variant="secondary">
                {ctaContent.secondaryAction}
              </GlowButton>
            </div>
          </div>
        </Motion.div>
      </Container>
    </section>
  );
}

export default CTASection;
