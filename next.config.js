// next.config.js
module.exports = {
  images: {
    domains: ['maple-market-db.herokuapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/prices/items',
        destination: '/prices',
        permanent: true,
      },
      // {
      //   source:'/api/:slug',
      //   destination:'https://maple-market-db.herokuapp.com/:slug',
      //   permanent: true,
      // }
    ]
  },
};
