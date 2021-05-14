# Usuarios

### Login

**Descripción:**
Permite el inicio de sesión, validando los datos de ‘usuario’ y ‘contraseña’ recibidos. Como resultado (si se valida correctamente) devuelve los datos del usuario identificado, junto a un listado con todos los usuarios almacenados en la tabla.

**URL:**
http://(host):(port)/api/usuarios/login

**Uso:**
Mediante POST, enviar dos variables llamadas ‘nombre’ y ‘contrasenia’; ambas variables son obligatorias para realizar la solicitud.

Como resultado se obtiene un JSON con los campos ‘estado’, ‘actual’ y ‘users’. El campo ‘actual’ devuelve la información del usuario que ha iniciado sesión, mientras que el campo ‘users’ entrega un listado con toda la información relacionada a todos los usuarios registrados.

INPUTS ->  [ nombre*, contrasenia* ]
OUTPUTS -> [ estado, actual, users ]
 
### Obtener (individual)
 
**Descripción:**
Retorna la información almacenada de un usuario en particular.
 
**URL:**
http://(host):(port)/api/usuarios/obtener/(número)
 
**Uso:**
Mediante GET, enviar una variable llamada ‘id’; esta variable es obligatoria para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’ y ‘usuario’. Este último campo contiene toda la información relacionada al usuario solicitado.
 
INPUTS ->  [ id* ]
OUTPUTS -> [ estado, usuario ]
 
### Obtener listado
 
**Descripción:**
Retorna un listado con todos los usuarios almacenados en la tabla.
 
**URL:**
http://(host):(port)/api/usuarios/obtenerListado
 
**Uso:**
Mediante GET, hacer la solicitud a la URL para obtener los resultados. No hace falta enviar ningún valor de parámetro.
 
Como resultado se obtiene un JSON con los campos ‘estado’ y ‘users’. Este último campo contiene un listado con toda la información relacionada a todos los usuarios registrados.
 
INPUTS ->  [ ]
OUTPUTS -> [ estado, users ]
 
### Agregar
 
**Descripción:**
Permite agregar un nuevo registro de usuario a la tabla.
 
**URL:**
http://(host):(port)/api/usuarios/agregar
 
**Uso:**
Mediante POST, enviar dos variables llamadas ‘nombre’ y ‘contrasenia’; ambas variables son obligatorios para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’, ‘mensaje’ y ‘usuario’. Este último campo contiene toda la información del usuario que se acaba de agregar.
 
INPUTS ->  [ nombre*, contrasenia* ]
OUTPUTS -> [ estado, mensaje, usuario ]
 
### Editar
 
**Descripción:**
Permite modificar la información de un registro de usuario en particular.
 
**URL:**
http://(host):(port)/api/usuarios/editar
 
**Uso:**
Mediante POST, enviar tres variables llamadas ‘id’, ‘nombre’ y ‘contrasenia’; todas las variables son obligatorios para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’, ‘mensaje’ y ‘usuario’. Este último campo contiene toda la información del usuario que se acaba de modificar.
 
INPUTS ->  [ id*, nombre*, contrasenia* ]
OUTPUTS -> [ estado, mensaje, usuario ]
 
# Partidas
 
### Obtener (individual)
 
**Descripción:**
Recibe un valor de ID como parámetro y recupera el registro que hace referencia dicho valor.
 
**Uso:**
http://(host):(port)/api/partidas/obtener/(número)
 
**Uso:**
Mediante GET, enviar una variable llamada ‘id’; esta variable es obligatoria para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’ y ‘partida’. Este último campo contiene toda la información relacionada al registro de partida. Se deberá parsear el campo ‘cadena’ para poder utilizarlo en Unity.
 
INPUTS ->  [ id* ]
OUTPUTS -> [ estado, partida ]
 
### Agregar
 
**Descripción:**
Permite agregar un nuevo registro de partida a la tabla.
 
**URL:**
http://(host):(port)/api/partidas/agregar
 
**Uso:**
Mediante POST, enviar una variable llamada ‘cadena’; esta variable es obligatoria para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’, ‘mensaje’ y ‘partida’. Este último campo contiene toda la información relacionada al registro de partida. Se deberá parsear el campo ‘cadena’ para poder utilizarlo en Unity.
 
INPUTS ->  [ cadena* ]
OUTPUTS -> [ estado, mensaje, partida ]
 
### Editar
 
**Descripción:**
Permite modificar la información de un registro de partida en particular.
 
**URL:**
http://(host):(port)/api/partidas/editar
 
**Uso:**
Mediante POST, enviar dos variables llamadas ‘id’ y ‘cadena’; ambas variables son obligatorias para realizar la solicitud.
 
Como resultado se obtiene un JSON con los campos ‘estado’, ‘mensaje’ y ‘partida’. Este último campo contiene toda la información relacionada al registro de partida. Se deberá parsear el campo ‘cadena’ para poder utilizarlo en Unity.
 
INPUTS ->  [ id*, cadena* ]
OUTPUTS -> [ estado, mensaje, partida ]
