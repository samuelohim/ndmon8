// evoke schema from model:
//	const Event = require('../models/eventmodel');


// Make module available for external app
	module.exports = {
		showEvent: (req, res)=>{
			const shijian = [
								{Pay: 'transaction', mid: '7812939', slug: 'qwerere'},
								{Pay: 'transaction', mid: '7812939', slug: 'vbwqerq'},
								{Pay: 'transaction', mid: '7812939', slug: 'kjytrwefq'}
						    ];
			res.render('pages/events', {shijian: shijian});

		},

		showSingle: (req, res) =>{
			const sj = {Pay: 'transaction', mid: '7812939', slug: 'qwerere'};
			res.render('pages/single', {sj: sj});
		}

/*
		render(no slash pages/single)

		.Router() not .router()
		module.exports not model.exports
		
		seedEvents: (req, res)=>{

			const events = [
							{"Pay":"transaction", "mid": "7812939"},

							{"Pay":"transaction", "mid": "7812939"},

							{"Pay":"transaction", "mid": "7812939"}
							];

			for (event of events){

				var newEvent = new Event(event);

				newEvent.save();
			}
			res.send('DB seeded');
		}


	*/

	};