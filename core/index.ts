import { ButtonInteraction, CommandInteraction, InteractionButtonOptions, Message, MessageActionRow, MessageActionRowOptions, MessageComponentInteraction, MessageSelectMenuOptions, MessageSelectOptionData, SelectMenuInteraction, Snowflake, Collection } from "discord.js";

// let enabledErrors = true;

export type Menu = Omit<MessageSelectMenuOptions, "type" | "options"> & { options: (MessageSelectOptionData | { emoji: { name: string, id: Snowflake } })[] };
export type ComponentMenu = {
    type: "SELECT_MENU",
    options: Menu;
};

export type Button = Omit<InteractionButtonOptions, "type" | "style"> & { style?: InteractionButtonOptions["style"] };
export type ComponentButton = {
    type: "BUTTON",
    options: Button | Button[]
};
export function AddComponents(...options: (ComponentButton | ComponentMenu)[]): (MessageActionRow | MessageActionRowOptions)[] {
    return options.map(option => ({
        type: "ACTION_ROW" as const,
        components: (() => {
            let ids = new Map<String, InteractionButtonOptions | MessageSelectMenuOptions>();
            function createId(id: number | string, btn: InteractionButtonOptions | MessageSelectMenuOptions): string {
                id = String(id);
                if (ids.has(id)) return createId(+id + 1, btn);
                else { ids.set(id, btn); return id; }
            }
            let rootArray = Array.isArray(option.options) ? option.options : [option.options];
            switch (option.type) {
                case "BUTTON":
                    return (rootArray as Button[]).map(b => {
                        (b as InteractionButtonOptions).type = "BUTTON";
                        b.label = b.label ?? "undefined";
                        b.style = b.style ?? "PRIMARY";
                        b.customId = b.customId ?? createId(1, b as InteractionButtonOptions);
                        return b;
                    }) as InteractionButtonOptions[];
                case "SELECT_MENU":
                    return (rootArray as Menu[]).map(m => {
                        (m as MessageSelectMenuOptions).type = "SELECT_MENU";
                        m.customId = m.customId ?? createId(1, m as MessageSelectMenuOptions);
                        return m;
                    }) as MessageSelectMenuOptions[];
            }
            throw Error(`Unknown Type "${(option as any).type}"`);
        })()
    }));

}
export type ComponentCollectorOptions = {
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
}
export function ComponentCollector<T extends Message | CommandInteraction>(msg: T, options: ComponentCollectorOptions) {
    return new Promise<T>(async (t, f) => {
        let m = msg instanceof Message ? msg : await msg.fetchReply() as Message;
        const collector = m.createMessageComponentCollector({ filter: i => options.targets === "everyone" || options.targets.includes(i.user.id), time: options.time });

        let answer = false;
        collector.on("collect", async i => {
            try {
                answer = true;
                if (i.isButton() && options.button?.[i.customId]) await options.button[i.customId](i);
                if (i.isSelectMenu() && options.menu?.[i.customId]) await options.menu[i.customId](i);
                await i.deferUpdate();
                if (options.oneAnswer === true) collector.stop();
            } catch (error) { f(error); }
        });

        collector.on("end", async collected => {
            try {
                if (options.removeComponents === true || options.removeComponents === undefined)
                    await (<any>(msg instanceof Message ? msg.edit : msg.editReply)).apply(msg, [{ components: [] }]);
                if (options.end) await options.end(collected);
                if (answer === false && options.timeIsUp) await options.timeIsUp(collected);
                if (options.delete === true) await (<any>(msg instanceof Message ? msg.delete : msg.deleteReply)).apply(msg);
            } catch (error) { f(error); }
        });
        t(msg);
    });
}