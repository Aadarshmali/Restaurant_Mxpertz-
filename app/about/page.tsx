import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <section className="grid gap-10 rounded-[2rem] bg-white px-8 py-10 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.15)] dark:bg-slate-900/95">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-600">About Savor</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              A culinary journey built for unforgettable meals.
            </h1>
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
              At Savor, we celebrate the art of food with a menu designed for flavor, comfort, and hospitality.
              Our chefs create seasonal dishes that honor quality ingredients and thoughtful presentation.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-950/90">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Our philosophy</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                We bring people together with curated dishes, warm service, and a relaxing atmosphere.
                Every plate is made to delight and every visit is crafted to feel special.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800/80 dark:bg-slate-950/90">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Our experience</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                From intimate dinners to group celebrations, our restaurant is designed to suit every occasion.
                Enjoy expertly paired flavors and thoughtful service.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#home"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Return home
            </Link>
            <a
              href="#footer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Contact us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
