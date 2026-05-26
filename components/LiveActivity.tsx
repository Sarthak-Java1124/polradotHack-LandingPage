const activities = [
  {
    contract: "DEX_SWAP_V2.wasm",
    wallet: "5Grwva...9Yy",
    findingType: "Critical",
    findingClass:
      "text-error border border-error/50 bg-error/10 px-sm py-xs uppercase rounded",
    payout: "12,400 POT",
  },
  {
    contract: "STAKE_VAULT.ink",
    wallet: "5FHneW...4p3",
    findingType: "Medium",
    findingClass:
      "text-secondary border border-secondary/50 bg-secondary/10 px-sm py-xs uppercase rounded",
    payout: "3,200 POT",
  },
  {
    contract: "NFT_MARKET.wasm",
    wallet: "5FLSig...7kQ",
    findingType: "Low",
    findingClass:
      "text-text-secondary border border-text-secondary/50 bg-text-secondary/10 px-sm py-xs uppercase rounded",
    payout: "850 POT",
  },
];

export default function LiveActivity() {
  return (
    <section className="py-3xl bg-surface/50 backdrop-blur-md border-y border-line relative z-10">
      <div className="max-w-7xl mx-auto px-lg">
        <div className="flex justify-between items-end mb-xl reveal">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase">
              LIVE PROTOCOL ACTIVITY
            </h2>
            <p className="text-text-secondary font-body">
              Recent review completions and payouts.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-sm">
            <div className="w-2 h-2 bg-primary-container rounded-full animate-pulse shadow-[0_0_8px_#f5e642]" />
            <span className="text-label font-label uppercase text-primary-container">
              Node Network Online
            </span>
          </div>
        </div>

        <div className="overflow-x-auto glass-panel reveal rounded">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-primary-container/30">
                {["Contract Name", "Reviewer Wallet", "Finding Type", "Payout"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className={`py-md px-lg text-label uppercase text-primary-container font-label${
                        heading === "Payout" ? " text-right" : ""
                      }`}
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="font-body text-caption">
              {activities.map(
                ({ contract, wallet, findingType, findingClass, payout }) => (
                  <tr
                    key={contract}
                    className="border-b border-line hover:bg-primary-container/10 transition-colors stagger-reveal"
                  >
                    <td className="py-md px-lg text-text-primary font-bold">
                      {contract}
                    </td>
                    <td className="py-md px-lg text-text-secondary font-mono">
                      {wallet}
                    </td>
                    <td className="py-md px-lg">
                      <span className={findingClass}>{findingType}</span>
                    </td>
                    <td className="py-md px-lg text-right text-primary-container font-bold">
                      {payout}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
