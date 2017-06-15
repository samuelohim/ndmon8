require('dotenv').config();
	const express = require('express'),
		bodyParser = require('body-parser'),

		el = require('express-ejs-layouts'),

		Book = require('./app/models/books');
		mo = require('mongoose'); mo.connect(process.env.dburl);
				eo = express();
				eo.use(el);
			//	eo.use(express.static(__dirname+'/views'));	// switch to Angular: (__dirname+'/public/client')
				eo.use(express.static(__dirname+'/public/client')); 	// switch to Express: eo.use(express.static(__dirname+'/views'))
				eo.set('view engine', 'ejs');
						
						port = process.env.PORT || 8500;

				router = require('./app/router.js');
							eo.use(bodyParser.urlencoded({ extended: true }));	// For testing: eo.use(bodyParser.json());
							eo.use(router);
							eo.listen(port, ()=>{
								console.log(`Listening on port: ${port}`);
							});