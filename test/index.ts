import { Client } from "discord.js";
import { AddComponents } from "../core/index.js";
// const { Client } = require("discord.js");
// const { AddComponents } = require("../core/index.js");

let comp = AddComponents({
    type: "BUTTON",
    options: [{
        customId: "1",
        style: "PRIMARY",
    }, {
        customId: "2",
        style: "SECONDARY",
    }],
}, {
    type: "SELECT_MENU",
    options: {
        customId: "3",
        options: [{
            label: "t", value: "T"
        }]
    }
});

console.log(JSON.stringify(comp, null, "    "));

(() => {
    if (1 == 1) return;


    let client = new Client({ intents: [] });
    client.channels.fetch("").then(c => {
        if (c?.isText()) c.send({
            components: comp
        })
    });
})();