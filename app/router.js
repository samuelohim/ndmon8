const eo = require('express');
router = eo.Router();
module.exports = router;

		mainController = require('./controllers/main.controller');

		eventsController = require('./controllers/events.controller');
		booksController = require('./controllers/books.Controller');
		merchantsControllers = require('./controllers/merchants.Controller');
		 

	router.get('/', mainController.showHome);
	router.get('/events', eventsController.showEvent);
	router.get('/events/seed', eventsController.seedEvents);
	router.get('/books/seedbooks', booksController.seedBooks);
	router.get('/events/create', eventsController.showCreate);
	router.post('/events/create', eventsController.processCreate);

	router.get('/events/:slug', eventsController.showSingle);

	router.get('/events/:slug/delete', eventsController.deleteEvent);
	router.get('/events/:slug/edit', eventsController.editEvent);
	router.post('/events/:slug', eventsController.editCommit);
	router.get('/library/books', booksController.showBooks);
	router.get('/library/book/:id', booksController.showSingleBook);

	
	router.get('/merchants/new', merchantsControllers.xinjianShanghu); //  deleteMerchant
	router.get('/merchants/', merchantsControllers.listMerchants); // seedMerchants
	router.get('/merchants/seed', merchantsControllers.seedMerchants); //
	router.get('/merchants/ls', merchantsControllers.ls); // merchantDetails
	router.get('/merchants/:slug', merchantsControllers.merchantDetails); //  deleteMerchant
	router.get('/merchants/:slug/delete', merchantsControllers.deleteMerchant); //  deleteMerchant
	router.get('/merchants/loe', merchantsControllers.loe); //  deleteMerchant
	router.post('/merchants/create', merchantsControllers.create); //  deleteMerchant