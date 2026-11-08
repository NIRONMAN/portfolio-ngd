/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/High-Blogs",
        destination: "/projects/high-blogs",
        permanent: true,
      },
      {
        source: "/InfectiGuard",
        destination: "/projects/infectiguard",
        permanent: true,
      },
      {
        source: "/Learnability2.0",
        destination: "/projects/learnability-ai",
        permanent: true,
      },
      {
        source: "/Niropay",
        destination: "/projects/niropay",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
