// title:uptime Monitoring application
// Author:tushar chandra mohanto
const http = require('http');
const url =require ("url");
const {StringDecoder} =require("string-decoder")
// app object Module scaf folding
const app={};

// consfigaration
app.config={
    port:3000,
};

// create a servrer
app.createServer =()=>{
    const server =http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`The port is Running in ${app.config.port}`)
    })
}
// handle request response
app.handleReqRes =(req,res) => {

    // reqest hanfdeling 

    const parsedUrl =url.parse(req.url,true);
    const path =parseUrl.pathname;
    const trimmedPath=path.replace();
    const method=method.toLowerCase();

    const queryStringObject= parseUrl.query;

    const headerObject=req.headers;


const decoder = new StringDecoder('utf-8');
let realData=" ";

req.on('data',(buffer) =>{
    realdata +=decoder.write(buffer);

})
req.on("end",()=>{
      realData +=decoder.end();
})

    console.log(headerobject);

    // response Handelling
    res.end("Hello Programmers")
};
// server start in below
app.createServer();