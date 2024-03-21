const Libros = require('../models/librosModel');

const libroscontroller = {
    // obtener lista de todos los libros. get
    getAllLibros: async (req, res) => {
        try {
            const libros = await Libros.find()
            res.json(libros)
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    },

    // crear libros.  post

    createLibros: async (req, res) => {
        const librosData = req.body;
        try {
            const newLibros = new Libros(librosData);
            const savedLibros = await newLibros.save();
            res.status(201).json(savedLibros);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }

    },

    // consultar un libro por el # de referencia. get

    getLibrosByRef: async (req, res) => {
        const {NumRef} = req.params.name;
        try {
            const byname = await Libros.findOne({ name: NumRef });
            res.json(byname);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    // actualizar el nombre del libro. patch

    updateLibros: async (req, res) => {
        try {
            const {name} = req.params;

            const updateLibros = await Libros.findOneAndUpdate({nombre}, {$set:{name:'sad'}})
            
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },

    // borrar un libro por su nombre. delete

    deleteLibros: async (req, res) => {
        try {
            const {nombre} = req.params;
            const deleteLibros = await Libros.findOneAndDelete({name:nombre});
            res.json(deleteLibros);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}

module.exports = libroscontroller;