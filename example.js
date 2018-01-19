const c = require('./index')

var title ='WARNING'

//straight up 
console.log(c.green('color me green'))

console.log(c.red(title))

//chaining
console.log (c.b('color me blue').m(' and I am Magenta').bm(' I am bright Magenta').end())

//background color
console.log(c.R().w(title).end())

console.log(c.R().w(title).by(' You are using and awesome library!').end())

