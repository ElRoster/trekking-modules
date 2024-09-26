import express from 'express';
import Guiderouter from '../routes/Guiderouter.js'
import Destination from '../routes/Destinationrouter.js'
import dbConnect from '../database/config.js';
import '../database/config.js';


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000; 
        this.middlewares();
        this.dbConnection();
        this.routes();
        this.listen();
    }

    async dbConnection() {
        try {
            await dbConnect();
            console.log('Connected to the database');
        } catch (error) {
            console.error('Error connecting to the database:', error.message);
        }
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api', Guiderouter);
        this.app.use('/api', Destination);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port 3000`);
        });
    }
}

export default Server;

