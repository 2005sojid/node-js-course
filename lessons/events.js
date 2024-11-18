const Emitter = require('events');
const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log('You sent the message: ' + data);
    console.log('Second argument: ' + second);
})

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 'msg');
}
else{
    emitter.emit('message', 'You did not specify the message')
}

// When to use?
/*
* http
* websockets
* long pulling
* clusters
*/

