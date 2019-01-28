"use strict";
//Acciones 
var incrementadorAction = {
    type: 'INCREMENTAR',
};
var decrementadorAction = {
    type: 'DECREMENTAR',
};
var multiplicarAction = {
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
function reducer(state, action) {
    if (state === void 0) { state = 10; }
    switch (action.type) {
        case 'INCREMENTAR':
            return state + 1;
        case 'DECREMENTAR':
            return state - 1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
}
//Usar el reducer
var divideAction = new dividirAction(2);
console.log(reducer(10, divideAction));
