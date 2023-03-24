const http = require("http");
const server = http.createServer( (request,response) => {
       

        const names =[
                "Shami",
                "Requesting",
                "A Server"]
        const ConvertingNamesintoString = JSON.stringify(names);

        response.writeHead(300);        
        response.end(ConvertingNamesintoString);
})

        // JSON.parse     => It convert your 'string' type array/object into orginal obect/array.
        // JSON.stringify => It convert your array/object instance into plain string.

        server.listen(90,'localhost',() => {
                console.log('Server is running on http://localhost:90')
        })
