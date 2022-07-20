"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const index_js_1 = require("../core/index.js");
let comp = (0, index_js_1.addComponents)({
    type: "BUTTON",
    options: [{
            customId: "1",
            style: discord_js_1.ButtonStyle.Primary,
            label: "Primary"
        }, {
            customId: "2",
            style: discord_js_1.ButtonStyle.Success,
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
({ send() { console.log(arguments); } }.send({ components: comp }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUN0RCwrQ0FBaUQ7QUFJakQsSUFBSSxJQUFJLEdBQUcsSUFBQSx3QkFBYSxFQUFDO0lBQ3JCLElBQUksRUFBRSxRQUFRO0lBQ2QsT0FBTyxFQUFFLENBQUM7WUFDTixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSx3QkFBVyxDQUFDLE9BQU87WUFDMUIsS0FBSyxFQUFFLFNBQVM7U0FDbkIsRUFBRTtZQUNDLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHdCQUFXLENBQUMsT0FBTztZQUMxQixLQUFLLEVBQUUsU0FBUztTQUNuQixDQUFDO0NBQ0wsRUFBRTtJQUNDLElBQUksRUFBRSxhQUFhO0lBQ25CLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxHQUFHO1FBQ2IsT0FBTyxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7YUFDYixDQUFDO0tBQ0w7Q0FDSixDQUFDLENBQUM7QUFFSCxDQUFDLEVBQUUsSUFBSSxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQTZCLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQSJ9