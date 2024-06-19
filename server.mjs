// import create server from node http module
import {createServer} from 'node:http'; 

// Create http server with anonymous function- anonymous functions are without names and put exactly 
// where they are needed, no need of name for referencing them
const server = createServer((req, res) => {
    // console.log(req.headers);- used to exchange secure information
    // console.log(req.body);- takes information
    // console.log(req.url);- it returns what someone is trying to do on the website, it helps with decision making- if else for backend
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>We have an HTTP Server guys!</h1>');
}); 

// Listen for incoming request, 3000-first numner is called a port, second is the host/ host-name,
//  port 80 for http, port 443 for https and they can hide- 
// you need not type them explictly with a colon to visit the address
// don't use port 80 and 443 to run your own server cos its reserved and used specially by hosting provider
server.listen(3000, '127.0.0.1', () => {
    console.log('Live Server is running');
}); 

// Normal function syntax:
// function handleRequest() {}
// Vs Arrow function syntax, arrow functions saves us from the this keyword issue:
const handleRequest = () => {}
// Anonymous arrow function syntax:
// () => {}
// you dont call anonymous function directly on your own, you give it to another function to call/ invoke it
// CMS- content management system can be used in the backend instead of updating html file directly often
