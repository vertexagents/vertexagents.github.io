import { motion as Motion } from "framer-motion";
import { FiMonitor, FiPenTool, FiShare2, FiTrendingUp } from "react-icons/fi";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/siteContent";

const serviceIcons = {
  websites: FiMonitor,
  growth: FiTrendingUp,
  social: FiShare2,
  branding: FiPenTool,
};

function ServicesSection() {
  return (
    // Service cards present core digital marketing offers in category format.
    <section id="services" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="SERVICES"
          title="Core Services Built For Modern Business Growth"
          description="Our offering is focused, practical, and outcome-driven so new and growing brands can scale with confidence."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <Motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel group rounded-[1rem] p-6 transition duration-300 hover:border-vertex-gold/45 hover:shadow-glowGold"
              >
                <div className="inline-flex rounded-xl border border-vertex-line bg-vertex-bgSoft/80 p-3 text-vertex-gold transition group-hover:border-vertex-gold/50 group-hover:text-vertex-orange">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-vertex-text">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-vertex-muted">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-medium text-vertex-text/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
