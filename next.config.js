// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'portfolio' : '',
  // other configurations if you have any
};

module.exports = nextConfig;
