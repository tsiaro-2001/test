
 const fs = require('fs');
 const http = require('http');
 const url = require('url');
 const slugify = require('slugify');
// const res = fs.readFileSync("./text/tsiaro.txt", "utf-8");
// console.log(res);

//lire et ecrire dans un fichier
//Async, non-bocking, ts miandry res fa tonga de manao afa
// fs.readFile("./text/tsiaro.txt", 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log('affiche avant');
// console.log('apres');
// const hello = 'Salut';

const tempAcceuil = fs.readFileSync('./template/index.html');
const data = fs.readFileSync('./text/dataJson/dataJSON.json', 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(slugify('TSIARO', {lower : true}));
    console.log(req.url);
    console.log(url.parse(req.url, true));
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        const cardHtml = 
        res.end(tempAcceuil);
    }
    else if (pathName === '/product') {
        res.end('this is the product');
    }
    else if (pathName === '/api') {
       // res.end('fjgd');
        fs.readFile('./text/dataJson/dataJSON.json', 'utf-8', (err, data) => {
            const profil = JSON.parse(data);
            res.writeHead(200, {'context-type' : 'application/json'});
           // console.log(profil);
            res.end(data);
        });
    }
    else {
        res.writeHead(404);
        res.end('the url doesn\'t exist');
    }
    // res.end("hello my friends");
    // console.log(req.url);
});

server.listen(3000, '127.0.0.1',() => {
    console.log('ecoute sur le port 8000');
});