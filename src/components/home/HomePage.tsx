import { SiteHeader } from "@/components/layout/SiteHeader";
import { DonateStrip } from "@/components/home/DonateStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { PromoTileRow } from "@/components/home/PromoTileRow";
import { RecentPosts } from "@/components/home/RecentPosts";
import { Sidebar } from "@/components/home/Sidebar";

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <PromoTileRow />
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            <div className="min-w-0 flex-1 lg:max-w-[calc(100%-20rem)]">
              <DonateStrip />
              <RecentPosts />
            </div>
            <div className="w-full shrink-0 lg:w-72">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto border-t border-neutral-200 bg-neutral-50 py-6 text-center text-sm text-neutral-500">
        Prototype only — content and links are placeholders.
      </footer>
    </div>
  );
}
