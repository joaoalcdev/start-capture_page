const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: ['www.erikagondim.com.br'],
    formats: ['image/avif', 'image/webp', 'image/svg'],
    loader: 'imgix',
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48],
    disableStaticImages: false,
  },
  esModule: true
})
