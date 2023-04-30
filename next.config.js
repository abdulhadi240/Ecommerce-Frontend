/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds: true, //
  },
  images:{
    domains:["res.cloudinary.com"]
  }
  
}

module.exports = {
  compress: true,
}

module.exports = nextConfig
