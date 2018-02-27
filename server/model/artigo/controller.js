const Controller = require('../../lib/controller');
const artigo = require('./facade');

class Artigo extends Controller {}

module.exports = new Artigo(artigo);
