/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home', // Replace this with your specific page path
        permanent: false,
      },
    ]
  },
}

export default nextConfig