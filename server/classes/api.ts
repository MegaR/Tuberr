import { Youtube } from './youtube';
import { Router } from "express";

export class API {
    private constructor() {
    }

    static setup(router: Router) {
        router.get('/channels', (req, res) => {
            res.send('hello');
        });

        router.get('/test', (req, res) => {
                const result = Youtube.test().then((result) => {
                    res.json(result);
                }).catch((error) => {
                    res.status(500).send(error.toString());
                });
        });

        return router;
    }
}