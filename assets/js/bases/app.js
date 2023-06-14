// const http = require('http');

// const host = 'localhost';
// const port = 3000;

// const requestListener = function (req, res) {
//    res.setHeader('Content-Type', 'application/json');
//    res.writeHead(200);
//    res.end(`{"message":"this is a json response"}`)
// }

// const server = http.createServer(requestListener);
// server.listen(port, host, _=>{
//     console.log(`server is running on http://${host}:${port}`);
// })

let a = 10,
    b = 'Hola ',
    c = 'Spider Man',
    d = 66,
    x = a + d;

const saludo = b + c;

console.log('%c Mis Variables','font-family:cursive; color:green;');
console.table({a,b,c,d,x})
console.log({a});
console.log({b});
console.log({c});
console.log({d});
console.log({x});
console.log(saludo);

c = 'Golang es uno de los mejores lenguajes';

var myName = "sandro";
