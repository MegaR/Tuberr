import { API } from './classes/api';
import * as express from 'express';
import {Express, Router} from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
import { Database } from './classes/database';
import { Logger } from './classes/logger';

class App {

    http: Express;

    constructor() {
        this.http = express();
        this.setupExpress();
    }

    setupExpress(): void {
        this.http.use(bodyParser.json({limit: '50mb'}));
        this.http.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
        this.http.use(cookieParser());

        this.http.use((req, res, next)=>{
            Logger.verbose('APP', `request: ${req.originalUrl}`);
            next();
        });
        
        const router = express.Router();
        this.http.use('/api', API.setup(router));

        this.http.use('/public', express.static(path.join('client', 'public')));
        this.http.get('/', (req, res) => {
            res.sendFile('index.html', {root: 'client' });
        });
    }

    async start(): Promise<void> {
        Database.open();
        await Database.setup();

        this.http.listen(3000, undefined, undefined, () => {
            Logger.log('APP', 'Listening on port 3000');
        });
    }

    stop(): void {
        Database.close();
    }
}

const app = new App();
app.start()
.then(()=>{
    Logger.log('APP', 'Tuberr started');
}).catch((error: Error) => {
    Logger.error('APP', 'A fatal error occured', Error.toString());
});