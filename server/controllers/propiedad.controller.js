const Propiedad = require('../models/propiedad.model');

const path = require("path")

const mostrarPropiedades = async (req, res) => {
    try {
        const propiedades = await Propiedad.find().populate('vendedor', 'nombre apellido telefono');
        res.json(propiedades);
    } catch (error) {
        res.json(error);
    }
}

const agregarPropiedad = async (req, res) => {

    let data = JSON.parse(req.body.data);
    console.log(req.file.filename);
    console.log(data);
    data.imagen = req.file.filename;
    try {
        const propiedadCreada = await Propiedad.create(data);
        res.json(propiedadCreada);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const editarPropiedad = async (req, res) => {
    
    let data = JSON.parse(req.body.data);

    if(req.file) data.imagen = req.file.filename;
    

    try {
        const propiedadEditada = await Propiedad.findOneAndUpdate({ _id: req.params.id }, data, { new: true, runValidators: true });
        res.json(propiedadEditada);
    } catch (error) {
        res.status(400);
        res.json(error);
    }

}

const eliminarPropiedad = async (req, res) => {
    try {
        const propiedadEliminada = await Propiedad.deleteOne({ _id: req.params.id });
        res.json(propiedadEliminada);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const buscarPropiedad = async (req, res) => {
    try {
        const propiedadBuscada = await Propiedad.findOne({ _id: req.params.id });
        res.json(propiedadBuscada);
    } catch (error) {
        res.status(400);
        res.json(error);
    }

}

const buscarPropiedadDetallado = async (req, res) => {
    try {
        const propiedadBuscada = await Propiedad.findOne({ _id: req.params.id }).populate('vendedor', 'nombre apellido telefono');
        res.json(propiedadBuscada);
    } catch (error) {
        res.status(400);
        res.json(error);
    }

}

const getFile = (req, res) => {
    const filepath = "./uploads/" + req.params.filename;
    // console.log(filepath);
    let absolutePath = path.resolve(filepath);
    res.sendFile(absolutePath);
}

module.exports = {
    mostrarPropiedades,
    agregarPropiedad,
    editarPropiedad,
    eliminarPropiedad,
    buscarPropiedad,
    buscarPropiedadDetallado,
    getFile
}