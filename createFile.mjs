// Creating file system
import {writeFile} from 'node:fs';

writeFile("./hello.html", "<h1>Learning node js</h1>", () => {
    console.log ("File upload successful");
});

console.log ("Learning");