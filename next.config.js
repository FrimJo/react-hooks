const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  // target: 'serverless',
  // async rewrites() {
  //   return [
  //     // Do not rewrite API routes
  //     {
  //       source: '/api/:any*',
  //       destination: '/api/:any*',
  //     },
  //     // Rewrite everything else to use `pages/index`
  //     {
  //       source: '/:any*',
  //       destination: '/',
  //     },
  //   ]
  // },
})
