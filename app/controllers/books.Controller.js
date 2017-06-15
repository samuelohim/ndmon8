const sH = require('../models/books');
	module.exports = {
		seedBooks: (req, res)=>{
			const shu = [
								{title: 'BiteCoin Basics', genre: 'Fintech', description: 'Blockchain application', author: 'Satoshi', publisher: 'X press', pages: '305', image_url: 'https://www.google.com.hk/imgres?imgurl=http%3A%2F%2F198.74.50.173%2Fwp-content%2Fuploads%2F2016%2F12%2FTwo-Bitcoins-1.png&imgrefurl=https%3A%2F%2Fwww.nextbigfuture.com%2F2016%2F12%2Fchina-yuan-depreciation-and-india.html&docid=gYyaqzA33Zb3hM&tbnid=OahKBWSujnmYeM%3A&vet=10ahUKEwj2j__Pkr3UAhVBN5QKHXxGBJ8QMwibASgbMBs..i&w=920&h=526&bih=1031&biw=2144&q=bitcoin&ved=0ahUKEwj2j__Pkr3UAhVBN5QKHXxGBJ8QMwibASgbMBs&iact=mrc&uact=8', buy_url: '/buy/bitecoin', create_date: '12-Oct-1978'},
								{title: 'Shape power', genre: 'postModern tech', description: 'Bettles levitation', author: 'GV', publisher: 'X press', pages: '205', image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqNvHa3xIrQIWHFMGA1vrHjh4UKXkTWFUDW9HtIlG8Yfc1PYV', buy_url: '/buy/bitecoin', create_date: '12-Oct-1978'},
								{title: 'BiteCoin Basics', genre: 'Fintech', description: 'Blockchain application', author: 'Satoshi', publisher: 'X press', pages: '305', image_url: 'https://www.google.com.hk/imgres?imgurl=http%3A%2F%2F198.74.50.173%2Fwp-content%2Fuploads%2F2016%2F12%2FTwo-Bitcoins-1.png&imgrefurl=https%3A%2F%2Fwww.nextbigfuture.com%2F2016%2F12%2Fchina-yuan-depreciation-and-india.html&docid=gYyaqzA33Zb3hM&tbnid=OahKBWSujnmYeM%3A&vet=10ahUKEwj2j__Pkr3UAhVBN5QKHXxGBJ8QMwibASgbMBs..i&w=920&h=526&bih=1031&biw=2144&q=bitcoin&ved=0ahUKEwj2j__Pkr3UAhVBN5QKHXxGBJ8QMwibASgbMBs&iact=mrc&uact=8', buy_url: '/buy/bitecoin', create_date: '12-Oct-1978'}
						 ];
		
			sH.remove({}, ()=>{
					for (sh of shu){

						var newLibrary = new sH(sh);

						newLibrary.save();
					}
			});

			res.send('Library seeded');
		},

		showBooks: (req, res)=>{
			// Use mongo model to grab data from db
			// Use empty object {} matches all record
			sH.find({}, (err, sh)=>{
				if(err){
					res.status(404);
					res.send('Event not found');
				}
				else
					res.json(sh);		//	res.render('pages/booklisting', {sh: sh});
			});
			// res.render('pages/events', {shijian: shijian});

		},

		showSingleBook: (req, res)=>{
			sH.findOne({_id: req.params.id}, (err, sh)=>{	// { !! Pay attention to _ before id as default format in MongoDB}
				if (err){								// change 3 parameters: router, event, this
					res.status(404);
					res.send('Event not found');
				}
				res.json(sh);
			});
		}

	};

/* 	eo.get('/api/books', function(req, res){

					Book.getBooks(function(err, books){
						if (err)
							throw err;
						res.json(books);
					});
				}); 												*/