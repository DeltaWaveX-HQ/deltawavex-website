"use client";

import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  coverImage: string;
  authorEmail: string;
  readingTime: number;
  createdAt: { seconds: number; nanoseconds: number } | null;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(
        collection(db, "blogs"),
        where("status", "==", "published"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const blogPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
      setPosts(blogPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const formatDate = (timestamp: { seconds: number } | null) => {
    if (!timestamp) return "";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-sm">Blog</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Our <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl"
          >
            Insights, tutorials, and updates from the DeltaWaveX team.
          </motion.p>

          {/* Category Filter */}
          {categories.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-6">
                <Tag className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No posts yet</h3>
              <p className="text-slate-500">Check back soon for new content!</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                      {/* Cover Image */}
                      {post.coverImage && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Category & Date */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          {post.createdAt && (
                            <span className="text-xs text-slate-500">
                              {formatDate(post.createdAt)}
                            </span>
                          )}
                        </div>

                        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {post.summary && (
                          <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1">
                            {post.summary}
                          </p>
                        )}

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Clock className="w-4 h-4" />
                            {post.readingTime || 1} min read
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                            Read more
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
