const mgo = require('mongoose');
schema = mgo.Schema;


const eventSchema = new schema({

	Pay: String,
	slug: {
		type: String,
		unique: true
	},
	mid: String,
	date: {type: Date, default: Date.now}

});

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
eventSchema.pre('save', function(next){

	this.slug = slugify(this.Pay);
	next();
});

const eventModel = mgo.model('feventz', eventSchema);  // 1st argument creates a new db table with the same name in mongoDB
													  // One may rename db in Robomongo but must be reseeded after rename before use
module.exports = eventModel;