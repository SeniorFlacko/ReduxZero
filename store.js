"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contador_index_1 = require("./contador/contador.index");
var contador_index_2 = require("./contador/contador.index");
var Store = /** @class */ (function () {
    function Store(reducer, state) {
        this.reducer = reducer;
        this.state = state;
    }
    Store.prototype.getState = function () {
        return this.state;
    };
    Store.prototype.dispatch = function (action) {
        this.state = this.reducer(this.state, action);
    };
    return Store;
}());
var store = new Store(contador_index_1.contadorReducer, 10);
console.log(store.getState());
store.dispatch(contador_index_2.incrementadorAction);
console.log(store.getState());
store.dispatch(contador_index_2.decrementadorAction);
console.log(store.getState());
store.dispatch(new contador_index_2.multiplicarAction(400));
console.log(store.getState());
store.dispatch(new contador_index_2.dividirAction(10));
console.log(store.getState());
store.dispatch(contador_index_2.resetAction);
console.log(store.getState());
