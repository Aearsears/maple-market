// next.config.js
module.exports = {
  images: {
    domains: ['https://maplemarket.herokuapp.com'],
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
