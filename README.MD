A basic implementation of the described system using Node.js. I'll break it down into parts:

 1.  Project Structure:---

.
├── controllers
│   ├── uploadController.js
│   ├── statusController.js
│   └── webhookController.js
├── services
│   ├── imageProcessingService.js
│   └── csvValidationService.js
├── workers
│   └── imageWorker.js
├── models
│   └── Request.js
├── routes
│   ├── uploadRoutes.js
│   ├── statusRoutes.js
│   └── webhookRoutes.js
├── db
│   └── database.js
├── public
│   └── output_images
├── app.js
├── package.json
└── README.md
