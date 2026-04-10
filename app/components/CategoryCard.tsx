import type { ReactNode } from "react";

type CategoryCardProps = {
  art: ReactNode;
  name: string;
  details: string;
};

export default function CategoryCard({ art, name, details }: CategoryCardProps) {
  return (
    <article className="group relative flex min-h-[20.5rem] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-slate-100 bg-white px-6 py-9 text-center shadow-[0_24px_60px_-38px_rgba(15,23,42,0.28)] transition-transform duration-300 hover:-translate-y-1 sm:px-8">
      <div
        className="absolute inset-x-6 top-4 h-16 rounded-full bg-slate-100/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#d9f7d3] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        {art}
      </div>

      <div className="relative space-y-2">
        <h3 className="text-[1.7rem] font-semibold tracking-[-0.03em] text-slate-900">{name}</h3>
        <p className="text-lg text-slate-500">{details}</p>
      </div>
    </article>
  );
}
