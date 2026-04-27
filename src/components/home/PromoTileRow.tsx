import { promoTiles } from "@/data/site";

export function PromoTileRow() {
  return (
    <section className="border-y border-neutral-800 bg-ciams-tile" aria-label="Featured highlights">
      <div className="mx-auto grid max-w-6xl divide-y divide-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
        {promoTiles.map((tile) => (
          <a
            key={tile.id}
            href="#"
            className="block px-4 py-5 text-center text-xs font-semibold leading-snug tracking-wide text-white transition hover:bg-neutral-900 sm:px-6 sm:text-sm"
          >
            {tile.text}
          </a>
        ))}
      </div>
    </section>
  );
}
