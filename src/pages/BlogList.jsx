import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Seo from "../components/Seo";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blog`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-pearl py-24 pt-40 min-h-screen">
      <Seo
        title="Blog"
        description="Insights, updates and ideas from PearlVector on technology, innovation and digital transformation in Africa."
        path="/blog"
      />
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* ...rest unchanged... */}

        {loading && (
          <p className="text-center text-ink/60">Loading posts...</p>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-center text-ink/60">
            No posts published yet — check back soon.
          </p>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-card transition-transform hover:-translate-y-1"
            >
              {post.cover_image_url && (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={post.cover_image_url}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-xs text-ink/50">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.created_at).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h2 className="font-display text-lg font-semibold text-navy group-hover:text-emerald">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-ink/70">
                  {post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
