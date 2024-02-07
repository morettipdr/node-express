// modules
const names = require('./names.js')
const sayHi = require('./func.js')
const {items, singlePerson} = require('./alternative.js');
require('./func-export.js')
sayHi(names.john)
sayHi(names.peter)
