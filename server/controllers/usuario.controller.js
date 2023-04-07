const { Usuario } = require("../models/usuario.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUsuario = async (request, response) => {
    try {
        const usuario = new Usuario(request.body);
        await usuario.save();
        response.json({ msg: 'Usuario Registrado', usuario });
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.logear = async (request, response) => {
    try {
        const { email, password } = request.body;
        const usuario = await Usuario.findOne({ email })
        if (usuario === null) {
            return response.status(403).json({ msg: "Correo no encontrado" });
        }
        const esValidaLaPass = await bcrypt.compare(password, usuario.password);

        if (esValidaLaPass) {
            const secret = process.env.SECRET_KEY;

            const newJWT = jwt.sign({
                _id: usuario._id,
                // nombre: `${usuario.firstName} ${usuario.lastName}`,
                email: usuario.email
            }, secret, { expiresIn: '1h' });

            response.cookie('usertoken', newJWT, {
                httpOnly: true
            });

            response.json({ msg: 'Logeado Correctamente' });
        }
        else {
            return response.status(403).json({ msg: "Tu clave no es la correcta." });
        }

    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.logout = async (request, response) => {
    try {
        response.clearCookie('usertoken'); // Elimina la cookie de sesión
        response.json({ msg: "Saliste correctamente" });
    } catch (error) {
        console.error(error); // Imprimir error en la consola
        response.status(500).json({ error: "Error al cerrar sesión" }); // Devolver un objeto JSON con una clave de "error"
    }
}

module.exports.getAllUsuarios = async (request, response) => {
    try {
        console.log(request.usuario);
        const usuarios = await Usuario.find({});
        response.json(usuarios);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

