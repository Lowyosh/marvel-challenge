/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://gateway.marvel.com/v1/public/:path*",
      },
    ];
  },
};

export default nextConfig;
