import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ThemeToggle from "./components/layout/ThemeToggle";
import { isGalleryPath, normalizePathname } from "./utils/navigation";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const GalleryPage = lazy(() => import("./components/pages/GalleryPage"));

function App() {
  const normalizedPath = normalizePathname(window.location.pathname);
  const isGalleryPage = isGalleryPath(normalizedPath);

  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("vertex-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("vertex-theme", theme);
  }, [theme]);

  const isLight = theme === "light";
  const handleThemeToggle = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  return (
    <div
      className={`relative min-h-screen overflow-x-clip bg-vertex-bg text-vertex-text ${
        isLight ? "theme-light" : "theme-dark"
      }`}
    >
      {/* Cinematic background layers for the futuristic atmosphere. */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-[radial-gradient(circle_at_18%_10%,rgba(176,135,78,0.14),transparent_40%),radial-gradient(circle_at_80%_24%,rgba(221,103,70,0.12),transparent_36%),linear-gradient(180deg,#F8FAFD_0%,#EEF2F7_100%)]"
              : "bg-[radial-gradient(circle_at_18%_10%,rgba(200,164,106,0.14),transparent_40%),radial-gradient(circle_at_80%_24%,rgba(255,106,61,0.16),transparent_36%),linear-gradient(180deg,#0F1115_0%,#1A1C22_100%)]"
          }`}
        />
        <div
          className={`absolute inset-0 bg-grid-mask ${isLight ? "opacity-30" : "opacity-50"}`}
        />
        <div
          className={`absolute -left-24 top-28 h-80 w-80 rounded-full bg-vertex-gold/20 blur-[120px] ${
            isLight ? "opacity-70" : "opacity-100"
          }`}
        />
        <div
          className={`absolute -right-24 top-[28%] h-96 w-96 rounded-full bg-vertex-orange/20 blur-[140px] ${
            isLight ? "opacity-70" : "opacity-100"
          }`}
        />
      </div>

      <ThemeToggle
        theme={theme}
        onToggle={handleThemeToggle}
        className="hidden md:inline-flex"
      />

      <Navbar
        theme={theme}
        isGalleryPage={isGalleryPage}
        onToggleTheme={handleThemeToggle}
      />

      <Suspense
        fallback={
          <main className="relative z-10 min-h-[40vh]" aria-busy="true" />
        }
      >
        {isGalleryPage ? <GalleryPage /> : <HomePage theme={theme} />}
      </Suspense>

      <Footer isGalleryPage={isGalleryPage} />
    </div>
  );
}

export default App;
