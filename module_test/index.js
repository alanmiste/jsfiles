/* const helper = require("./helper") //this import the all the functions
console.log(helper.up(3)) */

const {up} = require("./helper") //destructating (importing spicefic function)
console.log(up(3))
const isprime = require("is-prime")
console.log(isprime(7))