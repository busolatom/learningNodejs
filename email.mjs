import {program} from 'commander';
import { mailTransport } from './mailTransport.mjs';

program 
.option('-s, --subject')
.option('-t, --to')
.option('-m, --message');

program.parse();

const options = program.opts();
const args = program.args;
console.log(options);
console.log(args);
if (options.subject && options.to && options.message) {
    // send email
    mailTransport.sendMail({
        from: 'noreply@shopa.life',
        to: args[1],
        subject: args[0],
        text: args[2]
    })
    .then(console.log)
    .catch(console.log);
//     console.log ('Message sent');
} else if (options.subject && options.to) {
    console.log ('Please enter your message');
} else if (options.to && options.message) {
    console.log ('Enter your subject');
} else if (options.subject && options.message) {
    console.log ('Please enter your recipient');
} else {
    console.log ('Some details are missing');
}
