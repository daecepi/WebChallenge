Como se me dijo que el puesto a aspirar el era para Angular, NodeJS, MongoDB y Bases de dato relacionales
decidí realizar el proyecto con estos elementos.

El sistema esta realizado bajo una arquitectura por capas: donde la persistencia y muchas
potilicas de los datos están puestas, el servidor restful (en node) y a parte del aplicativo
web (en Angular Material) ideal para un servidor de archivos estaticos (que puede o no añadirse
dentro del servidor node, pero por cuestiones de tiempo no se hizo).

Aunque cualquiera no administrador acceda al sistema el servidor estatico no es donde están las
acciones del sistema que contienen persistencía (lo que añade una barrera más de seguridad)

PostgresSQL: 
Node: es el servidor Restful con rutas establecidas para cada acción necesaria en el sistema
	Y es la abstracción de seguridad de la logica
schoolApp: Es la aplicación web con angular CREDENCIALES DE ACCESO: usuario: root -- contraseña: toor

METAS PERSONALES CON EL PROYECTO:
*Entrega de funcionalidades completas (puso ser mejor, pero me faltó tiempo por compromisos personales)
*Apariencia agradable lo más rapidamente posible
*Intuitividad y velocidad de la interfaz
*Accesibilidad
*Arquitectura del sistema escalable y robusta
*Estructura de peticiones robusta y uasndo CRUD (a pesar de no se parte del ejercicio)
*Seguridad (Faltó más)

NO SE ALCANZÓ
*Aplicar los data-table con las estructuras de las entidades
*Encriptar con Vcript información de login
*Crear la tabla para el administrador (se crearon credenciales dentro del algoritmo del servidor)