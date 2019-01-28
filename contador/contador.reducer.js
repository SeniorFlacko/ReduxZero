"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contador_actions_1 = require("./contador.actions");
function contadorReducer(state, action) {
    if (state === void 0) { state = 10; }
    switch (action.type) {
        case contador_actions_1.contadorAction.INCREMENTAR:
            return state + 1;
        case contador_actions_1.contadorAction.DECREMENTAR:
            return state - 1;
        case contador_actions_1.contadorAction.MULTIPLICAR:
            return state * action.payload;
        case contador_actions_1.contadorAction.DIVIDIR:
            return state / action.payload;
        case contador_actions_1.contadorAction.RESET:
            return 0;
        default:
            return state;
    }
}
exports.contadorReducer = contadorReducer;
