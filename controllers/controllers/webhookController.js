const Request = require('../models/Request');

const handleWebhook = async (req, res) => {
  const { requestId, outputImageUrls } = req.body;

  await Request.updateOne(
    { requestId },
    { status: 'completed', outputImageUrls }
  );

  res.sendStatus(200);
};

module.exports = { handleWebhook };
