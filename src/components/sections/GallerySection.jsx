import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { galleryFilters, galleryItems } from "../../data/siteContent";
import poster01 from "../../assets/placeholders/poster-01.svg";
import poster02 from "../../assets/placeholders/poster-02.svg";
import poster03 from "../../assets/placeholders/poster-03.svg";
import logo01 from "../../assets/placeholders/logo-01.svg";
import logo02 from "../../assets/placeholders/logo-02.svg";
import logo03 from "../../assets/placeholders/logo-03.svg";
import website01 from "../../assets/placeholders/website-01.svg";
import website02 from "../../assets/placeholders/website-02.svg";
import website03 from "../../assets/placeholders/website-03.svg";

const galleryImages = {
  "poster-01": poster01,
  "poster-02": poster02,
  "poster-03": poster03,
  "logo-01": logo01,
  "logo-02": logo02,
  "logo-03": logo03,
  "website-01": website01,
  "website-02": website02,
  "website-03": website03,
};

function formatFilterLabel(filter) {
  if (filter === "all") {
    return "All";
  }

  return filter.charAt(0).toUpperCase() + filter.slice(1);
}

function GallerySection() {
  const [activeFilter, setActiveFilter] = useState(galleryFilters[0]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    // Gallery includes category filters so users can focus on one asset type.
    <section id="gallery" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="GALLERY"
          title="Mockups Across Posters, Logos, And Websites"
          description="Filter the gallery by category to preview style direction. Final creative assets can be swapped in later without changing the layout."
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {galleryFilters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-vertex-orange/75 bg-vertex-orange text-white"
                    : "border-vertex-line/35 bg-vertex-bgSoft/55 text-vertex-muted hover:border-vertex-gold/60 hover:text-vertex-text"
                }`}
              >
                {formatFilterLabel(filter)}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Motion.article
              key={item.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel overflow-hidden rounded-[1rem]"
            >
              <div className="border-b border-vertex-line/25">
                <img
                  src={galleryImages[item.image]}
                  alt={`${item.title} ${item.category} mockup`}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <p className="font-tech text-[11px] uppercase tracking-[0.24em] text-vertex-gold/80">
                  {formatFilterLabel(item.category)}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-vertex-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-vertex-muted">{item.client}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default GallerySection;
