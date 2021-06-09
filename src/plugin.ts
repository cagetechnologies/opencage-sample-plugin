import { LGraphNode } from "litegraph.js";

export class PluginFactory {
    factory() {
        return new Plugin();
    }
}

export class Plugin extends LGraphNode {
    title = "Sample Plugin";

    constructor() {
        super();
        this.addInput("in","any");
		this.addOutput("out","any");
    }
    
    onExecute() {
        if (this.getInputData(0)) {
            let text = this.getInputData(0).text;
            console.log('Visualizing is ' + text)
        }
    }
}