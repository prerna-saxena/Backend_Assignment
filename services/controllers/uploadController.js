const { v4: uuidv4 } = require('uuid');
const { validateCSV } = require('../services/csvValidationService');
const Request = require('../models/Request');
const queue = require('bull');

const imageQueue = new queue('image-queue', 'redis://127.0.0.1:6379');

const uploadCSV = async (req, res) => {
  const csvData = req.body.csvData;

  if (!validateCSV(csvData)) {
    return res.status(400).json({ message: 'Invalid CSV format' });
  }

  const requestId = uuidv4();
  const request = new Request({
    requestId,
    productName: csvData.productName,
    inputImageUrls: csvData.inputImageUrls,
  });

  await request.save();

  csvData.inputImageUrls.forEach((url) => {
    imageQueue.add({ requestId, url });
  });

  res.json({ requestId });
};

module.exports = { uploadCSV };
