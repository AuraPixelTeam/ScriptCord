import {Client} from "discord.js";
import * as fs from "node:fs";
import path from "node:path";
import {ScriptBase} from "./base/ScriptBase";


export default class ScriptCord {

    private readonly client: Client;
    private readonly scriptsPath: string;

    constructor(client: Client, options?: {
        scriptsPath?: string,
    }) {
        this.client = client;
        this.scriptsPath = options?.scriptsPath ?? "scripts";
    }

    async register() {
        if (!fs.existsSync(this.scriptsPath)) {
            fs.mkdirSync(this.scriptsPath);
        }

        const scripts = fs.readdirSync(this.scriptsPath)
            .filter(file => file.endsWith(".js"));
        for (let script of scripts) {
            const { default: scriptModule } = await import(path.join(__dirname, "..", `${this.scriptsPath}/${script}`));
            console.log(`Loaded script ${scriptModule._name_} v${scriptModule._version_} by ${scriptModule._author_}!`)
            // @ts-ignore
            new scriptModule(this.client)
        }
    }
}