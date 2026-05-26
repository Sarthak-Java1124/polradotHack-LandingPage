export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-line">
      <div className="flex justify-between items-center w-full px-lg py-md max-w-7xl mx-auto">
        <div className="font-headline-sm text-headline-sm text-text-primary uppercase tracking-tight">
          PortalReview
        </div>

        <div className="hidden md:flex gap-lg">
          <a
            href="#"
            className="text-primary-container font-bold border-b border-primary-container pb-1 font-body hover:text-primary-container transition-all duration-[120ms]"
          >
            Reviews
          </a>
          <a
            href="#"
            className="text-text-secondary font-body text-body hover:text-primary-container hover:bg-surface-hi transition-all duration-[120ms]"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-text-secondary font-body text-body hover:text-primary-container hover:bg-surface-hi transition-all duration-[120ms]"
          >
            Stake
          </a>
        </div>

        <button className="bg-primary-container text-on-primary-container px-lg py-sm uppercase font-bold font-body active:scale-[0.98] transition-transform rounded glow-border">
          Launch App
        </button>
      </div>
    </nav>
  );
}
