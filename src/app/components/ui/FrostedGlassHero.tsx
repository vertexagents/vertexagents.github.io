import React, { useState, useEffect } from "react";

export default function FrostedGlassHero() {
  const items = [
    {
      type: "text",
      text: "<mark>Design</mark> is not just what it <mark>looks</mark> like and feels like. <mark>Design</mark> is how it <mark>works</mark>.",
      author: "Steve Jobs",
    },
    {
      type: "text",
      text: "Good <mark>design</mark> is good <mark>business</mark>.",
      author: "Thomas J. Watson",
    },
    {
      type: "text",
      text: "People ignore <mark>design</mark> that ignores <mark>people</mark>.",
      author: "Frank Chimero",
    },
    {
      type: "text",
      text: "Your <mark>brand</mark> is what <mark>people say</mark> about you when you’re not in the <mark>room.</mark>",
      author: "Jeff Bezos",
    },
    {
      type: "text",
      text: "<mark>Marketing</mark> is no longer about the <mark>stuff you make</mark>, but about the <mark>stories you tell.</mark>",
      author: "Seth Godin",
    },
    {
      type: "text",
      text: "Design adds <mark>value</mark> faster than it adds costs.",
      author: "Joel Spolsky",
    },
    {
      type: "text",
      text: "<mark>Content</mark> precedes design. Design in the absence of content is not design, it’s decoration.",
      author: "Jeffrey Zeldman",
    },
    {
      type: "text",
      text: "If you think good design is expensive, you should look at the cost of <mark>bad design</mark>.",
      author: "Ralf Speth",
    },
    {
      type: "text",
      text: "Make it <mark>simple</mark>, but significant.",
      author: "Don Draper",
    },
    {
      type: "text",
      text: "The best marketing doesn’t feel like <mark>marketing</mark>.",
      author: "Tom Fishburne",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

  const ROTATION_INTERVAL = 6000;
  const FADE_DURATION = 700;

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, FADE_DURATION);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const current = items[index];

  // ✅ Inline <mark> parser (explicit highlighting only)
  const renderMarkedText = (text) => {
    return text.split(/(<mark>.*?<\/mark>)/g).map((part, i) => {
      if (part.startsWith("<mark>")) {
        return (
          <span key={i} style={styles.highlight}>
            {part.replace(/<\/?mark>/g, "")}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* CONTENT */}
        <div
          style={{
            ...styles.content,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {current.type === "text" && (
            <div style={styles.textBlock}>
              <p style={styles.quote}>{renderMarkedText(current.text)}</p>
              <p style={styles.author}>— {current.author}</p>
            </div>
          )}
        </div>

        {/* GLASS */}
        <div
          style={{
            ...styles.glass,
            opacity: hovered ? 0 : 1,
            transition: hovered
              ? "opacity 2.8s cubic-bezier(0.16, 1, 0.3, 1)"
              : "opacity 2.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div style={styles.mist} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  card: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },

  content: {
    position: "absolute",
    inset: 0,
    padding: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "opacity 0.7s ease, transform 0.7s ease",
    zIndex: 1,
    pointerEvents: "none",
  },

  textBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  glass: {
    position: "absolute",
    inset: 0,
    background: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    zIndex: 2,
    cursor: "pointer",
  },

  mist: {
    position: "absolute",
    inset: 0,
    opacity: 0.06,
    backgroundImage: `
      url("data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
        <filter id='n'>
          <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/>
        </filter>
        <rect width='100%' height='100%' filter='url(%23n)'/>
      </svg>")
    `,
    mixBlendMode: "overlay",
    pointerEvents: "none",
  },

  quote: {
    maxWidth: "1000px",
    fontSize: "clamp(1.6rem, 2.2vw, 2.4rem)",
    fontWeight: 800,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    color: "#4b5563",
  },

  highlight: {
    color: "#f97316",
    fontWeight: 900,
  },

  author: {
    marginTop: "1.5rem",
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#f97316",
  },
};
