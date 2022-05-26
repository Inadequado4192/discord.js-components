"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddComponents = void 0;
function AddComponents(...components) {
    let result = components.map(a => ({
        type: "ACTION_ROW",
        components: (() => {
            if (a.type == "BUTTON")
                return a.options.map(v => Object.assign({ type: a.type }, v));
            else if (a.type == "SELECT_MENU")
                return Object.assign({ type: a.type }, a.options);
        })()
    }));
    return result;
}
exports.AddComponents = AddComponents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFxQkEsU0FBZ0IsYUFBYSxDQUFDLEdBQUcsVUFBNkI7SUFDMUQsSUFBSSxNQUFNLEdBQVEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUk7UUFDdEMsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLFFBQVE7Z0JBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pGLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhO2dCQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxFQUFFO0tBQ04sQ0FBQSxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBVkQsc0NBVUMifQ==