import { hero } from "@/data/site";

export function HeroSection() {
  return (
    <section className="bg-white px-4 pb-10 sm:px-6 sm:pb-12" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl">
        <div className="relative min-h-[28rem] overflow-hidden rounded-sm bg-neutral-900 sm:min-h-[32rem]">
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div className="relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div className="max-w-3xl">
              <h1
                id="hero-heading"
                className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
              >
                {hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">{hero.subtitle}</p>
              <a
                href={hero.ctaHref}
                className="mt-8 inline-block bg-ciams-red px-10 py-3 text-center text-sm font-bold tracking-widest text-white shadow-md transition hover:bg-ciams-red-dark"
              >
                {hero.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
