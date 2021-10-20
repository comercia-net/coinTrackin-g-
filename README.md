# interview



**Clients**
    
    ```npm install```

    /* Variables de entorno */

    Crear 2 archivos .env

    .env -> Variables de entorno al pasar a producción "npm run build"

    --Variables--

        # CLIENT

        REACT_APP_API_URL_S3=https://r87in13vb3.execute-api.us-west-2.amazonaws.com/dev
        REACT_APP_API_URL= //Debe indicarse la url de la api
        REACT_APP_API_PORT= // Debe indicarse el puerto de la api => importante si se lo levanta en docker


    /* Funciones y componentes */

        --Home-- Inicio para usuarios no logueados
        --Ahuth-- Loguin/SingUp -- Autenticación / Crear cuenta de usuario
        --User Dashboard-- Ruta protegida - solo usuarios logueados
                        -- User Data- Datos de usuarios-ver, editar y darse de baja
                        -- Wallet- Billetera EHT-DAI - agregar y eliminar billeteras 

    /* Estilos y componentes */

        Basados en Material Ui. 
        Dos temas: claro/oscuro


**API**

    ```npm install```

    /* Variables de entorno */ => No requerido crearlo en api, es factible usarlo en raiz del proyecto, excepto por uso local

        Crear archivo .env
        
        API_PORT=4000
        DATABASE_ATLAS= --- base de datos externa como atlas ---
        URL=https://api.etherscan.io/api?module=account&action=balancemulti&apikey=869Z76H93375IKC5FXRE2NEEZZTIE3GQ6H
        DATABASE=mongodb -> mongodb si se usa docker || localhost para local
        MONGODB_DB=wallet || el nombre que corresponda
        SECRET=faysertoken
        PORT_CLIENTS=3000 || no requerido por el momento
        CLIENT_URL=*    || no requerido por el momento
        NODE_ENV=development
        DEPLOY=docker

        # STAGE

        NODE_ENV=development


    NOTA: Las variables de entorno se recogen en el archivo config.js

- Acceso a Documentación (Swagger): http://localhost:4000 (si es que no se modifican las variables de entorno)

- Nota (Swagger): Verificar en package.json que la versión de swagger-jsdoc es 6.0.0, de lo contrario podría dar error



**DEPLOY**

***AWS - Lambda - Api***
- Modificar archivo .env

        ```DEPLOY=aws```

- Install

        ```npm install```

- Base de datos MongoDb externa: modificar en archivo ./secrets.json - DATABASE

- Deploy

    > crear archivo secrets.json

        {
            "PORT": 3001,
            "DATABASE_ATLAS": "-------- agregar base de datos ------------",
            "SECRET": "faysertoken",
            "URL": "https://api.etherscan.io/api?module=account&action=balancemulti&apikey=869Z76H93375IKC5FXRE2NEEZZTIE3GQ6H",
            "CLIENT_URL": "*",
            "NODE_ENV": "development",
            "DATABASE": "-------- agregar base de datos ------------",
            "PORT_CLIENTS": 3000,
            "REACT_APP_API_PORT": 3001,
            "REACT_APP_API_URL": "http://localhost",
            "DEPLOY":"aws" 
        }

    > No es necesario crear Lambda en aws
    > ```npm deploy```
    > Informacion aws requerida para la primera vez:

                -   Nombre de la app

                -   stage (dev/prod)

                -   region (us-east-1)

                -   api keys - aws

    > Luego de la primera vez solo ```npm deploy```


***AWS - client - S3***


    >   Crear Bucket para web static en AWS S3
    >   Install awscli
    >   comandos

            aws configure
    
    >   Modificar packaje.json "wallefront" por el correspondiente creado en S3

        "deploy": "aws s3 sync build/ s3://walletfront --acl public-read"


    >   npm deploy


***Docker - App - client + api***

- Modificar archivo .env

        DEPLOY=docker

- Crear archivo .env con los parametros establecidos

- En .env modificar:

         DATABASE=mongodb://mongodb

         MONGODB_DB=wallet || el nombre que corresponda

- .env en raiz de archivo ./cointraking

- Si client no resuelve las variables copiar .env en ./client

- Install en api y client

        npm install

- En raiz de archivo

    ```docker-compose build```

    ```docker-compose run```

- Nota: Para que todo funcione controlar que los puertos seteados sean los correctos. 