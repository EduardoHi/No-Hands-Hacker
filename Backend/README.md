API HACK MTY


Servicios:

***Ejecutar código y recibir resultado de consola***

Método GET:

/api/v1/executeCode?foldername=XXXXX&scriptCount=#



***Crear nuevo folder para usuario***

Método POST:

/api/v1/createFolder?foldername=XXXXX



***Recibir script para guardarlo en carpeta del usuario***

Método POST:

/api/v1/receiveScript?foldername=XXXXX&scriptCount=#



***Acabar sesión de usuario para eliminar archivos***

Método POST:

/api/v1/endSession?foldername=XXXXX&scriptCount=#


Descripción de parámetros:

foldername: Sesión del usuario
scriptCount: Número del script abierto (pestaña de script)