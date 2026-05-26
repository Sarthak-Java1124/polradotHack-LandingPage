const stats = [
  {
    icon: "payments",
    value: "$60K",
    description: (
      <>
        Average Audit Cost for a standard <span className="mark">ink!</span>{" "}
        contract.
      </>
    ),
    delay: 100,
  },
  {
    icon: "schedule",
    value: "6 WEEKS",
    description: "Wait Times to secure a slot with top-tier firms.",
    delay: 200,
  },
  {
    icon: "rule",
    value: "85%",
    description: (
      <>
        Most <span className="mark">ink!</span> Contracts remain unreviewed at
        launch.
      </>
    ),
    delay: 300,
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-surface/50 backdrop-blur-sm py-3xl border-y border-line relative z-10">
      <div className="max-w-7xl mx-auto px-lg">
        <div className="mb-xl reveal">
          <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase">
            TRADITIONAL AUDITS DON&apos;T SCALE
          </h2>
          <p className="text-text-secondary font-body text-body mt-md">
            Security review remains inaccessible for early-stage builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {stats.map(({ icon, value, description, delay }) => (
            <div
              key={value}
              className="reveal glass-panel p-xl flex flex-col gap-md glow-border-hover transition-all duration-300 rounded card-accent"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <span className="material-symbols-outlined text-primary-container text-4xl">
                {icon}
              </span>
              <h3 className="font-headline-md text-headline-md text-text-primary">
                {value}
              </h3>
              <p className="text-text-secondary font-body">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
