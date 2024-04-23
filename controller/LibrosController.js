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

    // consultar un libro por el # de descripcion. get

    getLibrosByRef: async (req, res) => {
        const { description } = req.params;
        try {
            const byname = await Libros.findOne({ description: description });
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

            const updateLibros = await Libros.findOneAndUpdate({name}, {$set:{name:'sad'}})
            res.json(updateLibros);
            
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
        
    },

    // borrar un libro por su nombre. delete

    deleteLibros: async (req, res) => {
        try {
            const {name} = req.params;
            const deleteLibros = await Libros.findOneAndDelete({name: name});
            res.json(deleteLibros);
        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // buscar por id.

    getLibros: async (req, res) => {
       
        try {
            const { id } = req.params;
            const librosId = await Libros.findOne({_id: id});
            res.json(librosId);

        } catch (error) {
            console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }

    },

    // buscar por author.
    getLibrosAuthor: async (req, res) => {
        try {
            const { author } = request.params;
            const libroAuthor = await Libros.findOne({ author: author})
            res.json(libroAuthor);

        } catch (error) {
             console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    // buscar por nombre.

    getlibroNombre: async (req, res) => {
        try {
            const { name } = req.params;
            const libronombre = await Libros.find({name: name})
            res.json(libronombre);

        } catch (error) {

             console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
            
        }
    },

    // buscar porn cantidad de paginas.

    getLibrosCantidad: async (req, res) => {
        try {
            const { pages } = req.params;
            const librosCantidad = await Libros.find({pages: pages});
            res.json(librosCantidad);

        } catch (error) {
              console.error('Error al crear los usuarios', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

}

module.exports = libroscontroller;