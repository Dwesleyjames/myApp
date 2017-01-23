var express = require('express')
var fs = require('fs')

var app = express()




//===============================================
app.set('view engine', 'jade');
//GET method for /test
app.get('/', function(req, res){
	res.sendFile('./views/home.html', {root: __dirname})
})
//===============================================



//POST method route
app.post('/', function(req,res){
	res.send('POST request to the homepage')
})

app.all('/secret', function(req,res,next){
	res.send('You found the secret section!')
	console.log('A user is acessing the secret section ...')
	next()
})


app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
})