"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { Save, Image as ImageIcon, Send, ArrowLeft, Settings, LayoutTemplate, Search } from "lucide-react";
import Link from "next/link";
import slugify from "slugify";

import RichTextEditor from "@/components/admin/RichTextEditor";

export default function CreateBlog() {
  const { user } = useAuthStore();
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"editor" | "settings" | "seo">("editor");

  // Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("<p>Start writing your amazing article here...</p>");
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");

  // SEO State
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(slugify(newTitle, { lower: true, strict: true }));
    if (!seoTitle) setSeoTitle(newTitle);
  };

  const handleSave = async (saveStatus: "draft" | "published") => {
    if (!title) return alert("Title is required");
    setLoading(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        slug,
        summary,
        content,
        category,
        tags: tags.split(",").map(t => t.trim()).filter(Boolean),
        coverImage,
        authorId: user?.uid,
        authorEmail: user?.email,
        status: saveStatus,
        seoTitle,
        seoDescription: seoDesc,
        metaKeywords,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        readingTime: Math.ceil(content.split(" ").length / 200), // roughly 200 words per minute
        views: 0,
      });

      router.push("/admin/blogs");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="p-2 rounded-xl bg-slate-900/50 border border-white/5 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Create New Post</h1>
            <p className="text-slate-400 text-sm">Drafting a new masterpiece.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSave("draft")}
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/20"
          >
            <Send className="w-4 h-4" />
            Publish
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/5 pb-2">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "editor" ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"}`}
        >
          <LayoutTemplate className="w-4 h-4" />
          Editor
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "settings" ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"}`}
        >
          <Settings className="w-4 h-4" />
          Post Settings
        </button>
        <button
          onClick={() => setActiveTab("seo")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "seo" ? "bg-white/10 text-white" : "text-slate-400 hover:text-slate-200"}`}
        >
          <Search className="w-4 h-4" />
          SEO Meta
        </button>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Editor or Settings) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title Input (Always visible) */}
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Post Title..."
              className="w-full bg-transparent text-3xl font-bold text-white placeholder-slate-600 focus:outline-none"
            />
            <div className="mt-2 text-sm text-slate-500 flex items-center gap-2">
              <span>Slug:</span>
              <span className="text-emerald-400">/blog/{slug || "post-title"}</span>
            </div>
          </div>

          {activeTab === "editor" && (
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 min-h-[500px]">
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Short Summary</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="A brief summary for the blog card..."
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                    <option value="Tutorials">Tutorials</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="React, Next.js, Firebase..."
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">SEO Title</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Meta Description</label>
                <textarea
                  value={seoDesc}
                  onChange={(e) => setSeoDesc(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Keywords</label>
                <input
                  type="text"
                  value={metaKeywords}
                  onChange={(e) => setMetaKeywords(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column (Sidebar Settings) */}
        <div className="space-y-6">
          <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Cover Image</h3>
            {coverImage ? (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 mb-4 group">
                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                <button 
                  onClick={() => setCoverImage("")}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                >
                  Change Image
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setCoverImage("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop")} // Mock upload for now
                className="w-full aspect-video rounded-xl border-2 border-dashed border-slate-700 hover:border-blue-500/50 flex flex-col items-center justify-center text-slate-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all mb-4"
              >
                <ImageIcon className="w-8 h-8 mb-2" />
                <span>Upload Cover</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
