const express = require('express');
const bodyParser = require('body-parser');
const uploadRoutes = require('./routes/uploadRoutes');
const statusRoutes = require('./routes/statusRoutes');
const webhookRoutes = require('./routes/webhookRoutes');
require('./db/database');

const app = express();

app.use(bodyParser.json());

app.use('/upload', uploadRoutes);
app.use('/status', statusRoutes);
app.use('/webhook', webhookRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
