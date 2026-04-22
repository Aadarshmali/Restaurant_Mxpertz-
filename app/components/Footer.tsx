export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white px-6 py-14 text-sm text-slate-700 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300 text-base font-bold text-white">
            F
          </div>
          <p className="max-w-sm text-base leading-7 text-slate-700">
            Savor the artistry where every dish is a culinary masterpiece.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300 text-white transition hover:bg-emerald-400">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.4c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.2l-.4 2.9h-1.8v7A10 10 0 0022 12" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-600 transition hover:bg-emerald-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm8 3.5a1 1 0 110 2 1 1 0 010-2zm-4 1.3a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 2a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-600 transition hover:bg-emerald-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M22 5.9a8.6 8.6 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.7 1 4.2 4.2 0 00-7.2 3.8 11.9 11.9 0 01-8.6-4.4 4.2 4.2 0 001.3 5.6 4.2 4.2 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 19.6a11.9 11.9 0 006.4 1.9c7.7 0 11.9-6.4 11.9-11.9 0-.2 0-.4 0-.6A8.3 8.3 0 0022 5.9" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-200 text-emerald-600 transition hover:bg-emerald-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M10 15l5.2-3L10 9v6zm11.5-3c0-.9-.1-1.8-.4-2.6-.2-.8-.7-1.4-1.4-1.9-.9-.5-2-.6-6.6-.6-4.6 0-5.8.1-6.6.6-.7.4-1.2 1.1-1.4 1.9-.3.8-.4 1.7-.4 2.6s.1 1.8.4 2.6c.2.8.7 1.4 1.4 1.9.9.5 2 .6 6.6.6 4.6 0 5.8-.1 6.6-.6.7-.4 1.2-1.1 1.4-1.9.3-.8.4-1.7.4-2.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Useful links</h2>
          <ul className="space-y-3 text-base text-slate-600">
            <li>
              <a href="about" className="transition hover:text-slate-900">
                About us
              </a>
            </li>
            <li>
              <a href="offers" className="transition hover:text-slate-900">
                Events
              </a>
            </li>
            <li>
              <a href="menu" className="transition hover:text-slate-900">
                Blogs
              </a>
            </li>
            <li>
              <a href="#footer" className="transition hover:text-slate-900">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Main menu</h2>
          <ul className="space-y-3 text-base text-slate-600">
            <li>
              <a href="home" className="transition hover:text-slate-900">
                Home
              </a>
            </li>
            <li>
              <a href="offers" className="transition hover:text-slate-900">
                Offers
              </a>
            </li>
            <li>
              <a href="menu" className="transition hover:text-slate-900">
                Menus
              </a>
            </li>
            <li>
              <a href="about" className="transition hover:text-slate-900">
                Reservation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Contact us</h2>
          <div className="space-y-3 text-base text-slate-600">
            <p>adarsh@email.com</p>
            <p>+91 958 248 966</p>
            <p>Social media</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-200 pt-6 text-center text-slate-500">
        Copyright © 2026 Dscode | All rights reserved
      </div>
    </footer>
  );
}
