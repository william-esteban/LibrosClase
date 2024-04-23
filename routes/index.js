const { Router } = require('express')

const router = Router();
const librosController = require('../controller/LibrosController');

// crear libros.
router.post('/api/libros/crear', librosController.createLibros);
// obtener lista de todos los libros.
router.get('/api/libros', librosController.getAllLibros);
// consultar un libro por su # de referencia.
router.get('/api/libros/description/:description', librosController.getLibrosByRef);
// actualizar el nombre del libro.
router.patch('/api/libros/name/:name', librosController.updateLibros);
// borrar un libro por su nombre.
router.delete('/api/libros/delete/:name', librosController.deleteLibros);
// buscar por id.
router.get('/api/libros/buscar/:id', librosController.getLibros)
// buscar por author.
router.get('/api/libros/author/:author', librosController.getLibrosAuthor);
// buscar por nombre.
router.get('/api/libros/BusNmane/:name', librosController.getlibroNombre)
// buscar porn cantidad de paginas.
router.get('/api/libros/cantidad/:pages', librosController.getLibrosCantidad)


module.exports = router;
