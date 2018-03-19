const withInferno = require('next-inferno')
const withAwesomeTypescript = require("next-awesome-typescript");

module.exports = (next) => withInferno(withAwesomeTypescript(next))