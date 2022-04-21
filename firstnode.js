// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);


// //path Declearation


// const path =require("path");
// const pathName="C:/web <devlopment /nodejs folder/first node js/firstnode.js" ;

// console.log(path.basename(pathName));  //path Base Name Declicartion
// console.log(path.dirname(pathName));   //Dire4ctory Name
// console.log(path.extname(pathName));   //Extension Name
// console.log(path.parse(pathName));    //It's show object
// console.log(path.delimiter);
// console.log(path.resolve(pathName));

// os method Explore

// const os=require("os");
// console.log(os.platform());
// console.log(os.version());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.homedir());
// console.log(os.release());
// console.log(os.freemem());
// console.log(os.cpus());


//fs File system Mangement Ecxplore

const fs=require("fs");
fs.writeFileSync("firstfs.txt","Hello programmers ");
fs.appendFileSync("firstfs.txt","How are you guys");
const data=fs.readFileSync("firstfs.txt");
console.log(data.toString());

fs.readFile("firstfs.txt",(error,data)=>{
    console.log(data.toString());
})