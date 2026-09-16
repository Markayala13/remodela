/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve modern, per-device sized formats (huge mobile payload reduction).
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
