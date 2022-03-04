// module.exports = {
//   reactStrictMode: true,
// }

const withPWA = require("next-pwa");

module.exports = withPWA({
  basePath: '/next-app',
  pwa: {
    dest: "public",
    register: true,
    subdomainPrefix: '/next-app/',
    // scope: '/km',
    skipWaiting: true,
  },
});