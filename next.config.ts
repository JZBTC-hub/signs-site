/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Don’t fail the Vercel build on lint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
