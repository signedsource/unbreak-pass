import fs, { PathLike } from 'graceful-fs';

export default class Database {
    insidePath: PathLike;
    outsidePath: string;

    constructor(insidePath: PathLike, outsidePath: string) {
        this.insidePath = insidePath;
        this.outsidePath = outsidePath;

        if (!fs.existsSync(insidePath)) fs.writeFileSync(insidePath, '{}');
    }

    async get() {

    }

    async list() {
        
    }

    async set() {

    }
}