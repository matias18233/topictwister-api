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
            partida: partidaTemp,
        });
    },
    
    // Vía POST
    async editar(req, res) {

    },
    
    // Vía GET
    async borrar(req, res) {

    },
    
    // Vía GET
    async obtener(req, res) {

    },

};