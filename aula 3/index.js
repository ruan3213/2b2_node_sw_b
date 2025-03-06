const calculadora = require('./calculadora')
const minimist = require('minimist')
var argv = minimist(process.argv.slice(2))
console.log(argv= {nome:"ruan",idade:982})
const nome = argv["nome"]
const idade = argv["idade"]

console.log(`nome : ${nome} | idade: ${idade} ` )