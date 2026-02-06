export default function CircularOrbitEqual() {
  const steps = [
    { label: "Ideation", color: "#ff6a00" },
    { label: "Research", color: "#e53935" },
    { label: "Design", color: "#7b1fa2" },
    { label: "Build", color: "#26a69a" },
    { label: "Launch", color: "#2B2E34" },
    { label: "Research", color: "#e53935" },
    { label: "Launch", color: "#1e88e5" },
  ];

  const count = steps.length;

  return (
    <>
      <style>{`
        :root {
          --radius: clamp(160px, 30vw, 240px);
          --node: clamp(64px, 7vw, 84px);
          --duration: 14s;
          --depth-strength: 1.2;
        }




        /* 🔪 THIS is the clipper */
   .mask {
  position: absolute;
  right: 0;
  top: 6%;
  bottom: -10%;
  width: 50vw;
  overflow: hidden;
  pointer-events: none;
}

.system {
  position: absolute;
  right: calc(var(--radius) * -1);
  top: 50%;
  transform: translateY(-50%) scale(1.3);

  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);
}
        .arc {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 3px dashed #bbb;
        }

        .center {
          position: absolute;
          inset: 0;
          margin: auto;
          width: calc(var(--radius) * 1.05);
          height: calc(var(--radius) * 1.05);
          border-radius: 50%;
          border: 5px solid #FF6B4A;
          background: white;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          z-index: 3;
        }

        .center-text {
            display: flex;                 /* ← YOU NEED THIS */
            flex-direction: column;        /* stack vertically */
            align-items: center;           /* ← centers DO under WHAT WE */
            transform: rotate(90deg) translateY(30px);
            font-size: clamp(18px, 2.2vw, 26px);
            font-family: Verdana;
            letter-spacing: 0.05em;
            font-weight: 700;
        }

        
        .what-we{
            font-size: clamp(20px, 2.8vw, 32px);
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .do {
            margin-top: 2px;
            font-size: clamp(14px, 1.8vw, 22px);
            font-weight: 600;
            color: #FF6B4A;             /* change color here */
        }


        .orbit {
          position: absolute;
          inset: 0;
          animation: spin var(--duration) linear infinite;
        }

        .phase {
          position: absolute;
          inset: 0;
        }

        .node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform:
            translate(-50%, -50%)
            translateY(calc(var(--radius) * -1));
        }

        .node-inner {
          position: relative;
          width: var(--node);
          height: var(--node);
          border-radius: 50%;
          background: white;
          box-shadow: 0 15px 30px rgba(0,0,0,.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          animation: depth var(--duration) linear infinite;
          animation-delay: calc(var(--offset) * -1);
        }

        .node-inner::before {
          content: "";
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: var(--ring);
          z-index: -1;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @keyframes depth {
  0%   { transform: scale(1); z-index: 2; }
  25%  { transform: scale(calc(1 - var(--depth-strength))); z-index: 1; }
  50%  { transform: scale(1); z-index: 3; }
  75%  { transform: scale(calc(1 + var(--depth-strength))); z-index: 5; }
  100% { transform: scale(1); z-index: 2; }
}
      `}</style>

      <div className="mask">
        <div className="system">
          <div className="arc" />
          <div className="center">
            <div className="center-text">
              <div className="what-we">WHAT WE</div>
              <div className="do">DO</div>
            </div>
          </div>

          <div className="orbit">
            {steps.map((step, i) => {
              const offset = (i / count) * 14;

              return (
                <div
                  key={i}
                  className="phase"
                  style={{
                    transform: `rotate(${i * (360 / count)}deg)`,
                  }}
                >
                  <div className="node">
                    <div
                      className="node-inner"
                      style={{
                        "--ring": step.color,
                        "--offset": `${offset}s`,
                      }}
                    >
                      {step.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
