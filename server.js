const eo = require('express');
app = eo();
port = process.env.PORT || 9000;

router = require('./app/router.js');

app.use(router);

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
});
