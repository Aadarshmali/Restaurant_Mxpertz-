import Button from "./Button";

type DishCardProps = {
  name: string;
  price: string;
  description: string;
  image: string;
};

export default function DishCard({ name, price, description, image }: DishCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <img src={image} alt={name} className="h-56 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-950">{name}</h3>
          <span className="rounded-2xl bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{price}</span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        <Button href="#" variant="secondary">
          Order now
        </Button>
      </div>
    </article>
  );
}
