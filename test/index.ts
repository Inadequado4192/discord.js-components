import { ButtonStyle, TextChannel } from "discord.js";
import { addComponents } from "../core/index.js";
// const { Client } = require("discord.js");
// const { AddComponents } = require("../core/index.js");

let comp = addComponents({
    type: "BUTTON",
    options: [{
        customId: "1",
        style: ButtonStyle.Primary,
        label: "Primary"
    }, {
        customId: "2",
        style: ButtonStyle.Success,
        label: "Success"
    }],
}, {
    type: "SELECT_MENU",
    options: {
        customId: "3",
        options: [{
            label: "t",
            value: "T"
        }]
    }
});

({ send() { console.log(arguments) } } as unknown as TextChannel).send({ components: comp })