
const withFonts = require("next-fonts");
  const withImages = require('next-images')



module.exports = withFonts({
    ...withImages(),
    images: {
        disableStaticImages: true
      },
    webpack5: false,
}

);


