import { Action, Reducer } from "../ngrx-fake/ngrx";
import { contadorAction } from "./contador.actions";


export function contadorReducer( state = 10 , action: Action ){
    switch (action.type) {
        case contadorAction.INCREMENTAR:
            return state + 1;

        case contadorAction.DECREMENTAR:
            return state - 1;

        case contadorAction.MULTIPLICAR:
            return state * action.payload;
        
        case contadorAction.DIVIDIR:
            return state / action.payload;

        case contadorAction.RESET:
            return 0;
    
        default:
            return state;
    }
}