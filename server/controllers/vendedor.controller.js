const { Vendedor } = require('../models/vendedor.model');

const mostrarVendedores = async (req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.json(vendedores);
    } catch (error) {
        res.json(error);
    }
}

const agregarVendedor = async (req, res) => {
    try {
        const vendedorCreado = await Vendedor.create(req.body);
        res.json(vendedorCreado);
    } catch (error) {
        console.log(error);
        res.status(400);
        res.json(error);
    }
}

const editarVendedor = async (req, res) => {
    try {
        const vendedorEditado = await Vendedor.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators: true });
        res.json(vendedorEditado);
    } catch (error) {
        res.status(400);
        res.json(error);
    }

}

const eliminarVendedor = async (req, res) => {
    try {
        const vendedorEliminado = await Vendedor.deleteOne({ _id: req.params.id });
        res.json(vendedorEliminado);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const buscarVendedor = async (req, res) => {
    try {
        const vendedorBuscado = await Vendedor.findOne({ _id: req.params.id });
        res.json(vendedorBuscado);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
}

module.exports = {
    mostrarVendedores,
    agregarVendedor,
    editarVendedor,
    eliminarVendedor,
    buscarVendedor
}