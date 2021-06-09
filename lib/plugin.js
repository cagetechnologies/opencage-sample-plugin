"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = exports.PluginFactory = void 0;
const litegraph_js_1 = require("litegraph.js");
class PluginFactory {
    factory() {
        return new Plugin();
    }
}
exports.PluginFactory = PluginFactory;
class Plugin extends litegraph_js_1.LGraphNode {
    constructor() {
        super();
        this.title = "Sample Plugin";
        this.addInput("in", "any");
        this.addOutput("out", "any");
    }
    onExecute() {
        if (this.getInputData(0)) {
            let text = this.getInputData(0).text;
            console.log('Visualizing is ' + text);
        }
    }
}
exports.Plugin = Plugin;
//# sourceMappingURL=plugin.js.map