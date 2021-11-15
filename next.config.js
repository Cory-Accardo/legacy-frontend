
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
  const withImages = require('next-images')


module.exports = {
    ...withImages(),
    future: {
       webpack5: true,
    },
 
 }

module.exports = withFonts(
  withOptimizedImages({
    images: {
        disableStaticImages: true
      }
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
    // images: {
    //   path: "/src/assets/image",
    // },
  })
);


