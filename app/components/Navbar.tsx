import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu", dropdown: true },
  { label: "Services", href: "#about", dropdown: true },
  { label: "Offers", href: "#offers" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="#home" className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-300 text-xl font-bold text-white">
            F
          </span>
          <span>OODI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
              {link.dropdown ? <span className="text-xs">▼</span> : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-slate-300 hover:bg-slate-50">
            🔍
          </button>
          <button className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
            🛒<span className="ml-1 rounded-full bg-emerald-300 px-2 py-1 text-xs font-bold text-white">8</span>
          </button>
          <Link
            href="#footer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-300/20 transition hover:bg-emerald-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
