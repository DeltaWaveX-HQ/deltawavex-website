"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, User, Clock } from "lucide-react";

export default function AdminSettings() {
  const { user, role } = useAuthStore();

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: user?.email || "—",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: ShieldCheck,
      label: "Role",
      value: role || "—",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: User,
      label: "User ID",
      value: user?.uid || "—",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      icon: Clock,
      label: "Last Sign In",
      value: user?.metadata?.lastSignInTime
        ? new Date(user.metadata.lastSignInTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : "—",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          Account <span className="gradient-text">Settings</span>
        </h1>
        <p className="text-slate-400 text-lg">
          View your account information and preferences.
        </p>
      </div>

      {/* Account Info */}
      <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 space-y-1">
        <h2 className="text-xl font-bold text-white mb-6">Account Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5"
            >
              <div className={`p-3 rounded-xl ${item.bg} shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                <p className="text-white font-medium mt-0.5 truncate">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Firebase Project */}
      <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Firebase Project</h2>
        <p className="text-slate-400 text-sm">
          Project ID:{" "}
          <span className="text-slate-300 font-mono bg-slate-800 px-2 py-1 rounded-md">
            {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "—"}
          </span>
        </p>
      </div>
    </div>
  );
}
