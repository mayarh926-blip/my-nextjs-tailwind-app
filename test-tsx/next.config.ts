import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ⬅️ يجب أن يكون مطابقاً تماماً لاسم المستودع الجديد
  basePath: "/my-next.js-project", 
};

export default nextConfig;
