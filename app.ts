import prompts from "prompts";
import Database from "./src/data/Database.js";
import Password from "./src/handlers/Password.js";
import config from "./src/utils/Config.js";
import logger from "./src/utils/Logger.js";

(async () => {
    const db: Database = new Database(config.insidePath, config.outsidePath);

    const initMenu = await prompts({
        type: 'select',
        name: 'value',
        message: 'Select an option from the menu',
        choices: [
            { title: 'Add password', value: 'add_pw' },
            { title: 'Remove password', value: 'remove_pw' },
            { title: 'Decrypt password', value: 'decrypt_pw' },
            { title: 'Close', value: 'close' }
        ]
    });

    switch (initMenu.value) {
        case "add_pw":
            new Password(db, "", "", "").addPw();
            break;
        case "remove_pw":
            new Password(db, "", "", "").removePw();
            break;
        case "decrypt_pw":
            new Password(db, "", "", "").decryptPw();
            break;
        case "close":
            logger.info("Goodbye my man, hope your passwords don't get hacked.")
            process.exit(0);
            break;
    }
})();