const path = require("path");

console.log(path.join('first', 'second'))
console.log(path.join(__dirname))
console.log(path.join(__dirname, '..', '..'))
const fullpath = path.resolve(__dirname, 'first', 'second', 'third')
console.log('Absolute path: ', fullpath)
console.log('Parsing: ', path.parse(fullpath))



// -------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL)
console.log(url)