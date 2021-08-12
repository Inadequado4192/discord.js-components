import { AddComponents } from "../core/index.js";

console.log(AddComponents({
    type: "BUTTON",
    options: [{
        customId: "1",
        style: "PRIMARY",
        label: "Button #1"
    }],
}, {
    type: "BUTTON",
    options: [{
        customId: "2",
        style: "DANGER",
        label: "Button #2"
    }],
}));
