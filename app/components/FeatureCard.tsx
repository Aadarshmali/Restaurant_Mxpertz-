type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-950 dark:shadow-none">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl dark:bg-slate-800">
        <span>{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{description}</p>
    </article>
  );
}
