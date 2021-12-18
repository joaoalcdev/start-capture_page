const withImages = require('next-images')

module.exports = withImages({
  images: {
    disableStaticImages: false,
  },
  esModule: true
})
