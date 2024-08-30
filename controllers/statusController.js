const Request = require('../models/Request');

const checkStatus = async (req, res) => {
  const { requestId } = req.params;
  const request = await Request.findOne({ requestId });

  if (!request) {
    return res.status(404).json({ message: 'Request not found' });
  }

  res.json({ status: request.status, outputImageUrls: request.outputImageUrls });
};

module.exports = { checkStatus };
