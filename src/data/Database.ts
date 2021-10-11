import fs, { PathLike } from 'graceful-fs';
import _ from "lodash";

export default class Database {
    insidePath: string;
    outsidePath: string;

    constructor(insidePath: string, outsidePath: string) {
        console.log(insidePath);
        /** this.insidePath = insidePath;
        this.outsidePath = outsidePath; */

        fs.writeFileSync(insidePath, '{}');

        // if (!fs.existsSync(insidePath)) fs.writeFileSync(insidePath, '{}');
    }

    get(key: string) {
        const data: object = require(this.insidePath)
        return _.get(data, key);
    }

    async list() {
        
    }

    async set(key: string, value: string) {
        const data: object = require(this.insidePath)
    }
}