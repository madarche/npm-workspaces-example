const validator = require('validator');

const a = require('@madarche/a')

console.log('This is plugin c')

a.core()

console.log(validator.isEmail('foo@bar.com'))

