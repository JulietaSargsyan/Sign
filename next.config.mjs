/** @type {import('next').NextConfig} */
import path from 'path';

const repoName = 'Sign';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
};

export default nextConfig;