"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_js_1 = require("../core/index.js");
let comp = index_js_1.AddComponents({
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
    if (1 == 1)
        return;
    let client = new discord_js_1.Client({ intents: [] });
    client.channels.fetch("").then(c => {
        if (c?.isText())
            c.send({
                components: comp
            });
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFvQztBQUNwQywrQ0FBaUQ7QUFJakQsSUFBSSxJQUFJLEdBQUcsd0JBQWEsQ0FBQztJQUNyQixJQUFJLEVBQUUsUUFBUTtJQUNkLE9BQU8sRUFBRSxDQUFDO1lBQ04sUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsU0FBUztTQUNuQixFQUFFO1lBQ0MsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsV0FBVztTQUNyQixDQUFDO0NBQ0wsRUFBRTtJQUNDLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxHQUFHO1FBQ2IsT0FBTyxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRzthQUN6QixDQUFDO0tBQ0w7Q0FDSixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRWhELENBQUMsR0FBRyxFQUFFO0lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU87SUFHbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxtQkFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9CLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRTtZQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9