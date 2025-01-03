/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  output: "export",
  basePath: "/Sign",
  assetPrefix: "/Sign",
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
};

export default nextConfig;
