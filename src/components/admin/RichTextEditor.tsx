"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { 
  Bold, Italic, List, ListOrdered, Quote, 
  Heading1, Heading2, Code, Image as ImageIcon, Link as LinkIcon 
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-800 bg-slate-900/50 rounded-t-xl">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("bold") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("italic") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Italic className="w-4 h-4" />
      </button>
      
      <div className="w-px h-6 bg-slate-800 mx-2" />
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("heading", { level: 1 }) ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Heading1 className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("heading", { level: 2 }) ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Heading2 className="w-4 h-4" />
      </button>
      
      <div className="w-px h-6 bg-slate-800 mx-2" />

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("bulletList") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <List className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("orderedList") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("blockquote") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Quote className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("codeBlock") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <Code className="w-4 h-4" />
      </button>

      <div className="w-px h-6 bg-slate-800 mx-2" />

      <button
        onClick={setLink}
        className={`p-2 rounded hover:bg-slate-800 transition-colors ${editor.isActive("link") ? "text-blue-400 bg-slate-800" : "text-slate-400"}`}
      >
        <LinkIcon className="w-4 h-4" />
      </button>
      <button
        onClick={addImage}
        className="p-2 rounded hover:bg-slate-800 transition-colors text-slate-400"
      >
        <ImageIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto my-4',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-400 hover:text-blue-300 underline',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-slate max-w-none focus:outline-none min-h-[400px] p-6',
      },
    },
  });

  return (
    <div className="border border-slate-800 rounded-xl bg-slate-950/50 overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
