<div align="center">
    <img alt="Version" src="https://img.shields.io/github/package-json/v/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor" />
    <br>
    <img alt="Repo size" src="https://img.shields.io/github/repo-size/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor" />
    <a href="https://github.com/Inadequado4192/discord.js-components/blob/main/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor" />
    </a>
    <img alt="LICENSE" src="https://img.shields.io/github/languages/top/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor" />
    </a>
    <br>
    <a href="https://github.com/Inadequado4192/discord.js-components/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor">
    </a>
    <a href="https://github.com/Inadequado4192/discord.js-components/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/Inadequado4192/discord.js-components?style=for-the-badge&logo=appveyor">
    </a>
</div>

> Supported versions of <u>discord.js</u>
> * `discord.js-components@14.0.3`
> <i>`14.0.0 - 14.0.3`</i>


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
            style: ButtonStyle.Success,
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
addComponents(...components: (Menu | Button)[]): ActionRowBuilder<Builder>[];
```

### Example
Each argument of the `AddComponents` function is a new row.
```js
AddComponents({
    type: "BUTTON",
    options: [{
        customId: "1",
        style: ButtonStyle.Primary,
        label: "Button #1"
    }],
}, {
    type: "BUTTON",
    options: [{
        customId: "2",
        style: ButtonStyle.Danger,
        label: "Button #2"
    }],
});
```
#### Result
![Example #1](https://cdn.discordapp.com/attachments/543096648046346241/875353189094936576/unknown.png)