import * as moment from 'moment';

export class Logger {
    private constructor() {}

    private static format(category: string, message: any): string {
        if(message !== undefined) {
            const date = moment().format('YYYY-MM-DD h:mm:ss.SS');
            message = `[${date}] [${category}] ${message.toString()}`;
        }

        return message;
    }

    static verbose(category: string, message?: any, ...args: any[]): void {
        console.log(this.format(category, message), ...args);
    }

    static log(category: string, message?: any, ...args: any[]): void {
        console.log(this.format(category, message), ...args);
    }

    static warning(category: string, message?: any, ...args: any[]): void {
        console.warn(this.format(category, message), ...args);
    }

    static debug(category: string, message?: any, ...args: any[]): void {
        console.debug(this.format(category, message), ...args);
    }

    static error(category: string, message?: any, ...args: any[]): void {
        console.error(this.format(category, message), ...args);
    }
}