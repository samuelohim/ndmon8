const mgo = require('mongoose');
schema = mgo.Schema;


const eventSchema = new schema({

	name: String,
	slug: {
		type: String,
		unique: true
	},
	description: String
});

eventSchema.pre('save', function(next){

	this.slug = slugify(this.name);
	next();
})

const eventModel = mgo.model('Event', eventSchema);
module.exports = eventModel;
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}