const eo = require('express');
router = eo.Router();
module.exports = router;

		mainController = require('./controllers/main.controller');

		eventsController = require('./controllers/events.controller');

	router.get('/', mainController.showHome);
	router.get('/events', eventsController.showEvent);
	router.get('/events/:D', eventsController.showSingle);