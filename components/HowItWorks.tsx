const steps = [
  {
    icon: "upload_file",
    step: "1. SUBMIT",
    description:
      "Upload contract CID and fund the bounty pool with POT tokens.",
    delay: 100,
  },
  {
    icon: "token",
    step: "2. REVIEW & STAKE",
    description:
      "Staked reviewers analyze code and commit findings to the registry.",
    delay: 200,
  },
  {
    icon: "verified",
    step: "3. REWARD",
    description:
      "Consensus engine validates findings and releases POT rewards.",
    delay: 300,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-3xl max-w-7xl mx-auto px-lg relative z-10">
      <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase mb-xl reveal">
        THE PROTOCOL FLOW
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-1/2 left-[30%] right-[30%] h-px bg-primary-container/30 -z-10 shadow-[0_0_10px_rgba(245,230,66,0.5)]" />

        {steps.map(({ icon, step, description, delay }) => (
          <div
            key={step}
            className="reveal flex flex-col items-center text-center gap-md"
            style={{ transitionDelay: `${delay}ms` }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-surface-lowest border border-primary-container text-primary-container glow-border rounded">
              <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm text-text-primary">
              {step}
            </h4>
            <p className="text-text-secondary">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
