"use client";

import { useState, useEffect, useRef } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { storage } from "@/lib/firebase/client";
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL, 
  listAll, 
  deleteObject,
  StorageReference
} from "firebase/storage";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UploadCloud, 
  Image as ImageIcon, 
  Trash2, 
  Copy, 
  CheckCircle2, 
  Loader2,
  XCircle
} from "lucide-react";

interface MediaItem {
  name: string;
  url: string;
  ref: StorageReference;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function MediaLibrary() {
  const { user } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [toast, setToast] = useState<ToastState>({ show: false, message: "", type: "success" });

  useEffect(() => {
    if (user) {
      fetchMedia();
    }
  }, [user]);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const listRef = ref(storage, "media");
      const res = await listAll(listRef);
      
      const items = await Promise.all(
        res.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url,
            ref: itemRef
          };
        })
      );
      
      // Sort newest first by name if using Date.now() prefix
      items.sort((a, b) => b.name.localeCompare(a.name));
      
      setMediaList(items);
    } catch (error) {
      console.error("Error fetching media", error);
      showToast("Failed to load media files", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      showToast("Please select an image file", "error");
      return;
    }

    // Limit size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      showToast("File must be less than 5MB", "error");
      return;
    }

    const fileRef = ref(storage, `media/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    setUploading(true);
    setProgress(0);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
        showToast("Upload failed", "error");
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setMediaList([{ name: fileRef.name, url: downloadURL, ref: fileRef }, ...mediaList]);
        setUploading(false);
        setProgress(0);
        showToast("Image uploaded successfully");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    );
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    
    try {
      await deleteObject(item.ref);
      setMediaList(mediaList.filter(m => m.name !== item.name));
      showToast("Image deleted");
    } catch (error) {
      console.error("Delete failed", error);
      showToast("Failed to delete image", "error");
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    showToast("URL copied to clipboard");
  };

  return (
    <div className="space-y-8 pb-12 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border ${
              toast.type === "success" 
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            {toast.type === "success" ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            <span className="font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Media <span className="gradient-text">Library</span></h1>
          <p className="text-slate-400 text-lg">Manage all your uploaded images and assets.</p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="glass-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group transition-all duration-300 hover:border-blue-500/30">
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
          id="media-upload"
        />
        
        {!uploading ? (
          <label 
            htmlFor="media-upload"
            className="flex flex-col items-center justify-center cursor-pointer py-12"
          >
            <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
              <UploadCloud className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Click or drag to upload</h3>
            <p className="text-slate-400">SVG, PNG, JPG or GIF (max. 5MB)</p>
          </label>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Uploading...</h3>
            <div className="w-full max-w-md bg-slate-800 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-slate-400 mt-3">{Math.round(progress)}% complete</p>
          </div>
        )}
      </div>

      {/* Media Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <ImageIcon className="w-6 h-6 text-cyan-400" />
          Your Images
          {!loading && <span className="bg-white/10 text-sm py-1 px-3 rounded-full font-medium ml-2">{mediaList.length}</span>}
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : mediaList.length === 0 ? (
          <div className="text-center py-20 glass-card rounded-3xl border border-white/5">
            <ImageIcon className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-300">No media found</h3>
            <p className="text-slate-500 mt-2">Upload your first image above to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <AnimatePresence>
              {mediaList.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <img 
                    src={item.url} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4">
                    <button 
                      onClick={() => copyToClipboard(item.url)}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      Copy URL
                    </button>
                    <button 
                      onClick={() => handleDelete(item)}
                      className="w-full bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors border border-red-500/30 hover:border-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
