Como se me dijo que el puesto a aspirar el era para Angular, NodeJS, MongoDB y Bases de dato relacionales
decid� realizar el proyecto con estos elementos.

(Todo corriendo por separado en un computador funciona)

El sistema esta realizado bajo una arquitectura por capas: donde la persistencia y muchas
potilicas de los datos est�n puestas, el servidor restful (en node) y a parte del aplicativo
web (en Angular Material) ideal para un servidor de archivos estaticos (que puede o no a�adirse
dentro del servidor node, pero por cuestiones de tiempo no se hizo).

Aunque cualquiera no administrador acceda al sistema el servidor estatico no es donde est�n las
acciones del sistema que contienen persistenc�a (lo que a�ade una barrera m�s de seguridad)

PostgresSQL: Es el gestor de base de datos utilizado.
Node: es el servidor API Restful con rutas establecidas para cada acci�n necesaria en el sistema.
schoolApp: Es la aplicaci�n web con angular CREDENCIALES DE ACCESO: usuario: root -- contrase�a: toor

METAS PERSONALES CON EL PROYECTO:
*Entrega de funcionalidades completas (puso ser mejor, pero me falt� tiempo por compromisos personales)
*Apariencia agradable lo m�s rapidamente posible
*Intuitividad y velocidad de la interfaz
*Accesibilidad
*Arquitectura del sistema escalable y robusta
*Estructura de peticiones robusta y uasndo CRUD (a pesar de no se parte del ejercicio)
*Seguridad (Falt� m�s)

NO SE ALCANZ�
*Aplicar los data-table con las estructuras de las entidades
*Encriptar con Vcript informaci�n de login
*Crear la tabla para el administrador (se crearon credenciales dentro del algoritmo del servidor)
*Union del dist folder de angular dentro de Node