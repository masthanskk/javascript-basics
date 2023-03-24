 // HTTP Server Module
 // NodeJS InBuild Module (http)


 const http = require("http");

 // const server = http.createServer(function (request, response) {
  //      response.writeHead(200);
    //    response.end("Data Serve from node server ")
//       });

const requestListener = function(request,response){
        response.writeHead(200);
            response.end("Data Serve from node server ")       
}

const server = http.createServer(requestListener);

server.listen(80, 'Localhost', () => {
        console.log('Server is runing...')
})


// Browser   ->  localhost
// Terminal  ->  curl local host
