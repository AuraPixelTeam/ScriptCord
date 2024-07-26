import {Client} from "discord.js";

export class ScriptCord {

    private client: Client;
    private readonly scriptsPath: string;

    constructor(client: Client, options: {
        scriptsPath?: string,
    });

    public register(): Promise<void>;
}