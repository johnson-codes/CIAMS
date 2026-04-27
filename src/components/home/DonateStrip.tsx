import { sidebar } from "@/data/site";

export function DonateStrip() {
  return (
    <div className="mb-8">
      <a
        href="#"
        className="inline-block rounded border border-neutral-200 bg-white p-1 shadow-sm transition hover:shadow"
      >
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png"
          alt={sidebar.donateImageAlt}
          width={142}
          height={27}
          className="block"
        />
      </a>
    </div>
  );
}
