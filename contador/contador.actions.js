"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementadorAction = {
    type: 'INCREMENTAR',
};
exports.decrementadorAction = {
    type: 'DECREMENTAR',
};
exports.multiplicarAction = {
    type: 'MULTIPLICAR',
    payload: 2
};
// const dividirAction: Action = {
//     type: 'DIVIDIR',
//     payload: 2
// }
var dividirAction = /** @class */ (function () {
    function dividirAction(payload) {
        this.payload = payload;
        this.type = 'DIVIDIR';
    }
    return dividirAction;
}());
exports.dividirAction = dividirAction;
