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
  
  // 代理配置
  async rewrites() {
    return [
      // 当请求`/api/hello`时，代理到`http://example.com/api/hello`
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:3000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
