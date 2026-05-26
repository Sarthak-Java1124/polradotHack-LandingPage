const traditional = [
  "Static point-in-time assessment",
  "Single point of failure (Audit Firm)",
  "Opaque, non-reproducible methodology",
];

const portalReview = [
  "Continuous, modular security flow",
  "Decentralized stake-backed consensus",
  "On-chain reputation incentives",
];

export default function ComparisonSection() {
  return (
    <section className="py-3xl max-w-7xl mx-auto px-lg relative z-10">
      <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-xl reveal">
        SECURITY SHOULD BE CONTINUOUS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary-container/20 border border-primary-container/30 shadow-[0_0_20px_rgba(245,230,66,0.1)] rounded">
        {/* Traditional column */}
        <div className="bg-background/90 p-xl reveal rounded-l">
          <h3 className="font-headline-md text-headline-md text-text-secondary mb-xl uppercase">
            TRADITIONAL AUDITS
          </h3>
          <ul className="flex flex-col gap-lg">
            {traditional.map((item) => (
              <li key={item} className="flex items-start gap-md text-text-secondary">
                <span className="material-symbols-outlined text-error">close</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PortalReview column */}
        <div
          className="bg-surface/90 p-xl reveal rounded-r card-accent"
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="font-headline-md text-headline-md text-primary-container mb-xl uppercase drop-shadow-[0_0_8px_rgba(245,230,66,0.5)]">
            PORTALREVIEW
          </h3>
          <ul className="flex flex-col gap-lg">
            {portalReview.map((item) => (
              <li key={item} className="flex items-start gap-md text-text-primary">
                <span className="material-symbols-outlined text-primary-container">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
