/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  
    reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'tailwindui.com',
      },
      {
        hostname: 'yxcx.oss-cn-beijing.aliyuncs.com',
      },
    ],
  },
};

export default nextConfig;
