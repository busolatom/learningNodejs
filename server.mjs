// import create server from node http module
import {createServer} from 'node:http'; 
import {unlink, writeFile} from 'node:fs';

const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // create file 
        writeFile('./abc.html', '<h1>Learning node js</h1>', (err) => {
            console.log(err);
            // return response
            res.end('<h1>File created!</h1>');
        });
    } else {
        // delete file
        unlink("./index.html", () => {
            // return response
        // res.writeHead(200, {'Content-Type': 'text/html'});
         res.end('<h1>File deleted!</h1>');
        })
    }
}); 
server.listen(3000, '127.0.0.1', () => {
    console.log('Live Server is running');
}); 


