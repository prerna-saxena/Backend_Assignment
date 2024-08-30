const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const processImage = async (url, outputFileName) => {
  const inputPath = path.resolve(`./public/input_images/${path.basename(url)}`);
  const outputPath = path.resolve(`./public/output_images/${outputFileName}`);

  await sharp(inputPath)
    .resize({ width: 1000 })
    .jpeg({ quality: 50 })
    .toFile(outputPath);

  return outputPath;
};

module.exports = { processImage };
