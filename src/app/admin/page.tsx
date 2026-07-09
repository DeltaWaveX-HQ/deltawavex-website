"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { FileText, Eye, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const { user, role } = useAuthStore();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back,</h1>
        <p className="text-slate-400 text-lg">{user?.email}</p>
        {role && (
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            {role}
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Blogs", value: "0", icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10" },
          { label: "Published", value: "0", icon: Eye, color: "text-emerald-400", bg: "bg-emerald-500/10" },
          { label: "Drafts", value: "0", icon: FileText, color: "text-amber-400", bg: "bg-amber-500/10" },
          { label: "Scheduled", value: "0", icon: Clock, color: "text-purple-400", bg: "bg-purple-500/10" },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions & Recent */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Posts</h2>
            <Link href="/admin/blogs" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              View all
            </Link>
          </div>
          <div className="text-center py-10 text-slate-500">
            No posts found. Start by creating one!
          </div>
        </div>

        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/blogs/create"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium">Write new post</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
