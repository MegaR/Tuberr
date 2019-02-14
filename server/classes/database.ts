import * as sqlite3 from 'sqlite3';
import * as fs from 'fs';
import { promisify } from 'util';
import { Logger } from './logger';

export class Database {
    static db: sqlite3.Database;

    private constructor() {
    }

    static async setup(): Promise<void> {
        const version = await this.getVersion();
        switch (version) {
            case 0:
                Logger.log('DB', 'Migrating to version 1');
                const sql = (await promisify(fs.readFile)('server/sql/version.0.sql')).toString();
                await this.exec(sql);
                break;
        }
    }

    static async getVersion(): Promise<Number> {
        try {
            const result = await this.get(`SELECT version FROM Version`);
            return result['version'];
        } catch (error) {
            if (error.toString() === "Error: SQLITE_ERROR: no such table: Version") {
                return 0;
            }

            throw error;
        }
    }

    static async get(sql: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.db.get(sql, (error: Error, row) => {
                if (error) return reject(error);
                resolve(row);
            });
        });
    }

    static async exec(sql: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.db.exec(sql, (error) => {
                if (error) return reject(error);
                resolve();
            });
        });
    }

    static open(): void {
        this.db = new sqlite3.Database('data/database.db');
        Logger.log('DB', 'Opened database data/database.db');
    }

    static close(): void {
        this.db.close();
    }
}