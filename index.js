/*
* Primary file for API
*
*/
// Dependencies

var http =require('http');
var url =require('url');

// This servers should respond to all request with a string
var server = http.createServer(function(req, res){

// Get URL and parse it
var parseUrl= url.parse(req.url,true);

//Get the Path
var path=parseUrl.pathname;
var trimmedPath= path.replace(/^\/+|\/+$/g, '');

//Get the query string as an object
var queryStringObject = parseUrl.query;

//Get http
var method = req.method.toLowerCase();



// send response
res.end('Hello World \n');

//Log the request
console.log("Request received on Path: "+ trimmedPath + "with method: "+ method+ "with these parameters",queryStringObject);



});

//start the server, and listen on port 300
server.listen(3000,function(){
  console.log("The server is listening on port 3000 now");
});
