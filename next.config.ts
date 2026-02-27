import path from 'path';
import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (cfg) => {
    if (cfg.resolve) {
      cfg.resolve.alias = {
        ...(cfg.resolve.alias || {}),
        '@': path.resolve(__dirname),
      };
    }
    return cfg;
  },
};

export default config;
