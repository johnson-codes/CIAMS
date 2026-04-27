import { hero } from "@/data/site";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[28rem] overflow-hidden bg-neutral-900 sm:min-h-[32rem]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-stretch lg:py-20">
        <div className="flex shrink-0 items-start justify-center sm:justify-start lg:w-28">
          <span
            className="font-serif text-6xl font-light leading-none tracking-tight text-white/90 sm:text-8xl lg:text-9xl"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.85)", color: "transparent" }}
            aria-hidden
          >
            {hero.year}
          </span>
        </div>
        <div className="max-w-3xl flex-1">
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
    </section>
  );
}
