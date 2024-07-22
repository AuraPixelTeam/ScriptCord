import {Client} from "discord.js";

export class ScriptBase {

    public readonly _name_: string | undefined;
    public readonly _author_: string | undefined;
    public readonly _version_: string | undefined;

    private readonly client: Client;

    constructor(client: Client) {
        this.client = client;
        this.init()
    }

    public init(): void {}
}