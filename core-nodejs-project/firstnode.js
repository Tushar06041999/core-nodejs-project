// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);




// const path =require("path");
// const pathName="C:/web <devlopment /nodejs folder/first node js/firstnode.js" ;


// const os=require("os");
// console.log(os.platform());
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.homedir());
// console.log(os.release());
// console.log(os.freemem());
// console.log(os.cpus());




// const fs=require("fs");
// fs.writeFileSync("firstfs.txt","Hello programmers ");
// fs.appendFileSync("firstfs.txt","How are you guys");
// const data=fs.readFileSync("firstfs.txt");
// console.log(data.toString());

// fs.readFile("firstfs.txt",(error,data)=>{
//     console.log(data.toString());
// })



//Http create and server model
// const http =require("http");

// const server=http.createServer((req,res) =>{

//   if(req.url === "/"){
//     res.write("Hello Progrmmers.....");
//     res.end();

//   }else if(req.url==="/https://www.facebook.com/profile.php?id=100074098277923"){
//     res.write("Aboti Howleder fathers Name Dilip kumer Howlader Mothers Name Banarjee");
//     res.end();
//   }else{
//     res.write("Page Not Found");
//     res.end();
//   }
 
// });

// server.listen(3000);

// console.log("We create this server that's open in port 3000");

//chunk stream buffer method

const fs =require("fs");
const ourReadStream=fs.createReadStream(`${__dirname}/firstfs.txt`);

ourReadStream.on("data",(chunk)=>{
  console.log(chunk);
});