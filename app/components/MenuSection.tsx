import Image from "next/image";
import CategoryCard from "./CategoryCard";
import DishCard from "./DishCard";

const categories = [
  {
    name: "Main Dish",
    details: "(86 dishes)",
    art: <FoodArt src="/categories/main-dish.png" alt="" className="w-[76%] translate-y-1" />,
  },
  {
    name: "Break Fast",
    details: "(12 break fast)",
    art: <FoodArt src="/categories/breakfast.png" alt="" className="w-[86%] translate-y-1" />,
  },
  {
    name: "Dessert",
    details: "(48 dessert)",
    art: <FoodArt src="/categories/dessert.png" alt="" className="w-[72%] translate-y-2" />,
  },
  {
    name: "Browse All",
    details: "(255 Items)",
    art: <BrowseAllArt />,
  },
];

const dishes = [
  {
    name: "Forest Mushroom Pasta",
    price: "$24.00",
    description: "Creamy pasta with wild mushrooms and shaved parmesan.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vegetable Salad",
    price: "$18.00",
    description: "Fresh greens tossed with citrus dressing and toasted seeds.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Egg Royal Croissant",
    price: "$14.00",
    description: "Flaky pastry filled with creamy eggs and aged cheese.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="space-y-12 py-12 sm:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6868] sm:text-sm">
          Customer Favorites 
        </p>
        <h1>Popular Categories</h1> 
      </div>

      <div className="flex flex-row gap-6 justify-center items-center flex-wrap">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            art={category.art}
            name={category.name}
            details={category.details}
          />
        ))}
      </div>

      <div className="grid gap-6 pt-6 md:grid-cols-3">
        {dishes.map((dish) => (
          <DishCard key={dish.name} {...dish} />
        ))}
      </div>
    </section>
  );
}

type FoodArtProps = {
  src: string;
  alt: string;
  className: string;
};

function FoodArt({ src, alt, className }: FoodArtProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      sizes="50px"
      className={`h-auto object-contain drop-shadow-[0_12px_16px_rgba(15,23,42,0.12)] ${className}`}
    />
  );
}

function BrowseAllArt() {
  return (
    <div className="relative h-24 w-24">
      <Image
        src="/categories/juice-glass.png"
        alt=""
        width={120}
        height={120}
        sizes="50px"
        className="absolute right-0 top-0 h-auto w-[56%] object-contain drop-shadow-[0_12px_16px_rgba(15,23,42,0.12)]"
      />
      <Image
        src="/categories/orange-slice.png"
        alt=""
        width={120}
        height={120}
        sizes="50px"
        className="absolute bottom-2 left-0 h-auto w-[36%] object-contain drop-shadow-[0_12px_16px_rgba(15,23,42,0.12)]"
      />
    </div>
  );
}
