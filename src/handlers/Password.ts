import prompt from "prompts";
import Database from "../data/Database";

export default class PasswordHandler {
    db: Database;
    method: string;
    password: string;
    secureKey: string;

    constructor (db: Database, method: string, password: string, secureKey: string) {
        this.db = db;
        this.method = method;
        this.password = password;
        this.secureKey = secureKey;
    }

    async addPw() {
        const socialMediaPw = await prompt({
            type: "text",
            name: "socialMedia",
            message: "Type out the social media that has this password"
        });

        const password = await prompt({
            type: "password",
            name: "passwd",
            message: "Type out the password (remember that we only store the password encrypted)"
        });

        const secureKey = await prompt({
            type: "password",
            name: "securekey",
            message: "Type out the secure key to encrypt the password with (this doesn't get stored, you must remember it)",
            validate: v => {
                if (v.length == (8 || 16 || 32 || 64 || 128 || 256)) return true;
                return "The length must be a multple of 2 (starting from 8, and at a maximum of 256)";
            }
        });

        const pws = this.db.get("passwords");

        this.db.set("passwords", pws);
    }

    async removePw() {

    }

    async decryptPw() {

    }
}