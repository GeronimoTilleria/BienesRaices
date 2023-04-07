const PropiedadesControllers = require('../controllers/propiedad.controller');
const { upload } = require("../config/multer.config");
const { admin } = require('../config/jwt.config');

module.exports = function (app) {

    app.get('/api/propiedades_p', PropiedadesControllers.mostrarPropiedades);

    app.get('/api/propiedades', admin, PropiedadesControllers.mostrarPropiedades);

    app.post('/api/propiedades', admin, upload.single('file'), PropiedadesControllers.agregarPropiedad);

    app.put('/api/propiedades/:id', admin, upload.single('file'), PropiedadesControllers.editarPropiedad);

    app.delete('/api/propiedades/:id', admin, PropiedadesControllers.eliminarPropiedad);

    app.get('/api/propiedades_p/:id', PropiedadesControllers.buscarPropiedad);

    app.get('/api/propiedades/:id', admin, PropiedadesControllers.buscarPropiedad);

    app.get("/files/:filename", PropiedadesControllers.getFile);
}

