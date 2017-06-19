const mgo = require('mongoose');
schema = mgo.Schema;
const settleP2O_schema = new Schema({

	Date: {type: Date, default: Date.now},

	BalanceBefore: String,
	Amount: String,
	Mid: String,
	Time: String
	Status: String,
	Slug: {
		type: String,
		unique: true
	},
	BalanceAfter: String
});

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

 settleP2O_schema.pre('save', function(next){
 	this.slug = slugify(this.Mid);
 });

const settlementModel = mgo.model('settlementdbName', settleP2O_schema); // 
module.exports = settlementModel;