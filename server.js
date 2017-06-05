const eo = require('express');
app = eo();
const el = require('express-ejs-layouts');

app.use(el);

app.use(eo.static(__dirname+'/public/css'));
app.set('view engine', 'ejs');

port = process.env.PORT || 9000;

router = require('./app/router.js');

app.use(router);

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});
