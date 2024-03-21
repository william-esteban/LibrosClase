const mongoose = require('mongoose');

const librosSchema = new mongoose.Schema({

    name: String,
    genero: String,
    NumRef: String,

})

const Libros = mongoose.model('Libros', librosSchema);

module.exports = Libros;