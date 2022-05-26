[![npm Package](https://img.shields.io/badge/npm-v1.0.5-blue?style=for-the-badge&logo=appveyor)](https://www.npmjs.org/package/discord.js-components) [![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge&logo=appveyor)](https://github.com/Inadequado4192/discord.js-components/blob/master/LICENSE) [![Language](https://img.shields.io/badge/Language-JS_%2FTS-yellowgreen?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/discord.js-components)

> Helpful Links.
> [Discord Developers](https://discord.com/developers/docs/interactions/message-components), [Buttons](https://discordjs.guide/interactions/buttons.html#component-collectors), [Menus](https://discordjs.guide/interactions/select-menus.html#component-collectors)

# What is this?

##### Makes it easier to work with the message components.

# Installation

`npm install discord.js-components`

## How to use?

##### To add buttons to your message, use `AddComponents` for message components.
### - Button
```js
import { AddComponents } from "discord.js-components";

interaction.reply({
    content: "string",
    components: AddComponents({
        type: "BUTTON",
        options: [{
            customId: "1",
            style: "DANGER",
            label: "Button #1"
        }, {
            customId: "2"
        }],
    })
});
```
![res1](https://cdn.discordapp.com/attachments/543096648046346241/875357571135971328/unknown.png)
> **Note**.
> The `customId` key must be specified for the button and it must be **unique**.

&ensp;
### - SELECT MENU
```js
import { AddComponents } from "discord.js-components";

interaction.reply({
    content: "string",
    components: AddComponents({
        type: "SELECT_MENU",
        options: {
            customId: "1",
            options: [
                {
                    label: "Label 1",
                    value: "Value 1"
                },
                {
                    label: "Label 2",
                    value: "Value 2"
                }
            ]
        }
    })
});
```
![res2](https://cdn.discordapp.com/attachments/543096648046346241/875358038545010708/unknown.png)
> **Note**.
> The `customId` key must be specified for the button and it must be **unique**.

&ensp;

---

&ensp;

# Documentation
## `AddComponents`
```ts
AddComponents(...options: (ComponentButton | ComponentMenu)[]): (MessageActionRow | MessageActionRowOptions)[];
```

### Example
Each argument of the `AddComponents` function is a new row.
```js
AddComponents({
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
});
```
#### Result
![Example #1](https://cdn.discordapp.com/attachments/543096648046346241/875353189094936576/unknown.png)