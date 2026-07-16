import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-pearl pt-40 pb-24 text-center">
        <p className="text-ink/60">Loading...</p>
      </section>
    );
  }

  if (notFound) {
    return (
      <section className="min-h-screen bg-pearl pt-40 pb-24 text-center">
        <p className="text-ink/60">Post not found.</p>
        <Link to="/blog" className="mt-4 inline-block text-emerald hover:underline">
          ← Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="min-h-screen bg-pearl pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        {post.cover_image_url && (
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="mb-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-card"
          />
        )}

        <div className="mb-4 flex items-center gap-2 text-sm text-ink/50">
          <Calendar className="h-4 w-4" />
          {new Date(post.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          {post.title}
        </h1>

        <div className="prose prose-navy mt-8 max-w-none whitespace-pre-wrap text-ink/80 leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}