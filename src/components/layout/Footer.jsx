import Container from "../common/Container";
import { navLinks } from "../../data/siteContent";
import { mapNavHref } from "../../utils/navigation";

function Footer({ isGalleryPage = false }) {
  return (
    // Footer mirrors the same strategic navigation links and legal metadata.
    <footer className="border-t border-vertex-line py-10">
      <Container>
        <div className="flex flex-col gap-6 text-sm text-vertex-muted md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-tech text-xs tracking-[0.25em] text-vertex-gold/80">
              VERTEX AGENTS
            </p>
            <p className="mt-3 max-w-md leading-relaxed">
              Digital marketing services for brands ready to grow through better
              websites, campaigns, and brand presence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={mapNavHref(item.href, isGalleryPage)}
                className="transition hover:text-vertex-text"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 warm-divider" />
        <p className="mt-6 text-xs text-vertex-muted/80">
          Copyright {new Date().getFullYear()} Vertex Agents. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
