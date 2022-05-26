import {
    BaseMessageComponentOptions,
    InteractionButtonOptions,
    MessageActionRowOptions,
    MessageSelectMenuOptions
} from "discord.js";

// let enabledErrors = true;

// export type Menu = Omit<MessageSelectMenuOptions, "type" | "options"> & { options: (MessageSelectOptionData | { emoji: { name: string, id: Snowflake } })[] };
export type Menu = {
    type: "SELECT_MENU",
    options: Omit<MessageSelectMenuOptions, "type">;
}

export interface Button {
    type: "BUTTON",
    options: Omit<InteractionButtonOptions, "type">[]
}

type R = (Required<BaseMessageComponentOptions> & MessageActionRowOptions);
export function AddComponents(...components: (Button | Menu)[]) {
    let result: R[] = components.map(a => (<R>{
        type: "ACTION_ROW",
        components: (() => {
            if (a.type == "BUTTON") return a.options.map(v => Object.assign({ type: a.type }, v));
            else if (a.type == "SELECT_MENU") return Object.assign({ type: a.type }, a.options);
        })()
    }));

    return result;
}