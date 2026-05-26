const links = ["GitHub", "X", "Docs", "Portaldot"] as const;

export default function Footer() {
  return (
    <footer className="bg-background/90 backdrop-blur-md border-t border-line mt-3xl relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-lg py-xl max-w-7xl mx-auto gap-md">
        <div className="font-headline-sm text-headline-sm text-text-primary">
          PortalReview
        </div>

        <div className="flex gap-lg">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-text-secondary font-label text-label uppercase tracking-widest hover:text-primary-container transition-colors duration-[120ms]"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-text-secondary font-label text-label uppercase tracking-widest text-center md:text-right">
          © 2024 PORTALREVIEW PROTOCOL. VOID-STAKED SECURITY.
        </div>
      </div>
    </footer>
  );
}
