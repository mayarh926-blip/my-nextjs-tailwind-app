import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. تحويل الموقع لملفات HTML ثابتة
  output: "export",

  // 2. تعطيل تحسين الصور (لأن GitHub Pages لا يدعم خادم الصور)
  images: {
    unoptimized: true,
  },

  // 3. ضبط المسار الأساسي (هام جداً!)
  // استبدل '/next-project' باسم مستودعك على GitHub بالضبط
  // إذا كان رابطك: github.com/username/my-site -> اكتب '/my-site'
  basePath: "/next-project", 
};

export default nextConfig;
