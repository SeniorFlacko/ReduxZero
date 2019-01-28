"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var contador_index_1 = require("./contador/contador.index");
var contador_actions_1 = require("./contador/contador.actions");
var store = redux_1.createStore(contador_index_1.contadorReducer);
store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch(contador_actions_1.incrementadorAction);
