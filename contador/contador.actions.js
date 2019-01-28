"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contadorAction;
(function (contadorAction) {
    contadorAction["INCREMENTAR"] = "INCREMENTAR";
    contadorAction["DECREMENTAR"] = "DECREMENTAR";
    contadorAction["MULTIPLICAR"] = "MULTIPLICAR";
    contadorAction["DIVIDIR"] = "DIVIDIR";
    contadorAction["RESET"] = "RESET";
})(contadorAction = exports.contadorAction || (exports.contadorAction = {}));
exports.incrementadorAction = {
    type: contadorAction.INCREMENTAR,
};
exports.decrementadorAction = {
    type: contadorAction.DECREMENTAR,
};
exports.resetAction = {
    type: contadorAction.RESET,
};
// export const multiplicarAction: Action = {
//     type: 'MULTIPLICAR',
//     payload: 2
// }
// const dividirAction: Action = {
//     type: 'DIVIDIR',
//     payload: 2
// }
var dividirAction = /** @class */ (function () {
    function dividirAction(payload) {
        this.payload = payload;
        this.type = contadorAction.DIVIDIR;
    }
    return dividirAction;
}());
exports.dividirAction = dividirAction;
var multiplicarAction = /** @class */ (function () {
    function multiplicarAction(payload) {
        this.payload = payload;
        this.type = contadorAction.MULTIPLICAR;
    }
    return multiplicarAction;
}());
exports.multiplicarAction = multiplicarAction;
