import { NewsletterWidget, SearchWidget, SocialWidget, TranslateWidget } from "@/components/common/widgets";
import { flattenFooterLinks, footerAboutLinks, footerContactLink, siteName } from "@/data/site";
import { externalLinkProps } from "@/lib/externalLink";

export function SiteFooter() {
  const links = flattenFooterLinks();

  return (
    <footer className="mt-auto bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="font-serif text-lg font-semibold text-white">{siteName}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Supporting young artists and cultural exchange across Canada and beyond.
            </p>
          </div>

          <nav aria-label="Footer" className="space-y-8">
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">About</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {footerAboutLinks.map((link, i) => (
                  <li key={`about-${i}-${link.label}`}>
                    <a
                      href={link.href}
                      {...externalLinkProps(link.href)}
                      className="text-neutral-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">Explore</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {links.map((link, i) => (
                  <li key={`explore-${i}-${link.label}`}>
                    <a
                      href={link.href}
                      {...externalLinkProps(link.href)}
                      className="text-neutral-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">Contact</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                <li>
                  <a
                    href={footerContactLink.href}
                    {...externalLinkProps(footerContactLink.href)}
                    className="text-neutral-300 hover:text-white"
                  >
                    {footerContactLink.label}
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-lg font-semibold text-white">Search</h2>
              <div className="mt-3">
                <SearchWidget id="footer-site-search" />
              </div>
            </div>
            <TranslateWidget variant="dark" />
          </div>

          <div className="space-y-8">
            <SocialWidget variant="dark" />
            <NewsletterWidget variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {siteName}. Prototype — links and forms are placeholders.
      </div>
    </footer>
  );
}
