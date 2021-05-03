/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // Vía POST
    async agregar(req, res) {
        if (!req.body.nombre) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo nombre', });
        }
        if (!req.body.contrasenia) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo contraseña', });
        }
        const usuarioTemp = await Usuario.findOne({
            nombre: req.body.nombre,
        });
        if (usuarioTemp) {
            return res.send({ estado: 'error', mensaje: 'Ya existe el nombre cargado', });
        }
        const usuario = await Usuario.create({
            nombre: req.body.nombre,
            password: req.body.contrasenia,
        }).fetch();
        return res.send({
            estado: 'success',
            mensaje: 'Agregado con éxito el registro',
            usuario: usuario,
        });
    },
    
    // Vía POST
    async editar(req, res) {

    },
    
    // Vía GET
    async borrar(req, res) {

    },
    
    // Vía POST
    async login(req, res) {

    },
    
    // Vía GET
    async obtener(req, res) {

    },
    
    // Vía GET
    async obtenerListado(req, res) {
        const usuariosTemp = await Usuario.find({});
        if (!usuariosTemp) {
            return res.send({ estado: 'error', mensaje: 'No se encontraron resultados' });
        }
        return res.send({
            estado: 'success',
            usuarios: usuariosTemp,
        });
    }
};