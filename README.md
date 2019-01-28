# ReduxZero

Requerimentos: 
    - Redux 
        --> sudo npm i redux;

Dev dependencies:
    - Nodemon
    - Typescript

Para ejecutar:
    Ejemplo:

    $ node store.js
    $ node storeRedux.js
    $ node MainSinExport.js
    $ node MainConExport.js

Para compilar:
    tsc --watch //Compila Todos los archivos en la carpeta

#Store

Nuestra propia clase store con genericos de TypeScript que proporciona manejo automatico de un estado asi como un reducer por default, hay que mandar a llamar a getState() para obtener el estado.


#StoreRedux

Store con libreria de redux donde le proporcionamos un reducer y acciones y automaticamente devuelve un store para la manipulacion del estado tiene integrado un observable para la deteccion de cualquier cambio de estado.

#MainSinExport

Main para test de actions y reducers para modificar el estado sin store


#MainSinExport

Main para test de actions y reducers para modificar el estado sin store