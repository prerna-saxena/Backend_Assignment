const queue = require('bull');
const { processImage } = require('../services/imageProcessingService');
const Request = require('../models/Request');

const imageQueue = new queue('image-queue', 'redis://127.0.0.1:6379');

imageQueue.process(async (job, done) => {
  const { requestId, url } = job.data;
  const outputFileName = `output-${Date.now()}.jpg`;
  const outputPath = await processImage(url, outputFileName);

  await Request.updateOne(
    { requestId },
    { $push: { outputImageUrls: outputPath } }
  );

  done();
});
