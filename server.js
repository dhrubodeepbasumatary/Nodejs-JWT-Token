const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user=require('./routes/user.route');
const PORT = 3000;

mongoose.connect('mongodb://localhost/jwtauth');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/checking',function(req,res){
	res.json({
		"fuck it":"dasd"
	});	
});

app.use('/user',user);
app.listen(PORT, function(){
   console.log('Server is running ',PORT);
});

