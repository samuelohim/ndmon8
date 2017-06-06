const eo = require('express');
app = eo();
const el = require('express-ejs-layouts');

app.use(el);

app.use(eo.static(__dirname+'/public/css'));
app.set('view engine', 'ejs');
		mo = require('mongoose');
port = process.env.PORT || 9000;
		mo.connect('mongodb://satlibwanzai:1237890@ds157631.mlab.com:57631/otg')
router = require('./app/router.js');

app.use(router);

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});