const Facade = require('../../lib/facade');
const artigo = require('./schema');

class Artigo extends Facade {}

module.exports = new Artigo(artigo);
