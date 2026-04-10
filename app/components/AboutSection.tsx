const services = [
  { title: "Delivery", description: "Fast and fresh delivery to your door." },
  { title: "Private Dining", description: "Elegant private dining experiences." },
  { title: "Event Catering", description: "Custom menus for every celebration." },
  { title: "Seasonal Menu", description: "Fresh ingredients curated every season." },
];

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
      <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.15)]">
        <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Standout dishes</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">From our menu to your table.</h2>
        <p className="mt-6 text-base leading-8 text-slate-600">
          Our culinary team crafts every plate with premium ingredients, seasonal flavors, and a passion for satisfaction.
          Perfect for date night, celebrations, and memorable meals.
        </p>
        <div className="mt-10 space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-950">Reserve a table</h3>
            <p className="mt-2 text-sm text-slate-600">Enjoy an unforgettable dining experience with a curated seasonal menu.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-950">Fresh ingredients</h3>
            <p className="mt-2 text-sm text-slate-600">Locally sourced produce and culinary expertise in every dish.</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.15)]">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-3xl bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1546554137-f86b9593a0c3?auto=format&fit=crop&w=500&q=80"
              alt="Chef portrait"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-500">Chef</p>
            <p className="text-xl font-semibold text-slate-950">Chef Amira L.</p>
          </div>
        </div>
        <blockquote className="mt-8 text-lg leading-8 text-slate-600">
          “Our kitchen is inspired by bold flavors, fresh ingredients, and a belief that every meal should feel special.”
        </blockquote>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-950">{service.title}</p>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
