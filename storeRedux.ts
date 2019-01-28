import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.index';
import { incrementadorAction } from './contador/contador.actions';

const store: Store = createStore( contadorReducer );

store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementadorAction);


