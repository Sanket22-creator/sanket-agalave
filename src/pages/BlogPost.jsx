import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/content";

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <main className="min-h-screen p-10 bg-[#e7efe1] text-[#111827]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Blog not found</h1>
          <Link to="/" className="text-[#168954] font-bold">Go back</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 sm:p-10 bg-[#e7efe1] text-[#111827]">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-[#168954] mb-8 inline-block font-bold hover:text-[#106a40] transition-colors">← Back to Portfolio</Link>

        <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-[1.08] text-[#111827]">{blog.title}</h1>
        <div className="text-sm sm:text-base text-[#168954] mb-8 font-bold uppercase tracking-[0.08em]">{blog.category}</div>

        {blog.externalUrl && (
          <a
            href={blog.externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-2xl px-5 py-3 glass text-sm sm:text-base text-[#111827] hover:bg-white/80 transition-colors mb-10 font-bold"
          >
            Read Original Post ↗
          </a>
        )}

        <article className="blog-content">
          {blog.fullContent.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </div>
    </main>
  );
}
