const fs = require('fs');
const path = require('path');
//
// const stream = fs.createReadStream(path.resolve(__dirname,'test.txt'));
//
// // Один чанк по дефолту 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk);
// })
//
// stream.on('end', () => console.log('Done'));
// stream.on('open', () => console.log('Started'));
// stream.on('close', () => console.log('Closed'));
// stream.on('error', (err) => console.log(err));

const writableStream = fs.createWriteStream(path.join(__dirname, 'test2.txt'));
for(let i = 0; i < 20; i++){
    writableStream.write(i + '\n');
}
writableStream.end()