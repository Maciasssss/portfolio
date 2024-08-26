// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Ensure assetPrefix starts with a leading slash and only includes the repository name
  assetPrefix: isProd ? '/portfolio/' : '/',
  // Other configurations if you have any
};

module.exports = nextConfig;
