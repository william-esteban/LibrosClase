const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema({

    name: String,
    author: String,
    pages: Number,
    description: String,

})

const Libros = mongoose.model('Libros', librosSchema);

module.exports = Libros;