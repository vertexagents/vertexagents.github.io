import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../common/Container";
import GlowButton from "../common/GlowButton";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../../data/siteContent";
import { mapNavHref, mapSectionHref } from "../../utils/navigation";
import logoWhite from "../../assets/logo.svg";
import logoBlack from "../../assets/logo_black.svg";

function Navbar({
  theme = "dark",
  isGalleryPage = false,
  onToggleTheme = () => {},
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Navigation transitions from transparent to glass panel once scrolling begins.
    <header className="fixed top-0 z-50 w-full">
      <Container className="pt-5">
        <div
          className={`rounded-2xl border px-4 py-3 transition duration-300 md:px-6 ${
            isScrolled
              ? isLight
                ? "border-vertex-line/25 bg-vertex-bgSoft/45 shadow-panel backdrop-blur-2xl"
                : "border-vertex-line bg-vertex-bgSoft/85 shadow-panel backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href={mapSectionHref("#hero", isGalleryPage)}
              className="flex items-center gap-2 font-tech text-sm font-semibold tracking-[0.2em] text-vertex-text sm:gap-3 sm:text-base"
            >
              <img
                src={isLight ? logoBlack : logoWhite}
                alt="Vertex Agents logo"
                className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              />
              <span>VERTEX AGENTS</span>
            </a>

            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={mapNavHref(item.href, isGalleryPage)}
                  className="text-sm font-semibold text-vertex-muted transition hover:text-vertex-text"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <GlowButton
                href={mapSectionHref("#contact", isGalleryPage)}
                className="text-xs"
              >
                Start Project
              </GlowButton>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle
                theme={theme}
                onToggle={onToggleTheme}
                isInNavbar
                className="h-9 w-16"
              />

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="inline-flex rounded-xl border border-vertex-line bg-vertex-bgSoft/70 p-2 text-vertex-text"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-site-nav"
              >
                {isMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <Motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                id="mobile-site-nav"
                className="overflow-hidden md:hidden"
              >
                <div
                  className={`mt-4 space-y-3 rounded-2xl border px-4 py-4 shadow-panel backdrop-blur-2xl ${
                    isLight
                      ? "border-vertex-line/25 bg-white/75"
                      : "border-vertex-line/25 bg-vertex-bgSoft/75"
                  }`}
                  role="navigation"
                  aria-label="Mobile"
                >
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={mapNavHref(item.href, isGalleryPage)}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-semibold text-vertex-muted transition hover:text-vertex-text"
                    >
                      {item.label}
                    </a>
                  ))}
                  <GlowButton
                    href={mapSectionHref("#contact", isGalleryPage)}
                    className="w-full"
                  >
                    Start Project
                  </GlowButton>
                </div>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
