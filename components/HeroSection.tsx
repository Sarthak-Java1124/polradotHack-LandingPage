function NodeGraphIllustration() {
  const nodes = [
    { cx: 250, cy: 250, r: 18, primary: true },
    { cx: 110, cy: 130, r: 10, primary: false },
    { cx: 390, cy: 110, r: 12, primary: false },
    { cx: 430, cy: 310, r: 10, primary: false },
    { cx: 130, cy: 380, r: 12, primary: false },
    { cx: 310, cy: 430, r: 8,  primary: false },
    { cx: 60,  cy: 260, r: 7,  primary: false },
    { cx: 450, cy: 190, r: 7,  primary: false },
    { cx: 200, cy: 460, r: 9,  primary: false },
    { cx: 370, cy: 390, r: 8,  primary: false },
    { cx: 160, cy: 200, r: 6,  primary: false },
    { cx: 340, cy: 160, r: 6,  primary: false },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 6], [1, 10], [2, 7], [2, 11], [3, 8], [4, 9],
    [10, 11], [5, 9], [6, 4],
  ];

  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5e642" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f5e642" stopOpacity="0" />
        </radialGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="250" cy="250" r="200" fill="url(#centerGlow)" />

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#f5e642"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i} filter="url(#nodeGlow)">
          {n.primary && (
            <circle
              cx={n.cx} cy={n.cy}
              r={n.r + 10}
              fill="none"
              stroke="#f5e642"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          )}
          <circle
            cx={n.cx} cy={n.cy} r={n.r}
            fill={n.primary ? "#f5e642" : "none"}
            stroke="#f5e642"
            strokeOpacity={n.primary ? 1 : 0.6}
            strokeWidth={n.primary ? 0 : 1.5}
          />
          {n.primary && (
            <circle cx={n.cx} cy={n.cy} r={n.r * 0.45} fill="#363100" />
          )}
        </g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-lg py-xl relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        {/* Text column */}
        <div className="flex flex-col gap-xl reveal">
          <div className="flex flex-wrap gap-sm">
            {["Portaldot Native", "ink! Contracts", "Open Source", "POT Powered"].map(
              (badge) => (
                <span
                  key={badge}
                  className="glass-panel text-primary-container border-primary-container/30 text-label font-label px-md py-xs rounded uppercase"
                >
                  {badge}
                </span>
              )
            )}
          </div>

          <h1 className="font-hero text-headline-lg-mobile md:text-hero text-text-primary uppercase leading-tight drop-shadow-[0_0_15px_rgba(245,230,66,0.3)]">
            INSTANT SMART CONTRACT REVIEWS SECURED BY STAKE
          </h1>

          <p className="text-text-secondary font-body text-body ">
            PortalReview replaces slow, expensive audits
            <br />
            with trustless peer review powered by{" "}
            <span className="mark">POT staking</span>,
            <br />
            slashing, and on-chain reputation.
          </p>

          <div className="flex flex-wrap gap-md mt-md">
            <a
              href="https://portalview-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse bg-primary-container text-on-primary-container px-xl py-md font-bold uppercase hover:bg-primary-fixed transition-colors glow-border rounded active:scale-[0.98]"
            >
              Launch Review
            </a>
            <button className="glass-panel text-text-primary px-xl py-md font-bold uppercase hover:border-primary-container hover:text-primary-container transition-colors glow-border-hover rounded active:scale-[0.98]">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Image column */}
        <div
          className="reveal relative"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative w-full aspect-square float-anim flex items-center justify-center">
            <NodeGraphIllustration />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
