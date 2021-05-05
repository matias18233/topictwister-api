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
        if (!req.body.id) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo id', });
        }
        if (!req.body.nombre) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo nombre', });
        }
        if (!req.body.contrasenia) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo contraseña', });
        }
        const resultado = await Usuario.findOne({
            id: req.body.id,
        });
        if (!resultado) {
            return res.send({ estado: 'error', mensaje: 'No se encontraron resultados' });
        }
        const usuario = await Usuario.findOne({
            nombre: req.body.nombre,
        });
        if (usuario) {
            return res.send({ estado: 'error', mensaje: 'Ya existe el nombre cargado', });
        }
        const usuarioTemp = await Usuario.updateOne({
            id: req.body.id,
        })
        .set({
            nombre: req.body.nombre,
            password: req.body.contrasenia,
        }).catch(function (err) {
            return res.send({ estado: 'error', mensaje: 'Hubo un problema al modificar el usuario', });
        });

        return res.send({
            estado: 'success',
            mensaje: 'Modificado con éxito el registro',
            usuario: usuarioTemp,
        });
    },
    
    // Vía GET
    async borrar(req, res) {

    },
    
    // Vía POST
    async login(req, res) {
        if (!req.body.nombre) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo nombre', });
        }
        if (!req.body.contrasenia) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo contraseña', });
        }
        const usuarioTemp = await Usuario.findOne({
            nombre: req.body.nombre,
        });
        if (!usuarioTemp) {
            return res.send({ estado: 'error', mensaje: 'El usuario o contraseña no coincide (TEMP: no existe usuario)', });
        }
        if ((usuarioTemp.password === req.body.contrasenia) == false) {
            return res.send({ estado: 'error', mensaje: 'El usuario o contraseña no coincide (TEMP: pass no coincide)', });
        } else {
            const usuariosTemp = await Usuario.find({});
            if (!usuariosTemp) {
                return res.send({ estado: 'error', mensaje: 'No se encontraron resultados' });
            }
            return res.send({
                estado: 'success',
                usuarios: usuariosTemp,
            });
        }
    },
    
    // Vía GET
    async obtener(req, res) {
        if (!req.params.id) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo id', });
        }
        const usuarioTemp = await Usuario.findOne({
            id: req.params.id,
        });
        if (!usuarioTemp) {
            return res.send({ estado: 'error', mensaje: 'No se encontraron resultados' });
        }
        return res.send({
            estado: 'success',
            usuario: usuarioTemp,
        });
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