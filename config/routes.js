/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  '/': { view: 'pages/homepage' },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.

  //***********************************
  //********       GET        *********
  //***********************************

  'GET /api/usuarios/obtener/:id' : 'UsuarioController.obtener', // INPUTS ->  [ id* ] | OUTPUTS -> [ estado, usuario ]
  'GET /api/usuarios/obtenerListado' : 'UsuarioController.obtenerListado', // INPUTS ->  [ ] | OUTPUTS -> [ estado, usuarios ]
  'GET /api/usuarios/borrar/:id' : 'UsuarioController.borrar',

  'GET /api/partidas/obtener/:id' : 'PartidaController.obtener', // INPUTS ->  [ id* ] | OUTPUTS -> [ estado, partida ]
  'GET /api/partidas/borrar/:id' : 'PartidaController.borrar',

  //***********************************
  //********       POST       *********
  //***********************************

  'POST /api/usuarios/agregar' : 'UsuarioController.agregar', // INPUTS ->  [ nombre*, contrasenia* ] | OUTPUTS -> [ estado, mensaje, usuario ]
  'POST /api/usuarios/editar' : 'UsuarioController.editar', // INPUTS ->  [ id*, nombre*, contrasenia* ] | OUTPUTS -> [ estado, mensaje, usuario ]
  'POST /api/usuarios/login' : 'UsuarioController.login', // INPUTS ->  [ nombre*, contrasenia* ] | OUTPUTS -> [ estado, usuarios ]

  'POST /api/partidas/agregar' : 'PartidaController.agregar', // INPUTS ->  [cadena* ] | OUTPUTS -> [ estado, mensaje, partida ]
  'POST /api/partidas/editar' : 'PartidaController.editar', // INPUTS ->  [ id*, cadena* ] | OUTPUTS -> [ estado, mensaje, partida ]

};