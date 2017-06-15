const mgo = require('mongoose');
bookSchema = mgo.Schema({
	title: {

		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	pages: {
		type: String
	},
	image_url: {
		type: String
	},
	buy_url: {
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mgo.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit){

	Book.find(callback).limit(limit);

}