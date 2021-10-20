## Pasos deploy api en Lambda ##

***Configuracion inicial***

-   Crear, en api, archivo secrets.json

-   Pegar el siguiete Json

        {
            "PORT": 4000,
            "DATABASE_ATLAS": "------------------------- aca base de datos ATLAS -----------------------------------",
            "SECRET": "faysertoken",
            "URL": "https://api.etherscan.io/api?module=account&action=balancemulti&apikey=869Z76H93375IKC5FXRE2NEEZZTIE3GQ6H",
            "PORT_CLIENTS": 3001,
            "CLIENT_URL": "*",
            "NODE_ENV": "development",
            "DATABASE": "localhost",
            "MONGODB_DB": "wallet",
            "DEPLOY": "aws"
        }


-   Reemplazar DATABAS_ATLAS por la base de datos correspondiente - no establecido por politicas de seguridad de mongo

-   npm install


***Configuracion serverless - Si no se tiene instalado serverless o es la primera vez***


-   sudo npm install -g serverless

-   Comprobar: serverless --version

-   Configuracion con aws: 

            Tener a mano credenciales aws - access key & secret key

            En consola command:

                `serverless config credentials --provider aws --key [access key] --secret [secret key]`

            Video de ayuda: https://youtu.be/KngM5bfpttA


***Deploy en aws lambda***

- Controlar que secret.DEPLOY = aws

- En consola:

        serverless deploy    o  npm run deploy

- cualquier de los dos comandos funcionan. 


- output: direccion aws.


