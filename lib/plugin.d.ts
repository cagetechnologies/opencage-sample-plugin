import { LGraphNode } from "litegraph.js";
export declare class PluginFactory {
    factory(): Plugin;
}
export declare class Plugin extends LGraphNode {
    title: string;
    constructor();
    onExecute(): void;
}
