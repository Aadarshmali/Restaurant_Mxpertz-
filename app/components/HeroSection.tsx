import Image from "next/image";
import Link from "next/link";

const featuredDishes = [
  {
    name: "Spicy noodles",
    price: "$18.00",
    image: "/dish-spicy-noodles.jpg",
  },
  {
    name: "Vegetarian salad",
    price: "$23.00",
    image: "/dish-vegetarian-salad.jpg",
  },
];

const ratings = [true, true, true, true, false];

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M8 6.8v10.4c0 .8.9 1.3 1.6.8l8.1-5.2a1 1 0 000-1.7L9.6 6a1 1 0 00-1.6.8z" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? "fill-amber-400" : "fill-slate-200"}`}
      aria-hidden="true"
    >
      <path d="M9.1 2.6a1 1 0 011.8 0l1.7 3.5 3.9.6a1 1 0 01.6 1.7l-2.8 2.8.7 3.9a1 1 0 01-1.4 1.1L10 14.5l-3.5 1.8a1 1 0 01-1.4-1.1l.7-3.9L3 8.4a1 1 0 01.6-1.7l3.9-.6 1.6-3.5z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-100 bg-[radial-gradient(circle_at_top_left,_rgba(57,219,74,0.16),_transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-10 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.28)] sm:px-8 lg:px-12 lg:py-14">
      <div className="absolute left-[-5rem] top-[-4rem] h-44 w-44 rounded-full bg-[#39db4a]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-7rem] right-[-4rem] h-52 w-52 rounded-full bg-[#39db4a]/12 blur-3xl" aria-hidden="true" />

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#ff6868] shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#ff6868]" aria-hidden="true" />
            Hot meals with bright flavor
          </div>

          <div className="space-y-6">
            <h1 className="max-w-[11ch] text-5xl font-black leading-[0.96] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-[4.75rem]">
              Dive into Delights
              <br />
              Of Delectable <span className="text-[#39db4a]">Food</span>
            </h1>
            <p className="max-w-xl text-lg leading-9 text-slate-600 sm:text-xl">
              Where each plate weaves a story of culinary mastery and passionate craftsmanship.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="#menu"
              className="inline-flex min-w-[11rem] items-center justify-center rounded-full bg-[#39db4a] px-8 py-4 text-lg font-bold text-white shadow-[0_24px_55px_-24px_rgba(57,219,74,0.95)] transition hover:bg-[#2fca3f]"
            >
              Order Now
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-4 text-lg font-semibold text-slate-700 transition hover:text-slate-950"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_20px_50px_-26px_rgba(15,23,42,0.38)]">
                <PlayIcon />
              </span>
              Watch Video
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[36rem] items-end justify-center pb-28 pt-8 sm:pb-32 lg:justify-end lg:pb-6">
          <div
            className="absolute right-1 top-8 h-[18rem] w-[18rem] rounded-full bg-[#39db4a] sm:h-[24rem] sm:w-[24rem] lg:right-0 lg:top-4 lg:h-[28rem] lg:w-[28rem]"
            aria-hidden="true"
          />

          <div className="absolute left-0 top-0 rounded-[1.6rem] bg-white px-5 py-3 text-sm font-semibold text-[#ff6868] shadow-[0_20px_50px_-25px_rgba(15,23,42,0.35)] sm:left-2 sm:text-base lg:left-10">
            Hot spicy Food
          </div>

          <div className="relative z-10 overflow-hidden rounded-[2.75rem] border-[10px] border-white shadow-[0_35px_90px_-45px_rgba(15,23,42,0.5)]">
            <Image
              src="/hero-noodles.jpg"
              alt="Woman enjoying a bowl of noodles"
              width={1200}
              height={1500}
              priority
              className="h-[24rem] w-[20rem] object-cover object-center sm:h-[28rem] sm:w-[23rem] lg:h-[32rem] lg:w-[26rem]"
            />
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 grid w-full max-w-[27rem] -translate-x-1/2 gap-3 sm:grid-cols-2 lg:bottom-2">
            {featuredDishes.map((dish) => (
              <article
                key={dish.name}
                className="flex items-center gap-3 rounded-[1.6rem] bg-white p-3 shadow-[0_25px_55px_-35px_rgba(15,23,42,0.55)]"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={96}
                  height={96}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold text-slate-950">{dish.name}</p>
                  <div className="mt-1 flex items-center gap-1" aria-hidden="true">
                    {ratings.map((filled, index) => (
                      <StarIcon key={`${dish.name}-${index}`} filled={filled} />
                    ))}
                  </div>
                  <p className="mt-1 text-base font-semibold text-slate-500">{dish.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
