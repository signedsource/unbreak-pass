import prompts from "prompts";

(async () => {
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
            
            break;
        case "remove_pw":
            // List them the platforms, make them introduce the secure key for the password, and then remove it if its valid
            break;
        case "decrypt_pw":
            // List them the platforms, make them introduce the secure key for the password, and then decrypt the password if its valid
            break;
        case "close":
            process.exit(0);
            break;
    }
})();