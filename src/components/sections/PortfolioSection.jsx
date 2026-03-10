import { motion as Motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { projects } from "../../data/siteContent";
import cortexPlaceholder from "../../assets/placeholders/project-cortex.svg";
import pulsePlaceholder from "../../assets/placeholders/project-pulse.svg";
import novaPlaceholder from "../../assets/placeholders/project-nova.svg";

const projectImages = {
  launchlane: cortexPlaceholder,
  northpeak: pulsePlaceholder,
  harborlegal: novaPlaceholder,
};

function PortfolioSection() {
  return (
    // Portfolio showcases early delivery samples and strategy mockups.
    <section id="projects" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="WORK SAMPLES"
          title="Early Portfolio And Strategic Mockups"
          description="As a new firm, we combine pilot engagements and concept work to help you visualize quality, direction, and execution style."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel group overflow-hidden rounded-[1rem]"
            >
              <div className="relative overflow-hidden border-b border-vertex-line">
                <img
                  src={projectImages[project.key]}
                  alt={`${project.title} placeholder visual`}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="font-tech text-[11px] uppercase tracking-[0.24em] text-vertex-gold/80">
                  {project.sector}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-vertex-text">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-vertex-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-vertex-line bg-vertex-bgSoft/75 px-3 py-1 text-xs text-vertex-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PortfolioSection;
