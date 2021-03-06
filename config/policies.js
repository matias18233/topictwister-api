/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'PartidaController': {
    'agregar': true,
    'editar': true,
    'obtener': true,
   },
   'UsuarioController': {
    'agregar': true,
    'obtenerListado': true,
    'login': true,
    'editar': true,
    'obtener': true,
   },

};
