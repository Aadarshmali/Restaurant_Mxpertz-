import Button from "./Button";

const offers = [
  {
    title: "Lunch bundle",
    description: "Save 20% on selected midday favorites.",
  },
  {
    title: "Weekend special",
    description: "Complimentary dessert with every main course.",
  },
  {
    title: "Chef’s choice",
    description: "Limited-time dishes crafted by our executive chef.",
  },
];

export default function OfferSection() {
  return (
    <section id="offers" className="space-y-8 rounded-[2rem] bg-white px-6 py-10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.15)]">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Offers</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">Delicious deals worth tasting</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer) => (
          <div key={offer.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">{offer.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{offer.description}</p>
          </div>
        ))}
      </div>
      <Button href="#footer" variant="secondary">
        View all offers
      </Button>
    </section>
  );
}
