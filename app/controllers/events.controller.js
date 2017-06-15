// evoke schema from model:
const eM = require('../models/eventmodel');


// Make module available for external app
	module.exports = {
		showEvent: (req, res)=>{
			// Use mongo model to grab data from db
			// Use empty object {} matches all record
			eM.find({}, (err, shijian)=>{
				if(err){
					res.status(404);
					res.send('Event not found');
				}
				else
				res.render('pages/events', {shijian: shijian});
			});
			// res.render('pages/events', {shijian: shijian});

		},

		seedEvents: (req, res)=>{
			const shijian = [
								{Pay: 'Transaction', mid: '7812939', date: '12-May-08'},
								{Pay: 'Settlement', mid: '7812739', date: '12-Feb-12'},
								{Pay: 'Refund', mid: '7812879', date: '15-Jun-13'},
								{Pay: 'Query', mid: '7821879', date: '07-March-15'},
								{Pay: 'Reconciliation', mid: '759879', date: '21-Sep-15'},
								{Pay: 'Reconciliation', mid: '759879', date: '12-Jun-17'}
						    ];
		
			eM.remove({}, ()=>{
					for (ev of shijian){

						var newEvent = new eM(ev);

						newEvent.save();
					}
			});

			res.send('DB seeded');
		},

		showCreate: (req, res)=>{

			res.render('pages/create');
		},


		processCreate: (req, res)=>{


			// Create from model
			const sj = new eM({
				Pay: req.body.Pay,		// $Pay *must be same as name in Model* = $_POST['Pay'];
				mid: req.body.md
			//	mid: req.body.mid
			//	req.body is the same as POSTfromWebForm or $_POST['']
			});

			 sj.save((err)=>{
					if (err)
						throw err;
					res.redirect('/events');	// res.redirect(`/events/${sj.slug}`);
				});

		},



		showSingle: (req, res) =>{
			 // const sj = {Pay: 'traeensaction', mid: '7812939', slug: 'qwerere'};
			// const sj = new eM();
			eM.findOne({slug: req.params.slug}, (err, sj)=>{		// params.{from Router}
					if (err){								// change 3 parameters: router, event, this
						res.status(404);
						res.send('Event not found');
					}
					res.render('pages/single', {sj: sj});
				});
		},

		deleteEvent: (req, res) =>{
			
			eM.remove({slug: req.params.slug}, (err)=>{
				if (err){
					res.send('Delete Error');
				}
				res.redirect('/events');	/********* Must use '/' for redirect! This is a route not ejs!! ***/
			});
		},

		editEvent: (req, res) =>{

			eM.findOne({slug: req.params.slug}, (err, sj)=>{
				if (err)
					throw err;
				res.render('pages/editEvent-ejs', {sj:sj});		// render must not use '/'
			});
		},

		editCommit: (req, res) =>{
			eM.findOne({slug: req.params.slug}, (err)=>{

				if (err)
					throw err;
				eM.Pay = req.body.Pay;			// body = http body == webform
				eM.mid = req.body.mid;			// extract.from.webform
				eM.date = req.body.date;
				eM.save((err)=>{
					if (err)
						throw err;
					res.redirect('/events');	// redirect same as get, must use '/'
				});
			});
		}
	};