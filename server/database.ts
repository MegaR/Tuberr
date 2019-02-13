import * as sqlite3 from 'sqlite3';

export class Database {
    db: sqlite3.Database;
    
    constructor() {

    }

    open(): void {
        this.db = new sqlite3.Database(':memory:');
    }

    close(): void {
        this.db.close();
    }
}