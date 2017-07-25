const mgo = require('mongoose');
Schema = mgo.Schema;
const merchants_schema = new Schema({
 
	merchantName: String,
	accountBalance: Number,
	mid: String,
//	tfpcot: Number,
//	tfotcm: Number,
//	sfpcot: Number,
//	sfotcm: Number,
	tn: Number,
	createDate: Date,
	slug: {
		type: String,
		unique: true
	},
	balanceAfterSettlement: Number
});

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

 merchants_schema.pre('save', function(next){
 	this.slug = slugify(this.merchantName);
 	next();
 });

const merchantsModel = mgo.model('merchantsDBName', merchants_schema); // 
module.exports = merchantsModel;