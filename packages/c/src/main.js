const validator = require('validator');

const a = require('@madarche/a')

console.log('This is plugin c and something changed there too')

a.core()

console.log(validator.isEmail('foo@bar.com'))
