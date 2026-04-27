import { SearchWidget } from "@/components/common/widgets";

export function Sidebar() {
  return (
    <aside className="flex min-w-0 flex-col gap-6" aria-label="Sidebar">
      <div className="rounded border border-neutral-200 bg-neutral-50 p-4">
        <SearchWidget id="sidebar-site-search" />
      </div>
    </aside>
  );
}
