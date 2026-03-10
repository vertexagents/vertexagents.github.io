import { motion as Motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { workflowSteps } from "../../data/siteContent";

function HowItWorksSection() {
  return (
    // Timeline section communicates the delivery process from audit to scaling.
    <section id="workflow" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="A Clear Workflow From Strategy To Results"
          description="Our delivery model keeps planning, execution, and performance optimization aligned from day one."
        />

        <div className="relative mt-12 space-y-5">
          <div className="absolute left-4 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-vertex-gold/60 to-vertex-orange/20 sm:block" />

          {workflowSteps.map((step, index) => (
            <Motion.article
              key={step.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-panel relative rounded-[1rem] p-5 pl-5 sm:pl-16"
            >
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-vertex-gold/50 bg-vertex-gold/10 font-tech text-xs text-vertex-gold sm:absolute sm:left-0 sm:top-6 sm:-translate-x-1/2">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-vertex-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-vertex-muted">
                {step.description}
              </p>
            </Motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorksSection;
