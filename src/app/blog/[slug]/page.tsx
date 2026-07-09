"use client";

import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag, Loader2, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  coverImage: string;
  authorEmail: string;
  readingTime: number;
  seoTitle: string;
  seoDescription: string;
  createdAt: { seconds: number; nanoseconds: number } | null;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("slug", "==", slug),
        where("status", "==", "published")
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setNotFound(true);
      } else {
        const doc = snapshot.docs[0];
        setPost({ id: doc.id, ...doc.data() } as BlogPost);
      }
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: { seconds: number } | null) => {
    if (!timestamp) return "";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <main className="bg-slate-950 min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center py-64">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      </main>
    );
  }

  if (notFound || !post) {
    return (
      <main className="bg-slate-950 min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-64 px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">
            The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />

      <article className="relative pt-32 pb-24 px-6 lg:px-8">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-500 text-sm truncate max-w-[200px]">{post.title}</span>
          </motion.div>

          {/* Category & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
              {post.category}
            </span>
            {post.createdAt && (
              <span className="flex items-center gap-1.5 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                {formatDate(post.createdAt)}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              {post.readingTime || 1} min read
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Summary */}
          {post.summary && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed"
            >
              {post.summary}
            </motion.p>
          )}

          {/* Cover Image */}
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/5 mb-12"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-code:text-cyan-400 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
              prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl
              prose-blockquote:border-blue-500 prose-blockquote:text-slate-400
              prose-img:rounded-xl prose-img:border prose-img:border-white/5
              prose-li:text-slate-300
              prose-hr:border-white/10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-white/5"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-slate-500" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-sm border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
