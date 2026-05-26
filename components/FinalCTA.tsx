export default function FinalCTA() {
  return (
    <section className="py-3xl text-center relative z-10">
      <div className="max-w-4xl mx-auto px-lg flex flex-col items-center gap-xl reveal">
        <h2 className="font-hero text-headline-lg-mobile md:text-hero text-text-primary uppercase leading-none drop-shadow-[0_0_15px_rgba(245,230,66,0.3)]">
          MAKE SMART CONTRACT REVIEW OPEN, FAST, AND TRUSTLESS
        </h2>

        <div className="flex flex-wrap justify-center gap-md">
          <button className="cta-pulse bg-primary-container text-on-primary-container px-xl py-md font-bold uppercase hover:bg-primary-fixed transition-colors glow-border rounded active:scale-[0.98]">
            Launch Review
          </button>
          <button className="glass-panel text-text-primary px-xl py-md font-bold uppercase hover:border-primary-container hover:text-primary-container transition-colors glow-border-hover rounded active:scale-[0.98]">
            View GitHub
          </button>
          <button className="glass-panel text-text-primary px-xl py-md font-bold uppercase hover:border-primary-container hover:text-primary-container transition-colors glow-border-hover rounded active:scale-[0.98]">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
