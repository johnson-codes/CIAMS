import { useState } from "react";
import { navItems, siteName } from "@/data/site";
import type { NavItem } from "@/data/site";

function isDropdown(item: NavItem): item is Extract<NavItem, { children: unknown }> {
  return "children" in item;
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold tracking-wide text-neutral-800 hover:text-ciams-red-dark"
    >
      {children}
    </a>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
      <ul className="flex items-center gap-6">
        {navItems.map((item) => (
          <li key={item.label} className="relative">
            {isDropdown(item) ? (
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-neutral-800 hover:text-ciams-red-dark"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronIcon className="size-3 transition group-hover:rotate-180" />
                </button>
                <div
                  className="invisible absolute left-0 top-full z-50 mt-2 min-w-[12rem] rounded border border-neutral-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-ciams-red-dark"
                      role="menuitem"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink href={item.href}>{item.label}</NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <span className="text-sm font-semibold text-neutral-600">Menu</span>
          <button
            type="button"
            className="rounded p-2 text-neutral-600 hover:bg-neutral-100"
            onClick={onClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile primary">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {isDropdown(item) ? (
                  <details className="group rounded-md border border-neutral-100">
                    <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-neutral-800 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between">
                        {item.label}
                        <ChevronIcon className="size-3 group-open:rotate-180" />
                      </span>
                    </summary>
                    <ul className="border-t border-neutral-100 bg-neutral-50 py-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:text-ciams-red-dark"
                            onClick={onClose}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span
            className="size-10 shrink-0 bg-ciams-red"
            aria-hidden
          />
          <span className="font-serif text-sm font-bold leading-snug text-neutral-900 sm:text-base">
            {siteName}
          </span>
        </a>
        <DesktopNav />
        <button
          type="button"
          className="inline-flex rounded p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon />
        </button>
      </div>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 8L1 3h10z" />
    </svg>
  );
}
