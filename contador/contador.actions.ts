
import { Action } from '../ngrx-fake/ngrx';

export const incrementadorAction: Action = {
    type: 'INCREMENTAR',
}

export const decrementadorAction: Action = {
    type: 'DECREMENTAR',
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

// const dividirAction: Action = {
//     type: 'DIVIDIR',
//     payload: 2
// }

export class dividirAction implements Action{
    public type: string = 'DIVIDIR';
    constructor(public payload: any){}
}