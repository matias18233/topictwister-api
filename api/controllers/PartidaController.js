/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // Vía POST
    async agregar(req, res) {
        if (!req.body.cadena) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo cadena', });
        }
        const partidaTemp = await Partida.create({
            cadena: req.body.cadena,
        }).fetch();

        return res.send({
            estado: 'success',
            mensaje: 'Agregado con éxito el registro',
            partida: partidaTemp,
        });
    },
    
    // Vía POST
    async editar(req, res) {
        if (!req.body.id) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo id', });
        }
        if (!req.body.cadena) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo cadena', });
        }
        const partidaTemp = await Partida.updateOne({
            id: req.body.id,
        })
        .set({
            cadena: req.body.cadena,
        }).catch(function (err) {
            return res.send({ estado: 'error', mensaje: 'Hubo un problema al modificar la partida', });
        });

        return res.send({
            estado: 'success',
            mensaje: 'Agregado con éxito el registro',
            partida: partidaTemp,
        });
    },
    
    // Vía GET
    async borrar(req, res) {

    },
    
    // Vía GET
    async obtener(req, res) {
        if (!req.params.id) {
            return res.send({ estado: 'error', mensaje: 'Falta el campo id', });
        }
        const partidaTemp = await Partida.findOne({
            id: req.params.id,
        });
        if (!partidaTemp) {
            return res.send({ estado: 'error', mensaje: 'No se encontraron resultados' });
        }
        return res.send({
            estado: 'success',
            partida: partidaTemp,
        });
    },

};