import { useCallback } from "react";
import { sidebar } from "@/data/site";

export function Sidebar() {
  const onNewsletterSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <aside className="flex min-w-0 flex-col gap-6" aria-label="Sidebar">
      <div className="rounded border border-neutral-200 bg-neutral-50 p-4">
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            id="site-search"
            type="search"
            placeholder="SEARCH ..."
            className="w-full rounded border border-neutral-300 bg-white py-2 pl-3 pr-10 text-sm text-neutral-800 placeholder:text-neutral-400"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
            <SearchIcon />
          </span>
        </div>
      </div>

      <div className="rounded border border-neutral-200 bg-neutral-50 p-4">
        <h2 className="mb-2 font-serif text-lg font-semibold text-neutral-900">Translate</h2>
        <label htmlFor="translate-select" className="sr-only">
          Select language
        </label>
        <select
          id="translate-select"
          disabled
          className="w-full cursor-not-allowed rounded border border-neutral-300 bg-white py-2 pl-3 text-sm text-neutral-500"
          defaultValue=""
        >
          <option value="">Select Language</option>
        </select>
      </div>

      <div className="rounded border border-neutral-200 bg-neutral-50 p-4">
        <h2 className="mb-3 font-serif text-lg font-semibold text-neutral-900">
          {sidebar.socialHeading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {sidebar.socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 transition hover:border-ciams-red hover:text-ciams-red-dark"
              >
                <span className="sr-only">{link.label}</span>
                <span aria-hidden className="[&>svg]:size-5">
                  {link.id === "facebook" && <FacebookIcon />}
                  {link.id === "instagram" && <InstagramIcon />}
                  {link.id === "x" && <XIcon />}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded border border-neutral-200 bg-neutral-50 p-4">
        <h2 className="mb-2 font-serif text-lg font-semibold text-neutral-900">
          {sidebar.newsletterHeading}
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-neutral-600">{sidebar.newsletterBlurb}</p>
        <form onSubmit={onNewsletterSubmit} className="flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-ciams-gold px-6 py-2 text-sm font-bold text-neutral-900 shadow-sm transition hover:brightness-95"
          >
            Follow
          </button>
        </form>
      </div>
    </aside>
  );
}

function SearchIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
