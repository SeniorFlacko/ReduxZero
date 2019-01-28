
import { Action } from '../ngrx-fake/ngrx';

export enum contadorAction{
    INCREMENTAR = 'INCREMENTAR',
    DECREMENTAR = 'DECREMENTAR',
    MULTIPLICAR = 'MULTIPLICAR',
    DIVIDIR = 'DIVIDIR',
    RESET = 'RESET'
}
export const incrementadorAction: Action = {
    type: contadorAction.INCREMENTAR,
}

export const decrementadorAction: Action = {
    type: contadorAction.DECREMENTAR,
}

export const resetAction: Action = {
    type: contadorAction.RESET,
}

// export const multiplicarAction: Action = {
//     type: 'MULTIPLICAR',
//     payload: 2
// }

// const dividirAction: Action = {
//     type: 'DIVIDIR',
//     payload: 2
// }

export class dividirAction implements Action{
    public type: string = contadorAction.DIVIDIR;
    constructor(public payload: any){}
}

export class multiplicarAction implements Action{
    public type: string = contadorAction.MULTIPLICAR;
    constructor(public payload: any){}
}