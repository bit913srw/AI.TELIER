import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['picsum.photos'],
  }
};

export default config;
