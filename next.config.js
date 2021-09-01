// next.config.js
module.exports = {
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/prices/items',
        destination: '/prices',
        permanent: true,
      },
    ]
  },
};
