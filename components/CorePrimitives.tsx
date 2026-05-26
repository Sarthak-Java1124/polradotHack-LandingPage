const primitives = [
  {
    number: "01",
    title: "POT ESCROW",
    description:
      "Automated cryptographic locking of bounty funds until consensus is achieved.",
    delay: 0,
  },
  {
    number: "02",
    title: "REP REGISTRY",
    description:
      "Immutable on-chain history of reviewer performance and accuracy metrics.",
    delay: 100,
  },
  {
    number: "03",
    title: "CONSENSUS",
    description:
      "Game-theoretical engine for weighing contradictory reviewer findings.",
    delay: 200,
  },
  {
    number: "04",
    title: "LIVE DASH",
    description:
      "Real-time visualization of the global security state of the ecosystem.",
    delay: 300,
  },
];

export default function CorePrimitives() {
  return (
    <section className="bg-background/80 backdrop-blur-md py-3xl border-t border-line relative z-10">
      <div className="max-w-7xl mx-auto px-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {primitives.map(({ number, title, description, delay }) => (
            <div
              key={number}
              className="reveal glass-panel p-lg transition-colors glow-border-hover rounded card-accent"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="font-eyebrow text-primary-container mb-md uppercase tracking-widest">
                {number} Primitive
              </div>
              <h4 className="font-headline-sm text-headline-sm text-text-primary mb-sm">
                {title}
              </h4>
              <p className="text-text-secondary font-body text-caption">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
