import { motion as Motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { metrics, reasons } from "../../data/siteContent";

function WhyChooseSection() {
  return (
    // This section pairs trust drivers with measurable outcome indicators.
    <section id="why-us" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title="A Practical Growth Partner For Ambitious Brands"
          description="Vertex Agents blends strategic thinking and fast execution to build momentum for companies in their next stage of growth."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <Motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-panel rounded-[1rem] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-vertex-gold">
                    <FiCheckCircle size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-vertex-text">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-vertex-muted">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </Motion.article>
            ))}
          </div>

          <Motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[1rem] border-vertex-gold/30 p-6"
          >
            <p className="font-tech text-xs uppercase tracking-[0.28em] text-vertex-gold/90">
              Performance Snapshot
            </p>
            <div className="mt-5 space-y-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-vertex-line bg-vertex-bgSoft/60 px-4 py-4"
                >
                  <p className="text-3xl font-semibold text-gradient-warm">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-vertex-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Motion.aside>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseSection;
