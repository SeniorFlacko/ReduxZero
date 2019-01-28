import { contadorReducer } from "./contador/contador.index";
import { Reducer , Action } from "./ngrx-fake/ngrx";
import { incrementadorAction } from './contador/contador.index';

class Store<T>{

    constructor(private reducer: Reducer<T>, private state:T){       
    }


    public getState(){
        return this.state;
    }

    public dispatch(action:Action){
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);


console.log(store.getState());


store.dispatch(incrementadorAction);

console.log(store.getState());
