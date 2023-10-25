/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "finalspaceapi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "finalspaceapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
