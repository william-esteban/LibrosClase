const { Router } = require('express')

const router = Router();
const librosController = require('../controller/LibrosController');

// crear libros.
router.post('/api/libros/crear', librosController.createLibros);
// obtener lista de todos los libros.
router.get('/api/libros', librosController.getAllLibros);
// consultar un libro por su # de referencia.
router.get('/api/libros/name/:NumRef', librosController.getLibrosByRef);
// actualizar el nombre del libro.
router.patch('/api/libros/name/:name', librosController.updateLibros);
// borrar un libro por su nombre.
router.delete('/api/libros/name/:name', librosController.deleteLibros);

module.exports = router;
