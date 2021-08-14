"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentCollector = exports.AddComponents = void 0;
const discord_js_1 = require("discord.js");
function AddComponents(...options) {
    return options.map(option => ({
        type: "ACTION_ROW",
        components: (() => {
            let ids = new Map();
            function createId(id, btn) {
                id = String(id);
                if (ids.has(id))
                    return createId(+id + 1, btn);
                else {
                    ids.set(id, btn);
                    return id;
                }
            }
            let rootArray = Array.isArray(option.options) ? option.options : [option.options];
            switch (option.type) {
                case "BUTTON":
                    return rootArray.map(b => {
                        b.type = "BUTTON";
                        b.label = b.label ?? "undefined";
                        b.style = b.style ?? "PRIMARY";
                        b.customId = b.customId ?? createId(1, b);
                        return b;
                    });
                case "SELECT_MENU":
                    return rootArray.map(m => {
                        m.type = "SELECT_MENU";
                        m.customId = m.customId ?? createId(1, m);
                        return m;
                    });
            }
            throw Error(`Unknown Type "${option.type}"`);
        })()
    }));
}
exports.AddComponents = AddComponents;
function ComponentCollector(msg, options) {
    return new Promise(async (t, f) => {
        let m = msg instanceof discord_js_1.Message ? msg : await msg.fetchReply();
        const collector = m.createMessageComponentCollector({ filter: i => options.targets === "everyone" || options.targets.includes(i.user.id), time: options.time });
        let answer = false;
        collector.on("collect", async (i) => {
            try {
                answer = true;
                if (i.isButton() && options.button?.[i.customId])
                    await options.button[i.customId](i);
                if (i.isSelectMenu() && options.menu?.[i.customId])
                    await options.menu[i.customId](i);
                await i.deferUpdate().catch(f);
                if (options.oneAnswer === true)
                    collector.stop();
            }
            catch (error) {
                f(error);
            }
        });
        collector.on("end", async (collected) => {
            try {
                if (options.removeComponents === true || options.removeComponents === undefined)
                    await (msg instanceof discord_js_1.Message ? msg.edit : msg.editReply).apply(msg, [{ components: [] }]).catch(f);
                if (options.end)
                    await options.end(collected);
                if (answer === false && options.timeIsUp)
                    await options.timeIsUp(collected);
                if (options.delete === true)
                    await (msg instanceof discord_js_1.Message ? msg.delete : msg.deleteReply).apply(msg);
            }
            catch (error) {
                f(error);
            }
        });
        t(msg);
    });
}
exports.ComponentCollector = ComponentCollector;
//# sourceMappingURL=index.js.map