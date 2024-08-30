const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestId: String,
  productName: String,
  inputImageUrls: [String],
  outputImageUrls: [String],
  status: { type: String, default: 'processing' },
});

module.exports = mongoose.model('Request', requestSchema);
