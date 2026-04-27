import { posts } from "@/data/site";

export function RecentPosts() {
  return (
    <section className="min-w-0" aria-labelledby="recent-posts-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-neutral-300 pb-3">
        <h2
          id="recent-posts-heading"
          className="font-serif text-3xl font-normal text-neutral-900 sm:text-4xl"
        >
          Recent Posts
        </h2>
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-ciams-red hover:text-ciams-red-dark"
        >
          MORE POSTS &rarr;
        </a>
      </div>
      <ul className="divide-y divide-neutral-200">
        {posts.map((post) => (
          <li key={post.id} className="py-6 first:pt-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs uppercase tracking-wide text-neutral-500">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden>|</span>
              <span>
                {post.author} | {post.category}
              </span>
              <span aria-hidden>|</span>
              <a href="#" className="text-ciams-red hover:underline">
                EDIT
              </a>
            </div>
            <h3 className="mt-2 font-serif text-xl font-normal text-neutral-900 sm:text-2xl">
              <a href="#" className="hover:text-ciams-red-dark">
                {post.title}
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
