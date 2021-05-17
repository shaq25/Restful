/*
* Primary file for API
*
*/
// Dependencies

var http =require('http');

// This servers should respond to all request with a string
var server = http.createServer(function(req, res){

  res.end('Hello World \n');


});

//start the server, and listen on port 300
server.listen(3000,function(){
  console.log("The server is listening on port 3000 now");
});
