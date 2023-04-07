const { admin } = require('../config/jwt.config');
const VendedoresControllers = require('../controllers/vendedor.controller');

module.exports = function (app) {
    app.get('/api/vendedores', admin, VendedoresControllers.mostrarVendedores);

    app.get('/api/vendedores_p', VendedoresControllers.mostrarVendedores);

    app.post('/api/vendedores', admin, VendedoresControllers.agregarVendedor);

    app.put('/api/vendedores/:id', admin, VendedoresControllers.editarVendedor);

    app.delete('/api/vendedores/:id', admin, VendedoresControllers.eliminarVendedor);

    app.get('/api/vendedores/:id', admin, VendedoresControllers.buscarVendedor);
}

