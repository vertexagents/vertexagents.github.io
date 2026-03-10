import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ theme, onToggle, isInNavbar = false, className = "" }) {
  const isLight = theme === "light";

  const baseClasses = isInNavbar
    ? "relative inline-flex h-10 w-20 items-center rounded-full border border-vertex-line/40 bg-vertex-bgSoft/90 p-1 shadow-panel backdrop-blur-xl transition"
    : "fixed right-4 top-4 z-[70] inline-flex h-10 w-20 items-center rounded-full border border-vertex-line/40 bg-vertex-bgSoft/90 p-1 shadow-panel backdrop-blur-xl transition sm:right-6 sm:top-6";
  const thumbClasses = isInNavbar ? "h-7 w-7" : "h-8 w-8";
  const thumbShiftClass = isInNavbar ? "translate-x-7" : "translate-x-9";
  const activeIconSize = isInNavbar ? 13 : 15;
  const railIconSize = isInNavbar ? 11 : 13;

  return (
    // Render fixed in desktop and inline when mounted in the mobile navbar.
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      aria-pressed={isLight}
      className={`${baseClasses} ${className}`.trim()}
    >
      <span
        className={`absolute inline-flex ${thumbClasses} items-center justify-center rounded-full border border-vertex-line/30 bg-vertex-bg text-vertex-text shadow-panel transition-transform duration-300 ${
          isLight ? thumbShiftClass : "translate-x-0"
        }`}
      >
        {isLight ? (
          <FiSun size={activeIconSize} />
        ) : (
          <FiMoon size={activeIconSize} />
        )}
      </span>
      <span className="ml-1 text-vertex-muted">
        <FiMoon size={railIconSize} />
      </span>
      <span className="ml-auto mr-1 text-vertex-gold">
        <FiSun size={railIconSize} />
      </span>
    </button>
  );
}

export default ThemeToggle;
