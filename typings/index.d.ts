import {Client} from "discord.js";

export class ScriptCord {

    private client: Client;
    private readonly scriptsPath: string;

    constructor(client: Client, options: {
        scriptsPath?: string,
    });

    public register(): Promise<void>;
}

export class ScriptBase {

    public readonly _name_: string | undefined;
    public readonly _author_: string | undefined;
    public readonly _version_: string | undefined;

    protected readonly client: Client;

    constructor(client: Client);

    public init(): void;
}