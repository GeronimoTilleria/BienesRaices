const { authenticate } = require('../config/jwt.config');
const UsuarioController = require('../controllers/usuario.controller');
module.exports = function(app){
    app.post('/api/usuario', UsuarioController.createUsuario);
    app.get('/api/usuario/logout', UsuarioController.logout);
    app.post('/api/usuario/login', UsuarioController.logear);
    app.get('/api/usuarios', authenticate, UsuarioController.getAllUsuarios);
}
