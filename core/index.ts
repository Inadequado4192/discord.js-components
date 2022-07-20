import * as Discord from "discord.js";
type RestOrArray<T> = T[] | [T[]];











interface SelectMenuBuilderParameters {
    customId: string
    placeholder?: string
    disabled?: boolean
    minValues?: number
    maxValues?: number
    options: RestOrArray<Discord.SelectMenuOptionBuilder | Discord.SelectMenuComponentOptionData | Discord.APISelectMenuOption>
}
class SelectMenuBuilder extends Discord.SelectMenuBuilder {
    constructor(o: SelectMenuBuilderParameters) {
        super();
        this.setCustomId(o.customId).setOptions(...o.options);

        o.disabled && this.setDisabled(o.disabled);
        o.maxValues && this.setMaxValues(o.maxValues);
        o.minValues && this.setMinValues(o.minValues);
        o.placeholder && this.setPlaceholder(o.placeholder);
    }
}


interface ButtonBuilderParameters {
    customId: string
    label: string
    style: Discord.ButtonStyle
    url?: string
    disabled?: boolean
    emoji?: Discord.ComponentEmojiResolvable
}
class ButtonBuilder extends Discord.ButtonBuilder {
    constructor(o: ButtonBuilderParameters) {
        super();
        this.setCustomId(o.customId)
            .setLabel(o.label)
            .setStyle(o.style)

        o.url && this.setURL(o.url);
        o.disabled && this.setDisabled(o.disabled);
        o.emoji && this.setEmoji(o.emoji);
    }
}



class ActionRowBuilder<T extends Discord.AnyComponentBuilder> extends Discord.ActionRowBuilder<T> {
    constructor(components: RestOrArray<T> | T) {
        super();
        Array.isArray(components)
            ? this.addComponents(...components)
            : this.addComponents([components])
    }
}







































export type Menu = {
    type: "SELECT_MENU",
    options: SelectMenuBuilderParameters;
}
export interface Button {
    type: "BUTTON",
    options: ButtonBuilderParameters[]
}



export function addComponents(...components: (Menu | Button)[]) {
    return components.map(a => {
        type Builder = ButtonBuilder | SelectMenuBuilder;
        let c: Builder | Builder[];
        if (a.type == "BUTTON") c = a.options.map(p => new ButtonBuilder(p));
        else if (a.type == "SELECT_MENU") c = new SelectMenuBuilder(a.options);
        else throw Error(`Unknown type ${a["type"]}`);

        return new ActionRowBuilder(c);
    })
}

({} as Discord.TextChannel).send({
    components: addComponents({
        type: "BUTTON",
        options: []
    })
})

