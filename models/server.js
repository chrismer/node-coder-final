import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from '../routes/usuarios.js';

const dotenvConfig = dotenv.config();

const app = express();

export default class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas
        this.routes();
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    //rutas
    routes(){
        this.app.use(this.usuariosPath, router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

