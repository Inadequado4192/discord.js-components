[![npm Package](https://img.shields.io/badge/npm-v1.0.2-blue?style=for-the-badge&logo=appveyor)](https://www.npmjs.org/package/discord.js-components) [![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge&logo=appveyor)](https://github.com/Inadequado4192/discord.js-components/blob/master/LICENSE) [![Language](https://img.shields.io/badge/Language-JS_%2FTS-yellowgreen?style=for-the-badge&logo=appveyor)](https://www.npmjs.com/package/discord.js-components)

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

### To respond to buttons or menus, you need the `ComponentCollector` function. You can find more information about it [below](#componentcollector).

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

## `ComponentCollector`
```ts
ComponentCollector(msg: Message | CommandInteraction, options: ComponentCollectorOptions): Promise<void>
```
###### `ComponentCollectorOptions`
```ts
    /** Who can answer the components. */
targets: Snowflake[] | "everyone",

    /** Answer collection time. */
time: number,

    /** No response will be received after the collection time has elapsed. ("end" will still be called). */
timeIsUp?: (collected: Collection<string, MessageComponentInteraction>) => void,

    /** The message collection time has expired. */
end?: (collected: Collection<string, MessageComponentInteraction>) => void,

    /** Do I delete the message about it after the collection is complete?
     * 
     * Default: false
    */
delete?: boolean,

    /** Remove the components after the collection is complete?
     * 
     * Default: true
    */
removeComponents?: boolean,

    /** After the first response, message collection will be discontinued.
     * 
     * Default: false
    */
oneAnswer?: boolean,

    /** Callback for buttons. */
button?: { [key: string]: (i: ButtonInteraction) => void; },

    /** Callback for menu. */
menu?: { [key: string]: (i: SelectMenuInteraction) => void; }
```
### Example
```js
ComponentCollector(interaction /* or message */, {
    targets: [author.id],
    time: 10000,
    button: {
        "1": () => console.log("1"),
        "2": () => console.log("2")
    },
    menu: {
        "m1": () => console.log("m1")
    },
    timeIsUp: () => msg.edit("Time is up!"),
    end: () => msg.edit("End"),
    delete: false,
    oneAnswer: true,
    removeComponents: true
});
```
