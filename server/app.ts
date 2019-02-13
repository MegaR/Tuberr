import * as express from 'express';
import {Express, Router} from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import { Database } from './database';

class App {

    http: Express;
    router: Router;
    database: Database;

    constructor() {
        this.http = express();
        this.database = new Database();
        this.setupExpress();
    }

    setupExpress(): void {
        this.router = express.Router();

        this.http.use(bodyParser.json({limit: '50mb'}));
        this.http.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
        this.http.use(cookieParser());
        
        this.http.use('/api', this.router);
        this.http.use('/public', express.static(path.join('client', 'public')));
        this.http.use('/', (req, res) => {
            res.sendFile('index.html', {root: 'client' });
        });
    }

    start(): void {
        this.database.open();

        this.http.listen(3000, undefined, undefined, () => {
            console.log('Listening on port 3000');
        });
    }

    stop(): void {
        this.database.close();

    }
}

const app = new App();
app.start();